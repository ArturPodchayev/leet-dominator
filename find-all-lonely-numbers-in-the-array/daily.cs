public class Solution {
    public long MinSumSquareDiff(int[] nums1, int[] nums2, int k1, int k2) {
        Dictionary<long, int> freq = new();
        int len = nums1.Length;
        for(int i = 0; i < len; i++)
        {
            long diff = Math.Abs(nums1[i]-nums2[i]);
            if(!freq.ContainsKey(diff))
                freq.Add(diff, 0);

            freq[diff]++;
        }

        List<long> keys = freq.Keys.ToList();
        int kLen = keys.Count;
        keys.Sort();
        long  rem = (long)(k1+k2), sqRes = 0;

        for(int i = kLen-1; i >= 0; i--)
        {
            long key = keys[i], nextKey = (i == 0 ? 0 : keys[i-1]);
            int cnt = freq[key];
            long gap = (long)((key - (i > 0 ? keys[i-1] : 0)) * cnt);
            if(gap <= rem)
            {
                rem -= gap;
                if(freq.ContainsKey(nextKey))
                    freq[nextKey] += cnt;
            }
            else
            {
                while(rem >= cnt)
                {
                    rem -= cnt;
                    key--;
                }

                if(rem > 0)
                {
                    long p1 = key-1;
                    sqRes += p1*p1*rem;
                    cnt -= (int)rem;
                }

                sqRes += key*key*cnt;
                rem = 0;
            }
        }

        return sqRes;
    }
}
