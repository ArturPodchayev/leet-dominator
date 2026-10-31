public class Solution {
    public long MinCost(int[] arr, int[] brr, long k) {
       long res1 = arr.Zip(brr, (a, b) => (long)Math.Abs((long)a - b)).Sum();
 
        long res2 = arr.OrderBy(x => x)
                       .Zip(brr.OrderBy(x => x), (a, b) => (long)Math.Abs((long)a - b))
                       .Sum(); 
        return Math.Min(res1, res2 + k);

    }
}
