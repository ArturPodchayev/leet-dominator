class Solution {
    public int numberOfComponents(int[][] properties, int k) {
        int n = properties.length;
        
        boolean[] vis = new boolean[n];
        int components = 0;

        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (intersect(properties[i], properties[j]) >= k) {
                    adj.get(i).add(j);
                    adj.get(j).add(i);
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (!vis[i]) {
                components++;
                dfs(adj, vis, i);
            }
        }

        return components;
    }

    private void dfs(List<List<Integer>> adj, boolean[] vis, int node) {
        
        vis[node] = true;
        
        for (int it : adj.get(node)) {
            
            if (!vis[it]){
                dfs(adj,vis,it);
            }
            }
        }
    

    private int intersect(int[] a, int[] b) {
        
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int num : a) {
            map.put(num, map.getOrDefault(num, 1));
        }

        int count = 0;
        
        for (int num : b) {
            
            if (map.containsKey(num) && map.get(num) > 0) {
                count++;
                map.put(num, map.get(num) - 1);
            }
        }
        return count;
    }
}
