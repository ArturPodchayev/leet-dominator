class Solution {
    public List<Long> mergeAdjacent(int[] nums) {
        List<Long> ans = new ArrayList<>();
        for (int num : nums) {
            long c = num;
            while (!ans.isEmpty() && ans.get(ans.size() - 1) == c) {
                c += ans.remove(ans.size() - 1);
            }
            ans.add(c);
        }
        return ans;
    }
}
