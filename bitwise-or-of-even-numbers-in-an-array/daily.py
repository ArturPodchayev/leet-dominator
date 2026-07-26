class Solution(object):
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        largest1 = largest2 = largest3 = float('-inf')
        smallest1 = smallest2 = float('inf')

        for num in nums:

            #Update three largest numbers
            if num >= largest1:
                largest3 = largest2
                largest2 = largest1
                largest1 = num
            elif num >= largest2:
                largest3 = largest2
                largest2 = num
            elif num >= largest3:
                largest3 = num

            #Update two smallest numbers
            if num <= smallest1:
                smallest2 = smallest1
                smallest1 = num
            elif num <= smallest2:
                smallest2 = num
            
        product1 = largest1*largest2*largest3
        product2 = smallest1*smallest2*largest1

        return max(product1, product2)
        
