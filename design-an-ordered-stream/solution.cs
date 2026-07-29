public class OrderedStream {
    PriorityQueue<string,int> stream;
    int ptr;
    int maxStream;

    public OrderedStream(int n) {
        stream = new PriorityQueue<string,int>();
        ptr = 1;
        maxStream = n;
    }
    
    public IList<string> Insert(int idKey, string value) {
        stream.Enqueue(value,idKey);
        int currPriority = ptr;
        stream.TryPeek(out string val, out currPriority);
        IList<string> result = new List<string>();
        while (currPriority == ptr) {
            result.Add(stream.Dequeue());
            ptr++;
            if (stream.Count > 0) stream.TryPeek(out string val2, out currPriority);
        }
        return result;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream obj = new OrderedStream(n);
 * IList<string> param_1 = obj.Insert(idKey,value);
 */
