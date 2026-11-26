class Solution {
    public int minChanges(int[] nums, int k) {
        List<Integer> limit = new ArrayList<>();
        int l = 0;
        int r = nums.length - 1;
        Map<Integer, Integer> mp = new HashMap<>();

        while (l < r) {
            int mn = Math.min(nums[l], nums[r]);
            int mx = Math.max(nums[l], nums[r]);
            mp.put(mx - mn, mp.getOrDefault(mx - mn, 0) + 1);
            limit.add(Math.max(mx, k - mn));
            l++;
            r--;
        }

        Collections.sort(limit);
        int sz = limit.size();
        int ans = sz;

        for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
            int curDifference = entry.getKey();
            int differenceCount = entry.getValue();
            int extraOperation = lowerBound(limit, curDifference);
            extraOperation += (sz - differenceCount);
            ans = Math.min(ans, extraOperation);
        }

        return ans;
    }

    private int lowerBound(List<Integer> list, int target) {
        int low = 0, high = list.size();
        while (low < high) {
            int mid = (low + high) / 2;
            if (list.get(mid) < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}
