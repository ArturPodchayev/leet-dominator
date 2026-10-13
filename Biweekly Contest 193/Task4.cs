/*
4077. Minimize Inversions in a Prefix Tree
Solved
Hard
premium lock icon
Companies
Hint
You are given an array words of n unique strings containing only lowercase English letters from 'a' to 'j'. You are also given an integer array target containing each index from 0 to n - 1 exactly once.

Build a prefix tree from words:

The root represents the empty string "".
Each other node represents a different non-empty prefix of a word. The parent of a node is the prefix obtained by removing its last character.
The node representing the complete word words[i] is marked with index i. A marked node may also have children.
You may choose the order of the children of each node independently. You cannot change which node is a child's parent.

Traverse the tree starting at the root. When visiting a node, first record its index if it is marked. Then visit its children in the chosen order, completing the traversal of each child before moving to the next. This is a pre-order traversal.

The recorded indices form an array traversal of length n. Let pos[i] be the position of index i in target.

An inversion is a pair of positions (a, b) such that 0 <= a < b < n and pos[traversal[a]] > pos[traversal[b]].

Return the minimum possible number of inversions over all choices of child orderings.
*/

public class Solution {
    int[] child, wordAT , position;
    long total;
    public int MinInversions(string[] words, int[] target) {
        int n = words.Length;
        position = new int[n];
        for(int p = 0; p<n; p++) position[target[p]] = p;
        int MaxNodes = 1;
        foreach(var w in words) MaxNodes += w.Length;
        child = new int[MaxNodes * 10];
        Array.Fill(child, -1);
        wordAT = new int[MaxNodes];
        Array.Fill(wordAT, -1);


        int nodes = 1;
        for(int i = 0; i<n; i++){
            int current = 0;
            foreach(char ch in words[i]){
                int c = ch - 'a';
                if(child[current * 10 + c] == -1) child[current * 10 + c] = nodes++;
                current = child[current * 10+c];
            }
            wordAT[current] = i;
        }
        total = 0;
        Dfs(0);
        return (int)total;
    }

    //return sorted values positions erry words in sub tree
    int[] Dfs(int node){
        var lists = new List<int[]>();
        for(int c = 0; c < 10; c++){
            int ch = child[node*10 +c];
            if(ch != -1) lists.Add(Dfs(ch));
        }
        int own = wordAT[node] >= 0 ? position[wordAT[node]] : -1;
        int k = lists.Count;

        if(own >=0){
            foreach(var l in lists)
                foreach(int v in l)
                    if(v < own) total++;
        }


        if (k>= 2){
            long[,] cnt = new long [k,k];
            for(int i = 0; i < k; i++){
                for(int j = 0; j < k; j++){
                    if(i == j) continue;
                    int p = 0;
                    long c = 0;
                    foreach(int a in lists[i]){
                        while(p < lists[j].Length && lists[j][p] < a) p++;
                        c += p;
                    }
                    cnt[i , j] = c;
                }
            }
            int full = 1 << k;
            long[] dp = new long[full];
            Array.Fill(dp, long.MaxValue);
            dp[0] = 0;
            for(int mask = 0; mask < full; mask++){
                if(dp[mask] == long.MaxValue) continue;
                for(int j = 0; j < k; j++){
                    if((mask &(1 << j)) != 0) continue;
                    long add = 0;
                    for(int i = 0; i<k; i++)
                        if((mask & (1 << i)) != 0) add += cnt[i, j];
                    int nm = mask | (1<<j);
                    if(dp[mask] + add < dp[nm]) dp[nm] = dp[mask] + add;
                }
            }
            total += dp[full - 1];
        }

        int size = (own >= 0 ? 1 : 0);
        foreach(var l in lists) size +=l.Length;
        int[] result = new int[size];
        int idx = 0;
        if(own >= 0) result[idx++] = own;
        foreach(var l in lists){
            l.CopyTo(result, idx);
            idx += l.Length;
        }
        Array.Sort(result);
        return result;
    }
}
