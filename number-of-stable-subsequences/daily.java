import java.util.*;

class Solution {
    public int sumCounts(int[] nums) {
        int n = nums.length;
        int total = 0;

        for (int i = 0; i < n; i++) {
            Set<Integer> set = new HashSet<>();

            for (int j = i; j < n; j++) {
                set.add(nums[j]);

                int distinct = set.size();
                total += distinct * distinct;
            }
        }

        return total;
    }
}
