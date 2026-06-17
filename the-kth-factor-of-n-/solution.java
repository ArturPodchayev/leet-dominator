class Solution {
    public int kthFactor(int n, int k) {
        int curr = 0;
        for(int factor = 1; factor <= n; factor++){
            if(n % factor == 0)
                curr++;
            if(curr == k)
                return factor;
        }
        return -1;
    }
}
