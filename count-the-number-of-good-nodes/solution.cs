public class Solution {
    public Dictionary<int,int> node2Size;
    public Dictionary<int,List<int>> node2Node;
    public HashSet<int> isGood;
    public int CountGoodNodes(int[][] edges) {
        node2Size = new Dictionary<int,int>();
        node2Node = new Dictionary<int,List<int>>();
        isGood = new HashSet<int>();

        HashSet<int> seenOnce = new HashSet<int>();
        HashSet<int> seenMultiple = new HashSet<int>();
        //int n = 0;
        for(int i=0;i<edges.Length;i++){
            if(!node2Node.ContainsKey(edges[i][0])) node2Node[edges[i][0]] = new List<int>();
            if(!node2Node.ContainsKey(edges[i][1])) node2Node[edges[i][1]] = new List<int>();

            node2Node[edges[i][0]].Add(edges[i][1]);
            node2Node[edges[i][1]].Add(edges[i][0]);
            //n = Math.Max(n,Math.Max(edges[i][0],edges[i][1]));
            for(int k=0;k<2;k++){
                int num = edges[i][k];
                if (seenOnce.Contains(num))
                {
                    seenOnce.Remove(num);
                    seenMultiple.Add(num);
                }
            // If the number is not in either set, add it to seenOnce
                else if (!seenMultiple.Contains(num))
                {
                    seenOnce.Add(num);
                }
            }
        }

        foreach(var one in seenOnce){
            if(one==0) continue;
            node2Size[one] = 1;
            isGood.Add(one);
        }

        FindSize(0,-1);
        //Console.WriteLine("HashSet elements: " + string.Join(", ", isGood));
        //Console.WriteLine("Size elements: " + string.Join(", ", node2Size));
        return isGood.Count;


    }
    private int FindSize(int node, int parent){
        //Console.WriteLine(node);
        if(node2Size.ContainsKey(node)) return node2Size[node];
        int size = 0;
        int eachSize = 0;
        //if(node2Node[node].Count==1) isGood.Add(node);
        foreach(int child in node2Node[node]){
            if(child==parent) continue;
            int s = FindSize(child,node);
            //Console.WriteLine($"Each size{eachSize}, size{size},Child{child}");
            if(eachSize==0) eachSize = s;
            if(s!=eachSize) eachSize = -1;
            size+=s;
        }
        size++; // acount for itself;
        if(eachSize!=-1) isGood.Add(node);
        node2Size[node] = size;
        return size;
         
    }
}
