class Solution:
    def minCost(self, nums: list[int], queries: list[list[int]]) -> list[int]:
        N = len(nums)

        _preprocess_left_to_right = [-1 for _ in range(N)]
        _preprocess_left_to_right[-1] = 0
        _preprocess_left_to_right[0] = 1
        for i in range(N-2, 0, -1):
            if abs(nums[i] - nums[i+1]) < abs(nums[i] - nums[i-1]):
                _preprocess_left_to_right[i] = 1
            else:
                _preprocess_left_to_right[i] = abs(nums[i+1] - nums[i])
        for i in range(1, N):
            _preprocess_left_to_right[i] += _preprocess_left_to_right[i-1]
        
        _preprocess_right_to_left = [-1 for _ in range(N)]
        _preprocess_right_to_left[0] = 0
        _preprocess_right_to_left[-1] = 1
        for i in range(1, N-1):
            if abs(nums[i] - nums[i+1]) >= abs(nums[i] - nums[i-1]):
                _preprocess_right_to_left[i] = 1
            else:
                _preprocess_right_to_left[i] = abs(nums[i] - nums[i-1])
        for i in range(N-2,-1,-1):
            _preprocess_right_to_left[i] += _preprocess_right_to_left[i+1]

        answer = []

        for l, r in queries:
            if l == r:
                answer.append(0)
                continue

            if r > l:
                r_aux = r - 1
                dist = _preprocess_left_to_right[r_aux] - (_preprocess_left_to_right[l-1] if l-1 >= 0 else 0)
                answer.append(dist)
            else:
                r_aux = r + 1
                dist = _preprocess_right_to_left[r_aux] - (_preprocess_right_to_left[l+1] if l+1 < N else 0)
                answer.append(dist)

        return answer
    
