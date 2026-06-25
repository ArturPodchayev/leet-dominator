public class Solution {
    public int CountMajoritySubarrays(int[] nums, int target) {
        var prefixCount = new int[nums.Length];
        prefixCount[0] = nums[0] == target ? 1 : 0;

        for(int i = 1; i < nums.Length; i++)
        {
            prefixCount[i] = prefixCount[i - 1];
            if(nums[i] == target)
                prefixCount[i]++;
        }

        return CountMajoritySubarraysUntil(prefixCount, new bool[nums.Length, nums.Length], 0, nums.Length - 1);
    }

    private int CountMajoritySubarraysUntil(int[] prefixCount, bool[,] visited, int start, int end)
    {
        if(start > end || visited[start, end])
            return 0;
        
        visited[start, end] = true;
        var left = CountMajoritySubarraysUntil(prefixCount, visited, start, end - 1);
        var right = CountMajoritySubarraysUntil(prefixCount, visited, start + 1, end);
        var count_so_far = start > 0 ? prefixCount[start - 1] : 0;
        var curr =  ((prefixCount[end] - count_so_far) > ((end - start + 1) / 2)) ? 1 : 0;

        return curr + left + right;
    }
}
