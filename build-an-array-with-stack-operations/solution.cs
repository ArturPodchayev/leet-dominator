public class Solution {
    public IList<string> BuildArray(int[] target, int n)
    {
        List<string> list = new List<string>();
        int[] nums = new int[n];

        for (int a = 0; a < n; a++)
        {
            nums[a] = a+1;
        }
        
        for (int i = 0, j = 0; j < n && i < target.Length; j++, i++)
        {
            if (nums[j] == target[i])
            {
                list.Add("Push");
            }
            else
            {
                list.Add("Push");
                list.Add("Pop");
                i--;
            }
        }

    return list;
    }
}
