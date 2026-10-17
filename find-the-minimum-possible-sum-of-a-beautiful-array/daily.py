class Solution:
    def minSwaps(self, nums: List[int]) -> int:

        def num_to_sum(n:int):
            a = 0
            while n!=0:
                a+=n%10
                n//=10
            return a

        result = 0
        mass_nums = [(ids, num_to_sum(val), val) for ids, val in enumerate(nums)]

        sort_mass_nums = sorted(mass_nums, key=lambda x: (x[1],x[2]))

        for i in range (len(nums)):
            while sort_mass_nums[i][0] != i:
                norm_index = sort_mass_nums[i][0]
                sort_mass_nums[norm_index], sort_mass_nums[i] = sort_mass_nums[i],sort_mass_nums[norm_index]
                result+=1
        
        return result
        
