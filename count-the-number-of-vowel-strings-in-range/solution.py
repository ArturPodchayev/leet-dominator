class Solution:
    def vowelStrings(self, w: List[str], l: int, r: int) -> int:
        c=0
        for i in range(l,r+1):
           c1=w[i][0]
           c2=w[i][len(w[i])-1]
           if((c1=='a' or c1=='e' or c1=='i' or c1=='o' or c1=='u') and (c2=='a' or c2=='e' or c2=='i' or c2=='o' or c2=='u')):
             c+=1

        return c
