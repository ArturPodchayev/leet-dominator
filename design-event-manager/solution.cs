public class EventManager {
    private PriorityQueue<(int, int), (int, int)> pq;
    private Dictionary<int, int> epPairs = new();
    public EventManager(int[][] events) {
            pq = new PriorityQueue<(int, int), (int, int)>(Comparer<(int, int)>.Create((a,b) => 
            {
                int diff = b.Item2.CompareTo(a.Item2);
                if(diff != 0)
                    return diff;
                
                return a.Item1.CompareTo(b.Item1);
            })
        );


        foreach(int[] cur in events)
        {
           var key = (cur[0], cur[1]);
           pq.Enqueue(key, key);
           epPairs.Add(cur[0], cur[1]);
        }
    }
    
    public void UpdatePriority(int eventId, int newPriority) {
        epPairs.TryAdd(eventId, 0);
        epPairs[eventId] = newPriority;
        var key = (eventId, newPriority);
        pq.Enqueue(key, key);
    }
    
    public int PollHighest() {
       if(epPairs.Count == 0)
            return -1;

        while(pq.TryDequeue(out var key, out var val))
        {
            int eId = key.Item1, pVal = key.Item2;
            if(!epPairs.ContainsKey(eId) || epPairs[eId] != pVal)
                continue;

            epPairs.Remove(eId);
            return eId;
        }

        return -1;
    }
}

/**
 * Your EventManager object will be instantiated and called as such:
 * EventManager obj = new EventManager(events);
 * obj.UpdatePriority(eventId,newPriority);
 * int param_2 = obj.PollHighest();
 */
