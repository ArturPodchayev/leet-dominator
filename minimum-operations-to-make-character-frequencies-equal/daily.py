class Solution:
    def sale_tabu(self,items,budget):
        n=len(items)
        divides=[]

        for i in range(n):
            curr=0
            for j in range(n):
                if items[j][0]%items[i][0]==0:
                    curr+=1
            divides.append(curr)
        

        dp=[[[0 for _ in range(2)] for _ in range(budget+1)] for _ in range(n+1)]
        # base case is already handled

        for i in range(n-1,-1,-1):
            for money in range(0,budget+1,1):
                for mask in range(2):

                    maxi=0
                    if money>=items[i][1]:
                        if mask==1:
                            maxi=max(maxi,divides[i]+dp[i][money-items[i][1]][0])
                        else:
                            maxi=max(maxi,1+dp[i][money-items[i][1]][0])
                    maxi=max(maxi,dp[i+1][money][1])
                    dp[i][money][mask]=maxi
        return dp[0][budget][1]
                    





    def maximumSaleItems(self, items: List[List[int]], budget: int) -> int:
        return self.sale_tabu(items,budget)
        n=len(items)
        divides=[]
        for i in range(n):
            curr=0
            for j in range(n):
                if items[j][0]%items[i][0]==0:
                    curr+=1
            divides.append(curr)
        
        dp=[[[None for _ in range(2)] for _ in range(budget+1)] for _ in range(n+1)]
        # m=[True for _ in range(n+1)]

        def solve(i,money,mask):
            if i>=n or money==0 :
                return 0
            if dp[i][money][mask]!=None:
                return dp[i][money][mask]

            maxi=0
            if money>=items[i][1]:
                if mask==True:
                    maxi=max(maxi,divides[i]+solve(i,money-items[i][1],False))
                else:
                    maxi=max(maxi,1+solve(i,money-items[i][1],mask))
            
            maxi=max(maxi,solve(i+1,money,True))

            dp[i][money][mask]=maxi
            return maxi

        return solve(0,budget,True)







        
