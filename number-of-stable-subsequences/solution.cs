public class Solution {
    public int CountStableSubsequences(int[] nums) {
        const long MOD = 1000000007L;
        long e1 = 0, e2 = 0, o1 = 0, o2 = 0;
        foreach (int x in nums) {
            if ((x & 1) == 0) {
                long ne1 = (e1 + 1 + o1 + o2) % MOD;
                long ne2 = (e2 + e1) % MOD;
                e1 = ne1; e2 = ne2;
            } else {
                long no1 = (o1 + 1 + e1 + e2) % MOD;
                long no2 = (o2 + o1) % MOD;
                o1 = no1; o2 = no2;
            }
        }
        return (int)((e1 + e2 + o1 + o2) % MOD);
    }
}
