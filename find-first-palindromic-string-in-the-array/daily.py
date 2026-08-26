class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        nums=s.count("1")
        if nums<k:
            return ""
        ones=[]
        for i in range(0,len(s)):
            if s[i]=='1':
                ones.append(i)

        start=ones[0]
        end=ones[k-1]
        pointer=1
        ans=s[start:end+1]
        for i in range(end+1,len(s)):
            
            if s[i]=='1':
                ones.append(i)
                start=ones[pointer]
                end=i
                pointer+=1
                curr=s[start:end+1]
                if len(curr)<len(ans) or len(curr)==len(ans) and curr<ans:
                    ans=curr
                
        return ans
        
