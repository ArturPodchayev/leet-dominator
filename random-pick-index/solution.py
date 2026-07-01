class Solution:

    def __init__(self, nums: list[int]):
        
        self.index_dict = {}
        
        for i, e in enumerate(nums):

            if(e not in self.index_dict):
                self.index_dict[e] = [i]

            else:
                self.index_dict[e].append(i)

    def pick(self, target: int) -> int:
        
        return random.choice(self.index_dict[target])
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)
