class Solution {
    public int longestEqualSubarray(List<Integer> nums, int k) {
        
        Map<Integer,List<Integer>> idxm = new HashMap<>();

        for(int i=0; i<nums.size(); i++){
            int num = nums.get(i);
            if(!idxm.containsKey(num)){
                idxm.put(num, new ArrayList<>());
            }
            idxm.get(num).add(i);
        }

        int res = 0;
        for(List<Integer> idxs : idxm.values()){
            int i=0, j=0;
            while(j<idxs.size()){
                while(i<j && idxs.get(j)-idxs.get(i) > j-i+k ){
                    i++;
                }
                res = Math.max(j-i+1, res);
                j++;
            }
        }
        return res;
    }
}
