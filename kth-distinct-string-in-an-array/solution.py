class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        count = Counter(arr)

        d = 0

        for i in arr:
            if count[i] == 1:
                d += 1
            
            if d == k:
                return i
        
        return ""
                
        
