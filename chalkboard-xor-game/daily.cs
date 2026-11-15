public class Solution {
    public int NumOfSubarrays(int[] arr) {
        int count_odd = 0;
        int count_even = 1;
        int sum = 0;
        const long MOD = 1000000007;
        foreach(int item in arr){
            sum += item;
            if(sum % 2 == 1){
                count_odd++;
            }else{
                count_even++;
            }
        }
        long res = (long)count_odd * count_even;
        return (int)(res % MOD);
    } 
}
