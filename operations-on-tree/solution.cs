public class LockingTree {
    private int[] par;
    private int[] lockStatus;
    private List<int>[] children;
    public LockingTree(int[] parent) {
        int n = parent.Length;
        par = new int[n];
        children = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            children[i] = new List<int>();
        }

        lockStatus = Enumerable.Repeat(-1, n).ToArray();
        for(int i = 0; i < n; i++)
        {
            par[i] = parent[i];
            int p = par[i];
            if (p >= 0)
				children[p].Add(i);
        }
    }
    
    public bool Lock(int num, int user) {
      //  Console.WriteLine($"lock: num : {num}, user : {user}");
        if(num >= par.Length || lockStatus[num] >= 0)
            return false;

        lockStatus[num] = user;
        return true;
    }
    
    public bool Unlock(int num, int user) {
       // Console.WriteLine($"unlock: num : {num}, user : {user}");
        if(num >= par.Length || lockStatus[num] != user)
            return false;

        lockStatus[num] = -1;
        return true;
    }
    
    public bool Upgrade(int num, int user) {
      //  Console.WriteLine($"upgrade: num : {num}, user : {user}");
        if(lockStatus[num] >= 0)
            return false;

        // parent no locked:
        int p = par[num];
        while(p != -1 && lockStatus[p] < 0)
        {
            p = par[p];
        }

        if(p != -1)
            return false;

        List<int> lockedDec = new();
        Queue<int> que = new();
        que.Enqueue(num);
        while(que.Count > 0)
        {
            int qLen = que.Count;
            for(int i = 0; i < qLen; i++)
            {
                int cur = que.Dequeue();
                if(lockStatus[cur] >= 0)
                    lockedDec.Add(cur);

                foreach (int chd in children[cur])
                {
                    que.Enqueue(chd);
                }
            }
        }

        if(lockedDec.Count == 0)
            return false;

        foreach(int chd in lockedDec)
        {
            lockStatus[chd] = -1;
        }

        lockStatus[num] = user;

        return true;
    }
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * LockingTree obj = new LockingTree(parent);
 * bool param_1 = obj.Lock(num,user);
 * bool param_2 = obj.Unlock(num,user);
 * bool param_3 = obj.Upgrade(num,user);
 */
