class Solution {
    public int maximumLength(int[] nums) {
        HashMap<Integer,Integer> hmap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            hmap.put(nums[i], hmap.getOrDefault(nums[i], 0) + 1);
        }

        int ans = hmap.containsKey(1) ? (hmap.get(1) + 1) / 2 : 1;

        for (Map.Entry<Integer,Integer> entry : hmap.entrySet()) {
            int curr = entry.getKey();

            if (curr == 1) continue;

            ans = Math.max(ans, util(hmap, curr));
        }

        return ans * 2 - 1;
    }

    public int util(HashMap<Integer,Integer> hmap, int curr) {
        if (hmap.get(curr) == 1 || !hmap.containsKey(curr * curr))
            return 1;

        return 1 + util(hmap, curr * curr);
    }
}
