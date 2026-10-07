class Solution:
    def numberOfRounds(self, loginTime: str, logoutTime: str) -> int:
        curr=0
        starth=int(loginTime[:2])
        endh=int(logoutTime[:2])
        full_hours=endh-starth-1
        startm=int(loginTime[3:])
        endm=int(logoutTime[3:])
        if full_hours<-1 or full_hours==-1 and endm<startm: full_hours+=24
        res=full_hours*4
        res+=(60-startm)//15+endm//15
        return res if res>0 else 0
        
