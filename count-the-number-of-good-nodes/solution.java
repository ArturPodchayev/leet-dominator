
public class Solution {

    private List<List<Integer>> tree;
    private int goodNodesCount;

    public int countGoodNodes(int[][] edges) {
        int n = edges.length + 1;
        
        tree = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            tree.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            tree.get(u).add(v);
            tree.get(v).add(u);
        }
        
        goodNodesCount = 0;
        
        dfs(0, -1);

        return goodNodesCount;
    }

    private int dfs(int node, int parent) {
        int size = 1;
        List<Integer> childSizes = new ArrayList<>();
        
        for (int neighbor : tree.get(node)) {
            if (neighbor == parent) {
                continue;
            }
            
            int childSubtreeSize = dfs(neighbor, node);
            size += childSubtreeSize;
            childSizes.add(childSubtreeSize);
        }
        
        boolean sameSize = true;
        if (!childSizes.isEmpty()) {
            int firstSize = childSizes.get(0);
            for (int s : childSizes) {
                if (s != firstSize) {
                    sameSize = false;
                    break;
                }
            }
        }
        
        if (sameSize) {
            goodNodesCount++;
        }
        
        return size;
    }
}
