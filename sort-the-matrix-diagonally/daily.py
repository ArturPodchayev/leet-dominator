from collections import Counter

class Solution:
    def lexGreaterPermutation(self, s: str, target: str) -> str:
        c = Counter(s)
        n = len(s)
        endi = n
        
        # 1. Match as long a prefix of `target` as possible
        for i in range(n):
            ch = target[i]
            if ch not in c or c[ch] == 0:
                endi = i
                break
            c[ch] -= 1

        # If target was fully matched, we must backtrack from the last character
        if endi == n:
            endi = n - 1
            c[target[endi]] += 1

        # 2. Try placing a strictly greater character starting from the longest valid prefix
        for i in range(endi, -1, -1):
            ch = target[i]
            
            # Find the smallest available character strictly greater than target[i]
            candidates = [y for y in c if c[y] > 0 and y > ch]
            if candidates:
                x = min(candidates)
                c[x] -= 1
                
                # Build the result
                suffix = "".join(y * c[y] for y in sorted(c.keys()) if c[y] > 0)
                return target[:i] + x + suffix
            
            # Backtrack: return target[i - 1] to the counter
            if i > 0:
                c[target[i - 1]] += 1

        return ""
