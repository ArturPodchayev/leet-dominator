public class Solution {
    private bool FindOuterInvoke(int curNode, HashSet<int>[] graph, HashSet<int> sus)
    {
        HashSet<int> visited = new();
        Queue<int> que = new();
        que.Enqueue(curNode);

        while(que.Count > 0)
        {
            int qLen = que.Count;
            for(int i = 0; i < qLen; i++)
            {
                var node = que.Dequeue();
                visited.Add(node);
                foreach(int next in graph[node])
                {
                    if(sus.Contains(next))
                        return true;
                    if(!visited.Contains(next))
                        que.Enqueue(next);
                }
            }
        }

        return false;
    }
    public IList<int> RemainingMethods(int n, int k, int[][] invocations) {
 			HashSet<int>[] graph = new HashSet<int>[n];
			for (int i = 0; i < n; i++)
			{
				graph[i] = new HashSet<int>();
			}
			foreach (int[] dep in invocations)
			{
				graph[dep[0]].Add(dep[1]);
			}

			HashSet<int> res = Enumerable.Range(0, n).ToHashSet();
			res.Remove(k);

			Queue<int> que = new();
			que.Enqueue(k);
			while (que.Count > 0) // remove all suspicous methods
			{
				int node = que.Dequeue();
				foreach (int next in graph[node])
				{
					if (res.Contains(next))
					{
						res.Remove(next);
						que.Enqueue(next);
					}
				}
			}

			for (int i = 0; i < n; i++)
			{
				if (res.Contains(i))
				{
					foreach (int dst in graph[i])
					{
						if (!res.Contains(dst)) // has outside invoke related with suspicious method.
							return Enumerable.Range(0, n).ToList();
					}
				}
			}

			return res.ToList();
    }
}
