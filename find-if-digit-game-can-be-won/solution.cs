public class Solution
{
    public bool CanAliceWin(int[] nums) =>
        nums.Sum(n => n < 10 ? n : -n) != 0;
}
