public class Solution {
    private int[] dir = new int[] { 0, 1, 0, -1, 0 };
    private int[,] distToThief;
    private bool BFSWithFactor(int x, int y, int safeFactor, bool[,] visited)
    {
        int n = visited.GetLength(0);
        Queue<(int, int)> que = new();
        que.Enqueue((x, y));
        while (que.TryDequeue(out var cur))
        { 
            int r = cur.Item1, c = cur.Item2;
            if (visited[r, c] || distToThief[r, c] < safeFactor)
                continue;
            visited[r, c] = true;
            if (r == n - 1 && c == n - 1)
                return true;

            for (int i = 0; i < 4; i++)
            { 
                int newR = r + dir[i], newC = c + dir[i+1];
                if(newR < 0 || newC < 0 || newR >= n || newC >= n || visited[newR, newC] || distToThief[newR, newC] < safeFactor)
                    continue;
                if (newR == n - 1 && newC == n - 1)
                    return true;

                que.Enqueue((newR, newC));
            }
        }

        return false;
    }

    public int MaximumSafenessFactor(IList<IList<int>> grid) {
 			int n = grid.Count;
			if (n == 0 || grid[0][0] == 1 || grid[n - 1][n - 1] == 1)
				return 0;

            List<(int, int)> thiefs = new();
			bool[,] visited =new bool[n, n];
			// Init dist to closes thief
			distToThief = new int[n, n];
			for (int i = 0; i < n; i++)
			{
				for (int j = 0; j < n; j++)
				{
					distToThief[i, j] = 2 * n;
					visited[i, j] = false;
					if (grid[i][j] == 1)
						thiefs.Add((i, j));
				}
			}

			// Calculate dist to closest thief
			PriorityQueue<int[], int> que = new();
			foreach (var cur in thiefs)
			{ 
				int r = cur.Item1, c = cur.Item2;
				que.Enqueue([r, c, r, c], 0);
			}

			while (que.TryDequeue(out var cur, out int dist))
			{ 
				int x = cur[0], y = cur[1], r = cur[2], c = cur[3];
				if (visited[x,y])
					continue;
				visited[x,y] = true;
				distToThief[x, y] = Math.Min(distToThief[x,y], dist);
				for (int i = 0; i < 4; i++)
				{ 
					int newX = x + dir[i], newY = y + dir[i+1];
					if (newX < 0 || newY < 0 || newX >= n || newY >= n || visited[newX, newY])
						continue;

					int nextDist = Math.Abs(newX-r) + Math.Abs(newY-c);
					que.Enqueue([newX, newY, r, c], nextDist);
				}
			}

			int safePath = 0, minSafe = 1, maxSafe = 2 * n, safeFactor = 0;
			while (minSafe <= maxSafe)
			{
				safeFactor = (minSafe + maxSafe) / 2;
				Array.Clear(visited, 0, n*n);

				if (BFSWithFactor(0, 0, safeFactor, visited))
				{
					safePath = safeFactor;
					minSafe = safeFactor + 1;
				}
				else
					maxSafe = safeFactor - 1;
			}

			return safePath;
    }
}
