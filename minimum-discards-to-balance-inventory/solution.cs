public class Solution {
    public int MinArrivalsToDiscard(int[] arrivals, int w, int m) {
        // slide window
        Dictionary<int, int> freq = new();
        int len = arrivals.Length, res = 0;
        bool[] discard = new bool[len];
        for(int i = 0; i < len; i++)
        {
            int cur = arrivals[i];
            if(!freq.ContainsKey(cur) || freq[cur] < m)
            {
                freq.TryAdd(cur, 0);
                freq[cur]++;
            }
            else
            {
                res++;
                discard[i] = true;
            }

            if(i >= w-1)
            {
                int remId = i-w+1;
                if(!discard[remId] && --freq[arrivals[remId]] == 0)
                    freq.Remove(arrivals[remId]);
            }
        }

        return res;
    }
}
