public class Solution {
    public IList<bool> GetResults(int[][] queries) {
        List<bool> result = new();
        SortedList<int,int> blocks = new();
        foreach(int[] q in queries)
        {
            if(q[0]==1)
            {
                blocks.Add(q[1],q[1]);
                int i = blocks.IndexOfKey(q[1]);
                if(i>0)
                {
                    var prevk = blocks.Keys[i-1];
                    var prevv = blocks.Values[i-1];
                    blocks.SetValueAtIndex(i,Math.Max(prevv,q[1]-prevk));
                }
                for(int j=i+1; j<blocks.Count; j++)
                {
                    //update all node values
                    int prev = blocks.Values[j-1];
                    int prevk = blocks.Keys[j-1];
                    int currk = blocks.Keys[j];
                    if(blocks.Values[j] != Math.Max(prev,currk-prevk))
                        blocks.SetValueAtIndex(j,Math.Max(prev,currk-prevk));
                    else break;
                }
            }
            else if(q[0]==2)
            {
                if(q[2]>q[1])
                {
                    result.Add(false);
                    continue;
                }
                if(blocks.Count==0)
                {
                    result.Add(true);
                    continue;
                }
                int i = BinarySearch(blocks,q[1]);
                if(i==-1)
                {
                    result.Add(true);
                    continue;
                }
                int val = blocks.Values[i];
                int key = blocks.Keys[i];
                if(q[2]<=q[1]-key || q[2]<=val) result.Add(true);
                else result.Add(false);
            }
        }
        return result;
    }
    
    int BinarySearch(SortedList<int,int> blocks, int val)
    {
        int i=0, j=blocks.Count-1,p=-1;
        while(i<=j)
        {
            int mid = (i+j)/2;
            if(blocks.Keys[mid]==val) return mid;
            if(blocks.Keys[mid]<val)
            {
                p=mid;
                i=mid+1;
            } 
            else j=mid-1;
        }
        return p;
    }
}
