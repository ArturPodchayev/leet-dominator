class Solution:
    def countPyramids(self, grid: List[List[int]]) -> int:
        #checks if there are 3 ones below (x,y)
        def check(x,y):
            count = 0
            to_check = {(1,0),(1,-1),(1,1)}
            for dx,dy in to_check:
                if(0<=x+dx<len(grid) and 0<=y+dy<len(grid[0]) and grid[x+dx][y+dy]==1):
                    count += 1
            if(count == 3):
                return True
            else:
                return False
        
        memo = {}
        #dp returns the number of pyramid levels under (x,y)
        def dp(x,y):
            if((x,y) in memo):
                return memo[(x,y)]
            levels = 0
            if(check(x,y)==True):
                levels += 1
            else:
                return levels
            to_check = {(1,0),(1,-1),(1,1)}
            t = float('inf')
            #t is the number of additional levels
            for dx,dy in to_check: 
                if(0<=x+dx<len(grid) and 0<=y+dy<len(grid[0]) and grid[x+dx][y+dy]==1):
                    t = min(t,dp(x+dx,y+dy))
            memo[(x,y)] = levels + t
            return levels + t      
        
		#check number of normal pyramidal plots
        ans = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if(grid[i][j] == 1):
                    ans += dp(i,j)
        
		#check number of inverse pyramidal plots
        memo = {}
        grid = grid[::-1]
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if(grid[i][j] == 1):
                    ans += dp(i,j)
        return ans
