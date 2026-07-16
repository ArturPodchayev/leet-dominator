class Solution {
    public long gcdSum(int[] nums) {
        int prefixGcd[] = new int[nums.length];
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
            prefixGcd[i] = findGcd(nums[i], max);
        }
        Arrays.sort(prefixGcd);

        int l = 0;
        int r = prefixGcd.length - 1;
        long sum = 0;
        while(l < r){
            sum += findGcd(prefixGcd[l], prefixGcd[r]);
            l++;
            r--;
        }
        return sum;
    }

    static int findGcd(int a, int b) {
        if (b == 0) return a;          
        return findGcd(b, a % b);
    }  
}
