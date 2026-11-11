public class Solution {
    public long FindMaximumScore(IList<int> nums) {
        if (nums.Count == 1)
            return 0;
        int curr = nums[0];
        long score = curr;
        for (int i = 1; i < nums.Count - 1; i++)
        {
            if (curr < nums[i])
                curr = nums[i];
            score += curr;
        }
        return score;
    }
}
