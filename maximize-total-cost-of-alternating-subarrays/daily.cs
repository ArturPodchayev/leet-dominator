public class Solution {
    public int MinInsertions(string s) {
        int left = 0, right = 0, res = 0;
        foreach(char c in s)
        {
            if(c == '(')
            {
                if(right > 0)
                {
                    if(right % 2 == 1)
                    {
                        right++;
                        res++;
                    }

                    int req = right/2;
                    if(req > left)
                    {
                        res += (req-left);
                        left = 0;
                    }
                    else
                        left -= req;

                    right = 0;
                }

                left++;
            }
            else
            {
                if(++right == 2)
                {
                    right = 0;
                    if(--left < 0)
                    {
                        left = 0;
                        res++;
                    }
                }
            }
        }

        if(left > 0)
        {
            int reqR = left*2-right;
            res += reqR;
        }
        else if(right > 0)
            res += 2;

        return res;
    }
}
