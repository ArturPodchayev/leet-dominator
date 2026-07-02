class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        i=0
        j=len(s)-1
        ch=list(s)
        while(i<j):
            if(ch[i]!=ch[j]):
               b=min(ch[i],ch[j])
               ch[i]=b
               ch[j]=b
            i+=1
            j-=1
        return "".join(ch)
