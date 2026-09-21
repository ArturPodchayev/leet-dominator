class Solution {
    public List<Integer> relocateMarbles(int[] nums, int[] moveFrom, int[] moveTo) {
        TreeSet<Integer> set = new TreeSet<>();
        for (int i : nums) set.add(i);
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < moveTo.length; i++) {
            int from = moveFrom[i];
            int to = moveTo[i];
            if (!set.contains(from)) continue;
            set.remove(from);
            set.add(to);
        }
        list.addAll(set);
        return list;
    }
}
