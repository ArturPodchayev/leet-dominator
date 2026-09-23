class Solution:
    def maxTotal(self, nums: List[int], s: str) -> int:
        stack = []
        ans = 0

        for i in range(len(nums)):
            if s[i] == '1':
                if stack and stack[-1] > nums[i]:
                    ans += stack.pop()
                    stack.append(nums[i])
                else:
                    ans += nums[i]
            else:
                while stack and nums[i] < stack[-1]:
                    stack.pop()
                stack.append(nums[i])

        return ans
