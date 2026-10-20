public class Solution {
    public int SortableIntegers(int[] nums) {
        // define "fall": an index s.t. nums[fall] < nums[fall-1]
        // cyclically sortable subarray -> at most 1 fall in each group, and if a fall exists, last <= first
        // then check "prev max <= current min" between groups
        int n = nums.Length;
        var falls = new List<int>();
        for (int i = 1; i < n; i++) {
            if (nums[i] < nums[i-1]) falls.Add(i);
        }
        int ans = 0;
        for (int k = 1; k <= n; k++) {
            if (IsSortable (nums, k, falls)) ans += k;
        }
        return ans;
    }

    private bool IsSortable(int[] nums, int k, List<int> falls) {
        int n = nums.Length;
        if (n % k != 0) return false;
        int groups = n/k;
        int iFall = 0, prevMax = 0;
        for (int g = 0; g < groups; g++) {
            // current group: nums[g*k...g*k+k-1]
            int fall = -1; // fall's original index in nums
            while (iFall < falls.Count && falls[iFall] <= g*k+k-1) {
                if (falls[iFall] == g*k) {
                    iFall++;
                    // first element is fall? it's OK, don't count it
                }
                else {
                    if (fall != -1) return false; // >= 2 falls in the group, fail
                    fall = falls[iFall];
                    iFall++;
                }
            }
            if (fall != -1 && nums[g*k+k-1] > nums[g*k]) return false; // in group
            int groupMin = fall == -1 ? nums[g*k] : nums[fall]; // inter group
            if (groupMin < prevMax) return false;

            prevMax = fall == -1 ? nums[g*k+k-1] : nums[fall-1];
        }
        return true;
    }
}
