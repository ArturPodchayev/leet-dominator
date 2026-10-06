class Solution {
    public int smallestUniqueSubarray(int[] nums) {
        int n = nums.length;

        int start = 1;
        int end = n;

        int result = n;
        while(start <= end){
            int mid = start + (end - start) / 2;

            if(isPossible(mid, nums)){
                result = mid;
                end = mid - 1;
            }

            else
                start = mid + 1;
        }

        return result;
    }

    public boolean isPossible(int size, int[] nums){
        int n = nums.length;

        long base = 1000003L;
        long mod = 1000000007L;

        long power = 1;
        for(int i=1;i<size;i++)
            power = (power * base) % mod;

        long hash = 0;

        for(int i=0;i<size;i++)
            hash = (hash * base + nums[i] ) % mod;

        HashMap<Long, Integer> map = new HashMap<>();
        map.put(hash, 1);

        for(int i=size;i<n;i++){
            hash = (hash - (nums[i-size] * power)% mod + mod) % mod;

            hash = (hash * base + nums[i]) % mod;

            map.put(hash, map.getOrDefault(hash, 0)+1);
        }

        for(int val : map.values()){
            if(val == 1)
                return true;
        }

        return false;
    }
}
