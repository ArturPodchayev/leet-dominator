public class Solution {
    public int GetWinner(int[] arr, int k) {
        int currentMax = arr[0];
        int consecutiveWins = 0;
        for (int i = 1; i < arr.Length; i++) {
            if (arr[i] > currentMax) {
                currentMax = arr[i];
                consecutiveWins = 1;
            } else {
                consecutiveWins++;
            }
            
            if (consecutiveWins == k) {
                return currentMax;
            }
        }
        
        return currentMax;
    }
}
