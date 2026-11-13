public class Solution {
    public long CountNonDecreasingSubarrays(int[] nums, int k) {
        int len = nums.Length;

        long res = (long)(1+len)*len/2;
       // Console.WriteLine($"init res {res}");

        for(int i = 0; i < len-1; i++)
        {
            int preMax = nums[i], idx = i+1;
            int opt = 0;
            while(idx < len && opt <= k)
            {
                int diff = nums[idx]-preMax;
                if(diff >= 0)
                    preMax = nums[idx];
                else
                    opt -= diff;

                if(opt > k)
                    break;

                idx++;
            }

            if(idx >= len)
                return res;
           // Console.WriteLine($"in {i}th loop: res is {res}, opt is {opt}, k is {k}, idx = {idx}, len is {len}");
            res -= (len-idx);
        }

        return res;
    }
}
