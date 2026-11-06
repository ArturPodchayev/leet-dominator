class Solution
{
	public int TallestBillboard(int[] rods)
	{
		// Find the max. possible height of a rod
		var maxHeight = 0;
		for (var i = 0; i < rods.Length; i++)
			maxHeight += rods[i];
		maxHeight /= 2;

		var cache = new Dictionary<(int, int), int>();
		int findTallestRods(int i, int rod1, int rod2)
		{
			if (rod1 > maxHeight || rod2 > maxHeight)
				return 0;

			if (i >= rods.Length)
				return rod1 == rod2 ? rod1 : 0;

			// This is key:
			// Simplify the problem by reducing the rods to its smallest equivalent problem
			// For example, solving for (i, rod1 = 2, rod2 = 3) will yield the same
			//  solution as solving for (i, rod1 = 0, rod2 = 1) because what matters going
			// forward is solving for the diff between the rods.
			var smallerRod = Math.Min(rod1, rod2);
			// We can also increase cache hits by always having the rods sorted,
			// since solving for (i, rod1 = 2, rod2 = 0) will yield the same
			//    as solving for (i, rod1 = 0, rod2 = 2).
			var simpRod1 = 0;
			var simpRod2 = Math.Max(rod1, rod2) - smallerRod;
			var cacheKey = (i, simpRod2); // Since the simplified rod1 is always 0, no need to include it in the key.
			if (cache.TryGetValue(cacheKey, out var result))
			{
				if (result == 0) // In this case, we only have a solution if the rods are already the same height
					return rod1 == rod2 ? rod1 : 0;

				// Add back the smaller rod to get the true solution
				return result + smallerRod;
			}

			// Option 1: Add i to rod1
			var op1 = findTallestRods(i + 1, simpRod1 + rods[i], simpRod2);

			// Option 2: Add i to rod2
			var op2 = findTallestRods(i + 1, simpRod1, simpRod2 + rods[i]);

			// Option 3: Ignore i
			var op3 = findTallestRods(i + 1, simpRod1, simpRod2);

			result = Math.Max(op1, op2);
			result = Math.Max(result, op3);
			cache[cacheKey] = result;

			if (result == 0) // In this case, we only have a solution if the rods are already the same height
				return rod1 == rod2 ? rod1 : 0;

			// Add back the smaller rod to get the true solution
			return result + smallerRod;
		}

		return findTallestRods(0, 0, 0);
	}
}
