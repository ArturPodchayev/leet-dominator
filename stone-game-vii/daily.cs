public class Solution {

    //Time O(n)
    int n=0;
    
    public string StoneGameIII(int[] stoneValue) {
      n = stoneValue.Length;
      int[] t = new int[n+1]; //DP array
      Array.Fill(t,-1); 
      int diff = solve(stoneValue,0,t); //calculate  "Alice" - "Bob"
      if(diff < 0 ){
          return "Bob";
      }else if(diff > 0 ){
          return "Alice";
      }
      else{
          return "Tie";
      }
    }

    private int solve(int[] stoneValue, int i,int[] dp){
        if(i>=n){
            return 0;
        }
        if(dp[i] !=-1){
            return dp[i];
        }
        int result = stoneValue[i] - solve(stoneValue,i+1,dp); // first option is to take 1 stone
        if(i+1 < n){
        result = Math.Max(result,stoneValue[i] + stoneValue[i+1] - solve(stoneValue,i+2,dp)); // next option is to take 1st and 2nd stone , and calculate rest recursivly
        }
        if(i+2 <n){
        result = Math.Max(result,stoneValue[i]+ stoneValue[i+1] + stoneValue[i+2] - solve(stoneValue,i+3,dp)); // next option is to take 1st , 2nd and 3rd stone, after that calculate rest items recursivly
        }
        return dp[i] = result; // store in do array and return 
    }
}
