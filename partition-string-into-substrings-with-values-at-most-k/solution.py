class Solution:
    def minimumPartition(self, s: str, k: int) -> int:
        tmp,cnt='',0
        for c in s:
            tmp+=c
            if int(tmp)>k:
                tmp=c

                if int(tmp)>k:
                    return -1

                cnt+=1

        return cnt+1        
