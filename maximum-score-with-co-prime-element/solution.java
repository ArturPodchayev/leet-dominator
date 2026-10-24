class Solution {
    public int maxScore(int[] nums, int maxVal) {
        int limit = 100000;
        int[] freq = new int[limit + 1];
        for (int x : nums) freq[x]++;
        
        int[] spf = new int[limit + 1];
        for (int i = 0; i <= limit; i++) spf[i] = i;
        for (int i = 2; i * i <= limit; i++) {
            if (spf[i] == i) {
                for (int j = i * i; j <= limit; j += i) {
                    if (spf[j] == j) spf[j] = i;
                }
            }
        }
        
        int[] cntDiv = new int[limit + 1];
        for (int i = 1; i <= limit; i++) {
            for (int j = i; j <= limit; j += i) {
                cntDiv[i] += freq[j];
            }
        }
        
        int ans = 0;
        Set<Integer> candidates = new HashSet<>();
        for (int i = 1; i <= maxVal; i++) candidates.add(i);
        for (int x : nums) candidates.add(x);
        
        for (int v : candidates) {
            if (v > maxVal && freq[v] == 0) continue;
            
            List<Integer> primes = new ArrayList<>();
            int tmp = v;
            while (tmp > 1) {
                int p = spf[tmp];
                primes.add(p);
                while (tmp % p == 0) tmp /= p;
            }
            
            int bad = 0;
            int sz = primes.size();
            for (int mask = 1; mask < (1 << sz); mask++) {
                long prod = 1;
                int bits = Integer.bitCount(mask);
                for (int b = 0; b < sz; b++) {
                    if (((mask >> b) & 1) == 1) prod *= primes.get(b);
                }
                if (bits % 2 == 1) bad += cntDiv[(int) prod];
                else bad -= cntDiv[(int) prod];
            }
            
            int cost;
            if (freq[v] > 0) {
                // One occurrence of v is our selected index
                // v shares factors with itself (if v>1), so it's counted in bad → subtract 1
                // if v==1, bad=0 anyway, cost=0
                cost = Math.max(0, bad - 1);
            } else {
                // v not in nums, must place it:
                // if bad>0: replace one bad element with v (cost = bad, no extra)
                // if bad==0: must change one good element to v (cost = 1)
                cost = (bad > 0) ? bad : 1;
            }
            
            ans = Math.max(ans, v - cost);
        }
        
        return ans;
    }
}
