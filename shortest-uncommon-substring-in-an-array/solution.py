class Solution:
    def shortestSubstrings(self, arr: List[str]) -> List[str]:
        def helper(s):
            substrings = [s[i:j] for i in range(len(s)) for j in range(i+1, len(s)+1)]
            return sorted(substrings, key=lambda x:(len(x), x))
        
        
        
        n = len(arr)
        ans = ["" for _ in range(n)]
        
        for i in range(n):
            all_str = helper(arr[i]);
            for str1 in all_str:
                unique = True
                for j in range(n):
                    if i != j and str1 in arr[j]:
                        unique = False
                        break
                if unique:
                    ans[i] = str1
                    break
                    
                    
        return ans
    
