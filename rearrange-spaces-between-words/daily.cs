public class Solution {
    public int[] PivotArray(int[] nums, int pivot) {
        int len =  nums.Length;
        List<int> res = new List<int>();
        int pos = 0;
        for (int i = 0; i < len; i++)
        {
            if(nums[i]>pivot)
            {
                res.Add(nums[i]);
            }
            else if(nums[i]==pivot)
            {
                res.Insert(pos, nums[i]);
            }
            else
            {
                res.Insert(pos, nums[i]);
                pos++;
            }
        }
        return res.ToArray();             
                    
    }
}
