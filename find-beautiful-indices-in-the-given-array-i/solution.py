from collections import deque
class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        

        lens = len(s)
        lena = len(a)
        lenb = len(b)
        b_indices = deque()
        i = 0
        j = 0
        result = []
        while j <= lens - lenb:

            while j - i <= k:
                
                if s[j: j + lenb] == b:
                    b_indices.append(j)
                j += 1
                if b_indices and b_indices[0] < i - k:
                    b_indices.popleft()
            
            if s[i: i + lena] == a:
                if b_indices:
                    result.append(i)
                    
            i += 1
        while i <= lens - lena:
            if b_indices and b_indices[0] < i - k:
                    b_indices.popleft()
            if s[i: i + lena] == a:
                if b_indices:
                    result.append(i)
            i += 1

        return result
            
            
