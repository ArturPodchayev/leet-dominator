class Solution:
    def mergeCharacters(self, s: str, k: int) -> str:
        q=list(s)
        i=0
        while i<len(q):
            for j in range(i+1,min(len(q),i+k+1)):
                if q[i]==q[j]:
                    q=q[:j]+q[j+1:]
                    i=-1
                    break
            i+=1
        return ''.join(q)
