public class Solution {
    public bool SumGame(string num) {
        int n = num.Length, half = n / 2;
        int sumL = 0, sumR = 0, qL = 0, qR = 0;

        for (int i = 0; i < half; i++)
        {
            char c = num[i];
            if (c == '?') qL++;
            else sumL += c - '0';
        }
        for (int i = half; i < n; i++)
        {
            char c = num[i];
            if (c == '?') qR++;
            else sumR += c - '0';
        }


        if (((qL + qR) & 1) == 1) return true;


        int diff = sumL - sumR;
        int k = (qR - qL) / 2;
        return diff != 9 * k;
    }
}
