class Solution {
    public boolean partitionArray(int[] nums, int k) {
        if(nums.length % k != 0) return false;
        HashMap<Integer, Integer> hm = new HashMap<>();
        for(int i : nums){
            hm.put(i, hm.getOrDefault(i, 0) + 1);
        }
        int grps = nums.length / k;
        for(int i : hm.keySet()){
            if(hm.get(i) > grps) return false;
        }
        return true;
    }
}
