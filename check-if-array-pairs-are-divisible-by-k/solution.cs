public class Solution {
    public bool CanArrange(int[] arr, int k) {
        Dictionary<int, int> remainderCounts = new Dictionary<int, int>();

        
        foreach (int num in arr) {
            int rem = num % k;
            if (rem < 0) {
                rem += k; 
            }

            
            int complement = (k - rem) % k;

           
            if (remainderCounts.ContainsKey(complement) && remainderCounts[complement] > 0) {
                
                remainderCounts[complement]--;
                if (remainderCounts[complement] == 0) {
                    remainderCounts.Remove(complement); 
                }
            } else {
                
                if (remainderCounts.ContainsKey(rem)) {
                    remainderCounts[rem]++;
                } else {
                    remainderCounts[rem] = 1;
                }
            }
        }

        
        return remainderCounts.Count == 0;
    }
}
