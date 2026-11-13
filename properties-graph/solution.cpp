class Disjointset{
    private:
    vector<int>par,rank;
    public:
    Disjointset(int n){
        par.resize(n);
        rank.resize(n,0);
        for(int i=0;i<n;i++){
            par[i]=i;
        }
    }
    int find(int x){
        if(par[x]!=x){
            par[x]=find(par[x]);
        }
        return par[x];
    }
    void unite(int x,int y){
        int rootx=find(x);
        int rooty=find(y);
        if(rootx!=rooty){
            if(rank[rootx]>rank[rooty]){
                par[rooty]=rootx;
            }
            else if(rank[rootx]<rank[rooty]){
                par[rootx]=rooty;
            }
            else{
                par[rooty]=rootx;
                rank[rootx]++;
            }
        }
    }
    bool isc(int x,int y){
        return find(x)==find(y);
    }
};
class Solution {
public:
    int numberOfComponents(vector<vector<int>>& pro, int k) {
        vector<set<int>>vs(pro.size());
        unordered_set<int>aa;
        Disjointset ds(pro.size());
        for(int i=0;i<pro.size();i++){
            for(auto j:pro[i]){
                vs[i].insert(j);
            }
        }
        for(int i=0;i<pro.size();i++){
            for(int l=i+1;l<pro.size();l++){
                int cnt=0;
                for(auto j:vs[i]){
                    if(vs[l].find(j)!=vs[l].end()){
                        cnt++;
                        if(cnt>=k){ds.unite(i,l);break;}
                    }
                }
            }
        }
        for(int c=0;c<pro.size();c++){
            aa.insert(ds.find(c));
        }
        return aa.size();
    }
};
