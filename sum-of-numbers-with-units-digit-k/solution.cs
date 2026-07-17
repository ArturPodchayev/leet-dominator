public class Solution {
    private int BinarySearch(long[] prefix, long q)
    { 
        int low = 0, high = prefix.Length-1;
        while (low < high)
        {
            int mid = low + (high - low) / 2;
            if (prefix[mid] <= q)
                low = mid + 1;
            else
                high = mid;
        }

        return low;
    }

    public int[] GcdValues(int[] nums, long[] queries) {
			int maxV = 0;
			Dictionary<int, int> freq = new(); // item frequency
			foreach (int n in nums)
			{ 
				maxV = Math.Max(maxV, n);
				if (!freq.ContainsKey(n))
					freq[n] = 1;
				else 
					freq[n]++;
			}

			long[] gcdFreq = new long[maxV+1];
          //  Console.WriteLine($"maxV {maxV}");
			for (int i = maxV; i > 0; i--)
			{
				int cnt = 0;
				for (int j = i; j <= maxV; j += i)
				{
					if (freq.ContainsKey(j))
						cnt += freq[j];
				}

				gcdFreq[i] = (long)cnt * (cnt - 1) / 2; // frequency of i and multi of i
                
				for (int j = 2 * i; j <= maxV; j += i)
				{
					gcdFreq[i] -= gcdFreq[j];
				}
			}

			long[] preFix = new long[maxV+1];
			
			for (int i = 1; i <= maxV; i++)
			{ 
				preFix[i] = preFix[i-1] + gcdFreq[i];
			}

			List<int> res = new();
			foreach (long q in queries)
			{
				res.Add(BinarySearch(preFix, q));
			}

			return res.ToArray();
    }
}
