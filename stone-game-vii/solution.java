class Solution {
    
    static int solve(int i,int j , int score,int [] stones,int [][] dp){
        if (i == stones.length || j < 0 ){
            return 0;
        }
        if (dp[i][j]!=-1){
            return dp[i][j];
        }
        int best = 0;
        int op1 = score - stones[i] - solve(i+1,j,score - stones[i],stones,dp);
        int op2 =  score  - stones[j] - solve(i,j-1,score - stones[j],stones,dp);
        int best1 = Math.max(op1,op2);
        best = Math.max(best,best1);
        dp[i][j] = best;
        return dp[i][j];
            
    }
    
    public int stoneGameVII(int[] stones) {
        
        int N =  stones.length;
        
        int [][]  dp= new int [N][N];
        for(int i = 0; i < N; i++){
            for (int j = 0; j < N ;j++){
                dp[i][j] = -1;
            }
        }
        
        int total = 0;
        for (int i = 0 ; i < N ; i++){
            total+=stones[i];
        }
        
        return solve(0,N-1,total,stones,dp);
        
        
    }
}
