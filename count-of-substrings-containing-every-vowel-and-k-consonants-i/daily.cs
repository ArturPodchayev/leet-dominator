public int MaxSum(IList<int> nums, int k) =>
    Enumerable.Range(0, 30).Select(bit => nums.Count(n => (n >> bit & 1) == 1)).ToArray() is var counts
        ? (int)Enumerable.Range(0, k)
            .Select(i => counts.Select((c, bit) => c > i ? 1L << bit : 0L).Sum())
            .Aggregate(0L, (sum, x) => (sum + x * x) % 1_000_000_007)
        : 0;
