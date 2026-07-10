class Solution {
    public int[] sortEvenOdd(int[] nums) {
        int len = nums.length;

        for (int i = 0; i < len; i += 2) {
            for (int j = i + 2; j < len; j += 2) {

                if (nums[i] > nums[j]) {
                    swap(nums, i, j);
                }
            }
        }

        for (int i = 1; i < len; i += 2) {
            for (int j = i + 2; j < len; j += 2) {

                if (nums[i] < nums[j]) {
                    swap(nums, i, j);
                }
            }
        }

        return nums;
    }

    private void swap(int[] arr, int index1, int index2) {

        int tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }
}
