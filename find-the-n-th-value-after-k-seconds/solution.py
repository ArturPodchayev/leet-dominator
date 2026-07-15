class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        # Create an array of length n filled with 1s.
        array = [1] * n
        
        # Iterate k times.
        for _ in range(k):
            # Iterate through the array from the second element to the last.
            for i in range(1, n):
                # Update each element to be the sum of all its preceding elements plus itself.
                array[i] += array[i-1]
        
        # Return the value of the last element in the array modulo 10^9 + 7.
        return array[-1] % (10**9 + 7)
