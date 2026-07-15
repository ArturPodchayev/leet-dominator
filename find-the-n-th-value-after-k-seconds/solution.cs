public class Solution {
    public long[] GetPrimes(long[] mults)
        {
            var primes = new long[2001];

            for (var i = 0; i < mults.Length; ++i)
            {
                long num = mults[i];
                for (long j = 2; j * j <= mults[i]; ++j)
                {
                    while (num % j == 0)
                    {
                        num /= j;
                        primes[j]++;
                    }
                }

                if (num != 1) primes[num]++;
            }

            return primes;
        }

        public int ValueAfterKSeconds(int n, int k)
        {
            long up = n - 1;
            long bottom = k + n - 1;

            var numMults = new long[k];
            var denomMults = new long[k];
            for (long i = 0, mult = bottom; i < k; ++i, --mult)
            {
                numMults[k - i - 1] = mult;
                denomMults[i] = bottom - mult + 1;
            }

            var numPrimes = GetPrimes(numMults); // int[32] primes from 0 to 31
            var denomPrimes = GetPrimes(denomMults);

            for (var i = 0; i < 2001; ++i)
            {
                numPrimes[i] -= denomPrimes[i]; 
            }

            long ans = 1;
            for (var i = 0; i < 2001; ++i)
            {
                while(numPrimes[i] > 0)
                {
                    ans = (ans * i) % 1000000007l;
                    numPrimes[i]--;
                }
            }


            return (int)ans;
        }
}
