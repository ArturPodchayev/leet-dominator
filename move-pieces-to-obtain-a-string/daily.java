class Solution {
    public int minimumSumSubarray(List<Integer> nums, int l, int r) {
        int maxSum = Integer.MAX_VALUE;
        for (int size = l; size<=r; size++) {
            int sum = 0;
            for (int i = 0; i<size; i++)
                sum += nums.get(i);
            if (sum > 0)
                maxSum = Math.min(maxSum, sum);
            for (int k = size; k<nums.size(); k++) {
                sum -= nums.get(k-size);
                sum += nums.get(k);
                if (sum > 0)
                    maxSum = Math.min(maxSum, sum);
            }
        }
        return maxSum <= 0 || maxSum == Integer.MAX_VALUE ? -1 : maxSum;
    }
}
