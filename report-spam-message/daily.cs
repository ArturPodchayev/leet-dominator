public class Solution {
    public IList<int> BusiestServers(int k, int[] arrival, int[] load)
        {
			int[] servers = new int[k];
			int[] count = new int[k];

			if(arrival.Length <= k)
			{
				return Enumerable.Range(0, arrival.Length).ToList();
			}

			for(int i =0; i < arrival.Length; i++)
			{
				int serverIndex = i % k;
				if (servers[serverIndex] <= arrival[i])
				{
					servers[serverIndex] = arrival[i] + load[i];
					count[serverIndex]++;
					continue;
                }

				int _count = 1;
				serverIndex++;
                serverIndex = serverIndex == k ? 0 : serverIndex;

                while (_count < k)
				{
                    if (servers[serverIndex] <= arrival[i])
                    {
                        servers[serverIndex] = arrival[i] + load[i];
                        count[serverIndex]++;
						break;
                    }
					_count++;
					serverIndex++;
                    serverIndex = serverIndex == k ? 0 : serverIndex;
                }
			}

			int maxNumberOfReq = Int32.MinValue;
			IList<int> result = new List<int>();
			for(int i = 0; i < count.Length; i++)
			{
				if (count[i] > maxNumberOfReq)
				{
					maxNumberOfReq = count[i];
					result.Clear();
					result.Add(i);
					continue;
                }

				if (count[i] == maxNumberOfReq)
				{
                    result.Add(i);
                    continue;
                }
			}
			return result;
        }
}
