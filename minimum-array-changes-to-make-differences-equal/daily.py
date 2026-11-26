class Solution:
    def canAliceWin(self, n: int) -> bool:
        s = 10
        a = 0
        b = 0
        cnt  = 0
        while n // s >= 1:
            if cnt % 2 == 0:
                n-= s
                s-=1
                a+=1
                cnt+=1
            else:
                n-= s
                s-=1
                b+=1
                cnt+=1  
        if a>b:
            return True
        else:
            return False
            
                     
