//@yjian012 https://hyper-meta.blogspot.com/
#pragma GCC optimize("O3","unroll-loops")
#pragma GCC target("avx,mmx,sse2,sse3,sse4")
auto _=[]()noexcept{ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);return 0;}();
struct pa{long long sn;int d;} adjl[100000];
struct pr{int ind,pre;} q[100000];
class Solution {
    int getD(const vector<vector<int>>& edges){
        const int n=edges.size()+1;
        if(n==1) return 0;
        memset(adjl,0,n*sizeof(adjl[0]));
        for(const auto &v:edges){
            adjl[v[0]].sn+=v[1];
            adjl[v[0]].d++;
            adjl[v[1]].sn+=v[0];
            adjl[v[1]].d++;
        }
        int qsz=0,lay=0;
        for(int i=0;i<n;++i) if(adjl[i].d==1) q[qsz++]=pr{i,0};
        while(qsz>2){
            lay++;
            int i=0;
            while(i<qsz){
                int nei=adjl[q[i].ind].sn-q[i].pre;
                if(adjl[nei].d<=2){
                    q[i].pre=q[i].ind;
                    q[i].ind=nei;
                    ++i;
                    continue;
                }
                adjl[nei].sn-=q[i].ind;
                adjl[nei].d--;
                q[i]=q[--qsz];
            }
        }
        int l=0,ind=q[0].ind,pre=q[0].pre,tar=q[1].ind;
        while(ind!=tar){
            l++;
            int nxt=adjl[ind].sn-pre;
            pre=ind;
            ind=nxt;
        }
        return 2*lay+l;
    }
public:
    int minimumDiameterAfterMerge(const vector<vector<int>>& edges1,const vector<vector<int>>& edges2) {
        int d1=getD(edges1),d2=getD(edges2);
        return max(max(d1,d2),((d1+1)>>1)+((d2+1)>>1)+1);
    }
};
