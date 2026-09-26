class Solution {
     static class MedianResult {
        int median;
        boolean found;

        MedianResult(int median, boolean found) {
            this.median = median;
            this.found = found;
        }
    }

    public static long atMostk(int[] A, int K) {
        int i = 0;
        long res = 0;
        HashMap<Integer, Long> count = new HashMap<>();
        for (int j = 0; j < A.length; ++j) {
            count.put(A[j], count.getOrDefault(A[j], 0L) + 1);
            if (count.get(A[j]) == 1) K--;
            while (K < 0) {
                count.put(A[i], count.get(A[i]) - 1);
                if (count.get(A[i]) == 0) K++;
                i++;
            }
            res += (long) (j - i + 1);
        }
        return res;
    }

    public static int uniqueCount(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        return set.size();
    }

    public static int medianOfUniquenessArray(int[] nums) {
        int n = nums.length;
        int low = 1;
        int high = uniqueCount(nums);
        int median = 1;
        long total = (long) n * (n + 1) / 2;
        boolean found = false;
        while (low <= high) {
            int mid = (low + high) / 2;
            long count = atMostk(nums, mid);
            if (count >= (total + 1) / 2) {
                median = mid;
                found = true;
            }
            if (count >= (total + 1) / 2) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        if (found) {
            return median;
        } else {
            // Handle the case when median is not found
            return -1; // Or any other appropriate value
        }
    }
}
