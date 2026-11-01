public class Solution {
    public long MaxProduct(int[] nums) {
       int[] maxVals = new int[2];

       foreach(int n in nums)
       {
            int curV = Math.Abs(n);

            if(curV >= maxVals[0])
            {
                maxVals[1] = maxVals[0];
                maxVals[0] = curV;
            }
            else if(curV > maxVals[1])
                maxVals[1] = curV;
       }

       long res = (long)maxVals[0]*maxVals[1]*100000;

       return res;
    }
}
