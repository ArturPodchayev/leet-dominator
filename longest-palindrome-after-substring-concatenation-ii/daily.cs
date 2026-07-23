public class Solution {
    public int UniqueXorTriplets(int[] nums) {
        int n= nums.Length;

        if(n<3)
        { return n; }
        
        int k=1;

        while(k<=n)
        {
           k= k*2;
        }
        return k;
    }
}
