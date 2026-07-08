public class Solution
{
    private const long Mod = 1_000_000_007;

    public int[] SumAndMultiply(string digits, int[][] queries)
    {
        int length = digits.Length;

        // Prefix count of non-zero digits.
        int[] nonZeroPrefixCount = new int[length];

        // Number formed by concatenating all non-zero digits up to each index.
        long[] nonZeroNumberPrefix = new long[length];

        // Prefix sum of all digits.
        long[] digitSumPrefix = new long[length];

        // Powers of 10 modulo Mod.
        long[] powerOf10 = new long[length + 1];
        powerOf10[0] = 1;

        for (int i = 1; i <= length; i++)
        {
            powerOf10[i] = (powerOf10[i - 1] * 10) % Mod;
        }

        int firstDigit = digits[0] - '0';

        nonZeroPrefixCount[0] = firstDigit == 0 ? 0 : 1;
        nonZeroNumberPrefix[0] = firstDigit;
        digitSumPrefix[0] = firstDigit;

        for (int i = 1; i < length; i++)
        {
            int digit = digits[i] - '0';

            // Build prefix count of non-zero digits.
            nonZeroPrefixCount[i] =
                nonZeroPrefixCount[i - 1] + (digit == 0 ? 0 : 1);

            // Build number using only non-zero digits.
            if (digit == 0)
            {
                nonZeroNumberPrefix[i] = nonZeroNumberPrefix[i - 1];
            }
            else
            {
                nonZeroNumberPrefix[i] =
                    (nonZeroNumberPrefix[i - 1] * 10 + digit) % Mod;
            }

            // Prefix sum of digits.
            digitSumPrefix[i] = digitSumPrefix[i - 1] + digit;
        }

        int[] answer = new int[queries.Length];

        for (int queryIndex = 0; queryIndex < queries.Length; queryIndex++)
        {
            int left = queries[queryIndex][0];
            int right = queries[queryIndex][1];

            // Number of non-zero digits before the substring.
            int nonZeroBeforeLeft =
                left == 0 ? 0 : nonZeroPrefixCount[left - 1];

            // Non-zero number formed before the substring.
            long prefixNumberBeforeLeft =
                left == 0 ? 0 : nonZeroNumberPrefix[left - 1];

            // Number of non-zero digits inside the substring.
            int nonZeroDigitsInRange =
                nonZeroPrefixCount[right] - nonZeroBeforeLeft;

            // If the substring contains only zeros.
            if (nonZeroDigitsInRange == 0)
            {
                answer[queryIndex] = 0;
                continue;
            }

            // Extract the non-zero number corresponding to [left, right].
            long extractedNumber =
                (
                    nonZeroNumberPrefix[right]
                    - (prefixNumberBeforeLeft * powerOf10[nonZeroDigitsInRange]) % Mod
                    + Mod
                ) % Mod;

            // Sum of digits in the substring.
            long digitSum =
                digitSumPrefix[right]
                - (left == 0 ? 0 : digitSumPrefix[left - 1]);

            answer[queryIndex] = (int)((extractedNumber * digitSum) % Mod);
        }

        return answer;
    }
}
