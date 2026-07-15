class Solution {
public:
    int gcdOfOddEvenSums(int n) {

        if (n == 1)
            return n;

        int sumOfOddNums = 0;
        int sumOfEvenNums = 0;
        int result = 0;

        // Loop through the n and find all the even and odd numbers and sum them up
        for (int i = 1; i <= n * 2; i++)
        {
            if (i % 2 == 0)
                sumOfEvenNums = sumOfEvenNums + i;
            else
                sumOfOddNums = sumOfOddNums + i;
        }

        // Loop using the highest number and keep saving the highest divisible
        for (int i = 2; i <= sumOfEvenNums; i++)
        {
            if (sumOfOddNums % i == 0 && sumOfEvenNums % i == 0)
            {
                result = i;
            }
        }

        return result;
    }
};
