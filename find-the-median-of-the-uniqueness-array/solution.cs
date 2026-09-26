public class Solution {
    public long AtMostK(int[] nums,int k)
    {
        int start=0,end=0;
        Dictionary<int,int> map=new Dictionary<int,int>();
        int n=nums.Length;
        long ans=0;

        for(end=0;end<n;end++)
        {
            if(map.ContainsKey(nums[end]))
            {
                map[nums[end]]++;
            }
            else
            {
                map.Add(nums[end],1);
            }

            while(map.Count>k)
            {
                map[nums[start]]--;
                if(map[nums[start]]==0)
                {
                    map.Remove(nums[start]);
                }
                start++;
            }
            ans+=end-start+1;
        }
        return ans;
    }
    
    public int MedianOfUniquenessArray(int[] nums) 
    {
        int n=nums.Length;
        long totalSub=(long)n*(n+1)/2;
        HashSet<int> hs=new HashSet<int>(nums);
        int lo=1;
        int hi=hs.Count;
        long ans=0;

        while(lo<=hi)
        {
          
            int mid=(lo+hi)/2;
            
            long count=AtMostK(nums,mid);
            
                if((count*2)>=(totalSub))
                {
                  ans=mid;
                  hi=mid-1;      
                }
                else
                {
                    lo=mid+1;
                }
            }
            return Convert.ToInt32(ans);
        }
}
