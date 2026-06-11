class Solution {
    public int assignEdgeWeights(int[][] edges) {
        int maxDepth = 0;
        int MOD = 1000000007;

        HashMap<Integer, ArrayList<Integer>> edgeChildMap = new HashMap<>();
        for (int[] edge : edges) {
            edgeChildMap
                    .computeIfAbsent(edge[0], k -> new ArrayList<>())
                    .add(edge[1]);
            edgeChildMap
                    .computeIfAbsent(edge[1], k -> new ArrayList<>())
                    .add(edge[0]);
        }

        HashMap<Integer, Integer> nodeDepth = new HashMap<>();
        nodeDepth.put(1, 0);

        Queue<Integer> nodes = new LinkedList<>();
        nodes.add(1);

        while (!nodes.isEmpty()) {
            int node = nodes.poll();

            for (int child : edgeChildMap.getOrDefault(node, new ArrayList<>())) {
                if(!nodeDepth.containsKey(child)) {
                    nodeDepth.put(child, nodeDepth.get(node) + 1);
                    nodes.add(child);
                    maxDepth = Math.max(maxDepth, nodeDepth.get(child));
                }
            }
        }

        long result = 1;
        for (int i = 0; i < maxDepth - 1; i++) {
            result = (result * 2) % MOD;
        }

        return (int) result;
    }
}
