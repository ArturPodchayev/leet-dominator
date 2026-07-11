class Solution {
    public int countCompleteComponents(int n, int[][] edges) {
        DisjointSetPotd dsj=new DisjointSetPotd(n);
        for(int[]row:edges){
            dsj.unionByRank(row[0],row[1]);
        }
        int ans=0;
        for(int i=0;i<n;i++){
            dsj.findParent(i);
        }
        Map<Integer,Integer>vertex=new HashMap<>();
        Map<Integer,Integer>edgeCount=new HashMap<>();
        for(int i=0;i<n;i++){
            int root= dsj.parent[i];
            vertex.put(root,vertex.getOrDefault(root,0)+1);
        }
        for(int[]row:edges){
            int root=dsj.findParent(row[0]);
            edgeCount.put(root,edgeCount.getOrDefault(root,0)+1);
        }
        for(int root:vertex.keySet()){
            int v=vertex.get(root);
            int e=edgeCount.getOrDefault(root,0);
            if(e==v*(v-1)/2)ans++;
        }
        return ans;
    }
    public static class DisjointSetPotd{
        int[]rank;
        int[]parent;
        DisjointSetPotd(int n){
            rank=new int[n];
            parent=new int[n];
            for(int i=0;i<n;i++){
                rank[i]=0;
                parent[i]=i;
            }
        }
        public int findParent(int node){
            if(node==parent[node])return node;
            int ultimateParent=findParent(parent[node]);
            parent[node]=ultimateParent;
            return parent[node];
        }
        public void unionByRank(int u,int v){
            int pu=findParent(u);
            int pv=findParent(v);
            if(pu==pv)return;
            if(rank[pv]<rank[pu]){
                parent[pv]=pu;
            }else if(rank[pv]>rank[pu]){
                parent[pu]=pv;
            }else{
                parent[pv]=pu;
                int rankU=rank[pu];
                rank[pu]=rankU+1;
            }
        }
    }
}
