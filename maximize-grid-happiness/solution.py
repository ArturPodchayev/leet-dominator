class Solution:
    def getMaxGridHappiness(self, m: int, n: int, introvertsCount: int, extrovertsCount: int) -> int:
        
        @cache 
        def dp(i,j,ic,ec,prevrow):
            if i == m: return 0
            if j == n:
                return dp(i+1,0,ic,ec,prevrow)
            res = dp(i,j+1,ic,ec,prevrow[1:]+'0')
            if ic > 0:
                currres = 120
                if j > 0 and prevrow[-1] == '1':
                    currres -= 10
                elif j > 0 and prevrow[-1] == '2':
                    currres -= 60
                if i > 0 and  prevrow[0] == '1':
                    currres -= 10
                elif i > 0 and prevrow[0] == '2':
                    currres -= 60
                res = max(res,currres + dp(i,j+1,ic-1,ec,prevrow[1:]+'2'))
            if ec > 0:
                currres = 40
                if j > 0 and  prevrow[-1] == '1':
                    currres += 40
                elif j > 0 and  prevrow[-1] == '2':
                    currres -= 10
                if  i > 0 and prevrow[0] == '1':
                    currres += 40
                elif i > 0 and  prevrow[0] == '2':
                    currres -= 10
                res = max(res,currres + dp(i,j+1,ic,ec-1,prevrow[1:]+'1'))
            return res
        return dp(0,0,introvertsCount,extrovertsCount,'0'*n)

