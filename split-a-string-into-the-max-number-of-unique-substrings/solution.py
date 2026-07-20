class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        # Helper function for backtracking
        def backtrack(start, seen):
            # If we've processed the whole string, return 0 since no more splits can be made
            if start == len(s):
                return 0
            
            max_split = 0
            
            # Try every possible substring starting from index `start`
            for end in range(start + 1, len(s) + 1):
                substring = s[start:end]
                if substring not in seen:
                    seen.add(substring)  # Add to the set
                    # Recursively call for the next part of the string
                    max_split = max(max_split, 1 + backtrack(end, seen))
                    seen.remove(substring)  # Backtrack: remove the substring after exploring this path
            
            return max_split
        
        # We will use a set to store seen substrings
        return backtrack(0, set())
