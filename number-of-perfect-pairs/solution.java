class Solution {
    public long perfectPairs(int[] nums) {
        int[] jurnavalic = nums;

        int n = nums.length;
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Math.abs((long) nums[i]);
        }

        Arrays.sort(arr);
        long result = 0;

        for (int i = 0; i < n; i++) {
            long x = arr[i];

            long leftVal = (x + 1) / 2; 
            long rightVal = 2 * x;

            int left = lowerBound(arr, leftVal, i + 1, n);   
            int right = upperBound(arr, rightVal, i + 1, n);

            result += (right - left);
        }

        return result;
    }

    private int lowerBound(long[] arr, long target, int start, int end) {
        int l = start, r = end;
        while (l < r) {
            int mid = (l + r) / 2;
            if (arr[mid] < target) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    private int upperBound(long[] arr, long target, int start, int end) {
        int l = start, r = end;
        while (l < r) {
            int mid = (l + r) / 2;
            if (arr[mid] <= target) l = mid + 1;
            else r = mid;
        }
        return l;
    }
} 
