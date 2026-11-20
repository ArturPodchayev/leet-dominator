public class Solution {
    public long MinimumRemoval(int[] beans) 
    {
     long[] prefixSum=new long[beans.Length];
     long[] suffixSum=new long[beans.Length];
     long  n=beans.Length;
     long ans=long.MaxValue;
     
     if(n==1)
     {
         return 0;
     }
     Array.Sort(beans);
     
     //Build prefixSum array
     prefixSum[0]=beans[0];
     for(long i=1;i<n;i++)    
     {
         prefixSum[i]=prefixSum[i-1]+beans[i];
     }

   
     
     //Build SuffixSum array
     suffixSum[n-1]=beans[n-1];
     for(long i=n-2;i>=0;i--)
     {
         suffixSum[i]=suffixSum[i+1]+beans[i];
     }
    
    //Traverse the beans array and calculate the no of beans required to be removed for each magic bag
  
   long beanCount=0;
     for(long i=0;i<beans.Length;i++)
     {
         if(i==0)
         {
             beanCount=suffixSum[i+1]-(n-i-1)*beans[i];
         }
         else if(i==n-1)
         {
             beanCount=prefixSum[i-1];
         }
         else
         {
             beanCount=prefixSum[i-1]+suffixSum[i+1]-(n-i-1)*beans[i];
         }

         ans=Math.Min(ans,beanCount);
     }
     return ans;
    }
}
