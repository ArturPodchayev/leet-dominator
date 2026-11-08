class Solution:
    def perfectPairs(self, nums: List[int]) -> int:
        
        # -3, -2, -1, 0, 0, 1, 2, 3
        # 0 only with 0
        # -3, -1, 2, 4
        # num and its double

        abs_numbers = defaultdict(int)

        for val in nums:
            abs_numbers[abs(val)] += 1
        
        key_nums = sorted(abs_numbers.keys())
        
        l, r = 0, 1
        ans, cur_sum = 0, abs_numbers[key_nums[l]]

        while l < len(key_nums):

            cur_sum -= abs_numbers[key_nums[l]]

            while r < len(abs_numbers) and key_nums[r] <= 2 * key_nums[l]:
                cur_sum += abs_numbers[key_nums[r]]
                r+=1
            
            ans += ((abs_numbers[key_nums[l]] * (abs_numbers[key_nums[l]]-1)) // 2 + (cur_sum * abs_numbers[key_nums[l]]))

            l+=1
            
        return ans
