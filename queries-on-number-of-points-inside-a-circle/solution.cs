public class Solution {
	public class SparseTable<T>
	{
		private T[][] table = null;
		private Func<T, T, T> func = null;

		public SparseTable(T[] arr, Func<T, T, T> func)
		{
			this.func = func;
			var n = arr.Length;
			var logn = (int)Math.Log(n, 2) + 1;
			table = new T[n + 1][];
			for (var i = 0; i < table.Length; i += 1)
				table[i] = new T[logn];
			for (var i = 0; i < arr.Length; i += 1)
				table[i][0] = arr[i];
			for (var j = 1; j < logn; j += 1)
				for (var i = 0; i + (1<<j) <= n; i += 1)				
					table[i][j] = func(table[i][j - 1], table[i + (1<<(j - 1))][j - 1]);
		}

		public T Query(int l, int r)
		{
			var j = (int)Math.Log(r - l + 1, 2);
			return func(table[l][j], table[r - (1 << j) + 1][j]);
		}
	}

	public class MaxSparseTable<T> : SparseTable<T> where T : IComparable<T>
	{
		public MaxSparseTable(T[] arr) : base(arr, (x, y) => x.CompareTo(y) > 0 ? x : y)
		{

		}
	}

    private int Greater(int[] nums, int target)
    {
        var start = 0;
        var end = nums.Length - 1;
        while (start <= end)
        {
            var mid = start + (end - start) / 2;
            if (nums[mid] > target)
                end = mid - 1;
            else
                start = mid + 1;
        }
        return end + 1;
    }
    private int Lesser(int[] nums, int target)
    {
        var start = 0;
        var end = nums.Length - 1;
        while (start <= end)
        {
            var mid = start + (end - start) / 2;
            if (nums[mid] < target)
                start = mid + 1;                
            else
                end = mid - 1;
        }
        return start - 1;
    }
    public IList<int> MaxActiveSectionsAfterTrade(string s, int[][] queries) {
        var start = -1;
        var zeros = new List<(int start, int end)>();
        for (var i = 0; i < s.Length; i += 1)
        {
            if (s[i] == '0')
            {
                if (start < 0)
                    start = i;
                continue;
            }
            if (start >= 0)
            {
                zeros.Add((start, i - 1));
                start = -1;
            }            
        }
        if (start >= 0)
            zeros.Add((start, s.Length - 1));
        var starts = new int[zeros.Count];
        var ends = new int[zeros.Count];
        for (var i = 0; i < zeros.Count; i += 1)
        {
            starts[i] = zeros[i].start;
            ends[i] = zeros[i].end;
        }
        MaxSparseTable<int> maxst = null;
        if (zeros.Count > 1)
        {
            var sums = new int[zeros.Count - 1];
            for (var i = 0; i < sums.Length; i += 1)
            {
                sums[i] = ends[i] - starts[i] + 1;
                sums[i] += ends[i + 1] - starts[i + 1] + 1;
            }           
            maxst = new(sums);
        }
        var answer = new int[queries.Length];
        var ones = 0;
        for (var i = 0; i < s.Length; i += 1)
            ones += s[i] - '0';
        for (var i = 0; i < queries.Length; i += 1)
        {
            var l = queries[i][0];
            var r = queries[i][1];
            answer[i] = ones;
            if (zeros.Count < 1)
                continue;
            var next = Greater(starts, l);
            var prev = Lesser(ends, r);
            if (prev - next < -1)
                continue;
            if (prev - next < 0)
            {
                if ((s[l] != '0') || (s[r] != '0'))
                    continue;
                var left = ends[next - 1] - l + 1;
                var right = r - starts[prev + 1] + 1;
                answer[i] += left + right;
                continue;
            }   
            var max = 0;         
            if (prev > next)
                max = maxst.Query(next, prev - 1);
            if (s[l] == '0')
            {
                var left = ends[next - 1] - l + 1;
                var right = ends[next] - starts[next] + 1;
                max = Math.Max(max, left + right);
            }
            if (s[r] == '0')
            {
                var left = ends[prev] - starts[prev] + 1;
                var right = r - starts[prev + 1] + 1;
                max = Math.Max(max, left + right);
            }
            answer[i] += max;
        }
        return answer;
    }
}
