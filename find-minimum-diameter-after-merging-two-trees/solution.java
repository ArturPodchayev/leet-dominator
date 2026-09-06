class Solution {
    static int farNode=0;
    static int farDist=0;
    public int minimumDiameterAfterMerge(int[][] edges1, int[][] edges2) {
        List<List<Integer>> adj1= new ArrayList<>();
        int n1=edges1.length,n2=edges2.length;
        List<List<Integer>> adj2= new ArrayList<>();
         
        for(int i=0;i<=n1+1;i++) adj1.add(new ArrayList<>());
        for(int i=0;i<=n2+1;i++) adj2.add(new ArrayList<>());

        for(int i=0;i<edges1.length;i++) {
            adj1.get(edges1[i][0]).add(edges1[i][1]);
            adj1.get(edges1[i][1]).add(edges1[i][0]);
        }

        for(int i=0;i<edges2.length;i++) {
            adj2.get(edges2[i][0]).add(edges2[i][1]);
            adj2.get(edges2[i][1]).add(edges2[i][0]);
        }
        if(n1==0 && n2==0) return 1;
        int maxi11=farDist;
        if(n1==0) {
            maxi11=0;
        }
        else {
            solve(adj1,0,-1,0);
         solve(adj1,farNode,-1,0);
         maxi11=farDist;
           farDist=0;
         farNode=0;
        
        }
        System.out.print(maxi11+" ");
         int maxi22=farDist;
        if(n2==0){
            maxi22=0;
        }
        else{
             
       solve(adj2,0,-1,0);
        solve(adj2,farNode,-1,0);
        maxi22=farDist;
         farDist=0;
         farNode=0;
      
        }
         System.out.print(maxi22+" ");
         return Math.max(maxi11,Math.max(maxi22,((maxi11+1)/2 + (maxi22+1)/2 +1)));
    }

    public void solve(List<List<Integer>> adj, int curr,int par,int dist){
          if(dist>farDist){
            farDist=dist;
             farNode=curr;
          }
        
         for(int neigh: adj.get(curr)){
           if(neigh!=par) solve(adj,neigh,curr,dist+1);
         }
         
         
    }
}
