public class Solution {
    public int FindGCD(int[] nums) {
        int mdc=1;
        Array.Sort(nums);
        int num1 = nums[0];
        int num2 = nums[nums.Length - 1];
        return FindAmongTwoNum(num1, num2, mdc);
    }

    public int FindAmongTwoNum(int num1, int num2, int mdc){
       for (int i = 2; i <= Math.Min(num1, num2);){
        if (num1 % i == 0 && num2 % i == 0){
            num1 /= i;
            num2 /= i;
            mdc *= i;
        }
            else{
                i++;
            }
        }
       return  mdc;
    }
}
