class Solution {
    static List<List<Integer>>ll;
    static int MOD=1_000_000_007;
    static int[][]up;
    static int[]depth;
    static int LOG=20;
    static int[]ans;
    public int[] assignEdgeWeights(int[][] edges, int[][] queries) {
        int n=edges.length+1;
        ll=new ArrayList<>();
        for(int i=0;i<=n;i++){
            ll.add(new ArrayList<>());
        }
        for(int[]e:edges){
            int u=e[0];
            int v=e[1];
            ll.get(u).add(v);
            ll.get(v).add(u);
        }
        up=new int[n+1][LOG];
        depth=new int[n+1];
        ans=new int[queries.length];
        dfs(1,0);
        int i=0;
        for(int[]q:queries){
             int l=q[0];
             int r=q[1];
             int lca=get_Lca(l,r);
             int res=(depth[l]+depth[r])-2*depth[lca];
             int exp=(int)count(res);
             ans[i++]=exp;
        }
        return ans;
    }
    public void dfs(int node,int parent){
        up[node][0]=parent;
        for(int j=1;j<LOG;j++){
            up[node][j]=up[up[node][j-1]][j-1];
        }
        for(int nbrs:ll.get(node)){
            if(nbrs!=parent){
                depth[nbrs]=depth[node]+1;
                dfs(nbrs,node);
            }
        }
    }
    public static int kthAncestor(int node,int k){
        for(int j=0;j<LOG;j++){
            if(((k>>j)&1)==1){
                node=up[node][j];
                if(node==0){
                    return 0;
                }
            }
        }
        return node;
    }
    public static int get_Lca(int u,int v){
        if(depth[u]<depth[v]){
            int temp=u;
            u=v;
            v=temp;
        }
        u=kthAncestor(u,depth[u]-depth[v]);
        if(u==v){
            return u;
        }
        for(int i=LOG-1;i>=0;i--){
            if(up[u][i]!=up[v][i]){
                u=up[u][i];
                v=up[v][i];
            }
        }
        return up[u][0];
    }
    public long count(int n){
        if(n==0){
            return 0;
        }
        return pow(2,n-1)%MOD;
    }
    public long pow(long a,long b){
        long res=1;
        a%=MOD;
        while(b>0){
            if(b%2==1){
                res=(res*a)%MOD;
            }
            a=(a*a)%MOD;
            b=b>>1;
        }
        return res%MOD;
    }
}
