public class Solution {
    public long[] SumOfThree(long num) {
        if(num%3 != 0)
            return new long[0];

            long cur = num / 3;
            return [cur-1, cur, cur+1];
    }
}
