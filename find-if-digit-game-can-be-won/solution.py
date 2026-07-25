class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        alice = []
        bob = []
        for i in range(len(nums)):
            if nums[i] < 10:
                alice.append(nums[i])
            else:
                bob.append(nums[i])
        alice_sum = 0
        bob_sum = 0

        for i in range(len(alice)):
            alice_sum += alice[i]
        for j in range(len(bob)):
            bob_sum += bob[j]
        
        if alice_sum > bob_sum or bob_sum > alice_sum:
            return True
        else:
            return False
        
