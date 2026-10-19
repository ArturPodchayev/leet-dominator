class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        int smaller = 0;
        int targetcount = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < target) smaller++;
            if (nums[i] == target) targetcount++;
        }

        List<Integer> list = new ArrayList<>();

        if (targetcount == 0) return list;

        for (int i = smaller; i < smaller + targetcount; i++) {
            list.add(i);
        }

        return list;
    }
}
