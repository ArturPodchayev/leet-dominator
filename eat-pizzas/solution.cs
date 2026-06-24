public class Solution {
    public long MaxWeight(int[] pizzas) {
        int len = pizzas.Length;
        int days = len/4;
        int oddCnt = days/2 + (days%2);
        int evenCnt = days-oddCnt;

        var ordered = pizzas.OrderByDescending(x=>x).ToArray();
        int idx = 0;
        long res = 0;
        // Pick max in odd days:
        while(idx < oddCnt)
        {
            res += ordered[idx++];
        }

        idx++;
        days += evenCnt;
        while(idx < days)
        {
            res += ordered[idx];
            idx+=2;
        }

        return res;
    }
}
