public class Solution {
    public int MinimumSumSubarray(IList<int> nums, int l, int r) {
        int min=999999;int sum=0;int count=1;
        for(int i=0;i<nums.Count;i++)
        {
            sum=0;sum+=nums[i];count=1;
            if(count>=l && count<=r)
            {
            if(min>sum && sum>0)
            {
                min=sum;
            }}
            for(int j=i+1;j<nums.Count;j++)
            {
                sum+=nums[j];count++;
                if(count>=l && count<=r)
                {
                    if(min>sum && sum>0)
                    {
                        min=sum;
                    }
                    Console.WriteLine(min);
                }
                
            }
        }
        if(min!=999999)
            return min;
        return -1;
    }
}
