public class Solution {
    public int DistinctSubseqII(string s) {
        long mod = (int)1e9 + 7;
        long[] dups = new long[26];
        long res = 0;

        foreach(char c in s){
            int idx = c - 'a';
            long newCount = ((res + 1 - dups[idx]) % mod + mod) % mod;
            /*
                Appending a new character in the end will always produce
                    currentCount
                    + 1 for that character
                    Duplicates will be removed considering that existing having last character as c will need to be removed
            */
            res = (res + newCount)%mod;
            dups[idx] = (dups[idx] + newCount)%mod;
        }

        return (int)res;
    }
}
