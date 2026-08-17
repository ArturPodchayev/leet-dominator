const long long mod = 1e9 + 7;

class Solution {
public:
    // Modular Exponentiation to calculate (num^pow) % mod
    long long power(long long num, long long pow) {
        if(!pow) return 1;
        long long val = power(num, pow / 2);
        val = (val * val) % mod;
        if(pow % 2) val = (val * num) % mod;
        return val;
    }

    int sumOfNumbers(int l, int r, int k) {
        long long sum = 0;
        // Sum of all digits available in the range [l, r]
        for(long long i = l; i <= r; i++) sum += i;

        // Number of ways to fill the other (k-1) positions
        long long tot_occurence = power(r - l + 1, (long long)k - 1);
        
        // Initial contribution of digits at any single position
        long long ans = (sum * tot_occurence) % mod;

        // Sum of place values: 1 + 10 + 100 + ... + 10^(k-1)
        // Formula for GP: (10^k - 1) / (10 - 1)
        long long gp = (power(10, k) - 1 + mod) % mod;
        
        // Modular inverse of 9 is used for the division (10-1)
        gp = (gp * power(9, mod - 2)) % mod;

        //  (Digit Sum per place) * (Sum of all places)
        ans = (ans * gp) % mod;
        
        return (int)ans;   
    }
};
