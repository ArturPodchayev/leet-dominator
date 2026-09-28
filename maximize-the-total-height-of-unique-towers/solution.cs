public class Solution {
    public long MaximumTotalSum(int[] m) {
        Array.Sort(m, (x,y)=>y-x);
        long ans=0;
       long max=m[0];
        for (int i=0; i<m.Length; i++){
            if(max==0) return -1;
         long x= Math.Min(m[i],max);
         ans+=x; 
         max=x-1;
        }
        return ans;
    }
}
