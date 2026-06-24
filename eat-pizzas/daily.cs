public class Solution
{
    const long MOD = 1000000007;

    public int ZigZagArrays(int n, int l, int r)
    {
        int m = r - l + 1;
        int size = 2 * m;

       
        if (n == 1) return m;

        long[] vec = new long[size];

        
        for (int i = 0; i < m; i++)
        {
            vec[i] = i;              
            vec[m + i] = m - 1 - i;  
        }

        if (n == 2)
        {
            long ans = 0;
            foreach (long x in vec) ans = (ans + x) % MOD;
            return (int)ans;
        }

        long[,] mat = new long[size, size];

       
        for (int last = 0; last < m; last++)
        {
         
            for (int next = 0; next < last; next++)
            {
                mat[m + next, last] = 1;
            }

           
            for (int next = last + 1; next < m; next++)
            {
                mat[next, m + last] = 1;
            }
        }

        long[,] power = MatrixPower(mat, n - 2);
        long[] finalVec = Multiply(power, vec);

        long result = 0;
        foreach (long x in finalVec)
            result = (result + x) % MOD;

        return (int)result;
    }

    private long[,] MatrixPower(long[,] a, int exp)
    {
        int n = a.GetLength(0);
        long[,] res = new long[n, n];

        for (int i = 0; i < n; i++)
            res[i, i] = 1;

        while (exp > 0)
        {
            if ((exp & 1) == 1)
                res = Multiply(res, a);

            a = Multiply(a, a);
            exp >>= 1;
        }

        return res;
    }

    private long[,] Multiply(long[,] a, long[,] b)
    {
        int n = a.GetLength(0);
        long[,] c = new long[n, n];

        for (int i = 0; i < n; i++)
        {
            for (int k = 0; k < n; k++)
            {
                if (a[i, k] == 0) continue;

                for (int j = 0; j < n; j++)
                {
                    if (b[k, j] == 0) continue;

                    c[i, j] = (c[i, j] + a[i, k] * b[k, j]) % MOD;
                }
            }
        }

        return c;
    }

    private long[] Multiply(long[,] a, long[] v)
    {
        int n = v.Length;
        long[] res = new long[n];

        for (int i = 0; i < n; i++)
        {
            long sum = 0;
            for (int j = 0; j < n; j++)
            {
                if (a[i, j] == 0 || v[j] == 0) continue;
                sum = (sum + a[i, j] * v[j]) % MOD;
            }
            res[i] = sum;
        }

        return res;
    }
}
