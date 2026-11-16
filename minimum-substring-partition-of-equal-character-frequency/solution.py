class Solution:
    def minimumSubstringsInPartition(self, s: str) -> int:
        a={}
        for i in range(len(s)):
            cur={}
            for j in range(i,len(s)):
                cur[s[j]]=cur.get(s[j],0)+1
                q=cur[s[j]]
                fl=True
                for t in cur:
                    if(cur[t]!=q):
                        fl=False
                        break
                if(fl):
                    a[(i,j)]=cur.copy()
        @cache
        def do(x):
            if(x==len(s)):
                return 0
            ans=float('inf')
            for i in range(len(s)):
                if((x,i) in a):
                    ans=min(ans,1+do(i+1))
            return ans
        return do(0)
        
                
                
            
        
        
