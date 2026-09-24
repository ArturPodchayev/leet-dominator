public class Solution 
{
    public int SmallestIndex(int[] nums) 
    {
        for (var i = 0; i < nums.Length; i++)
        {
            if (i == SumOfDigits(nums[i]))
                return i;
        }

        return -1;        
    }

    private int SumOfDigits(int number)
    {
        var sum = 0;

        while (number > 0)
        {
            sum += number % 10;
            number /= 10;
        }

        return sum;
    }
}
