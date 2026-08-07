class Solution {
public:

vector<int>parent;
vector<int>rank;
    int find(int a)
    {
        if(a==parent[a])
        {
            return a;
        }
        return parent[a]= find(parent[a]);
    }

    void Union(int a, int b)
    {
        int pa= find(a);
        int pb= find(b);
        if(pa==pb)return;

        if(rank[pa]>rank[pb])
        {
            parent[pb]=pa;
        }
        else
        if(rank[pb]>rank[pa])
        {
            parent[pa]=pb;
        }
        else
        {
            parent[pb]=pa;
            rank[pa]++;
        }
        return;
    }
    long long countPairs(int n, vector<vector<int>>& edges) {
        
        parent.resize(n);
        rank.resize(n,0);
        for(int i=0;i<n;i++)
        parent[i]=i;
        for(auto e: edges)
        {
            int a= e[0];
            int b=e[1];
            int pa=find(a);
            int pb=find(b);
            if(pa!=pb)
            {
                Union(a,b);
            }
        }
        unordered_map<int, int>mp;
        for(int i=0;i<n;i++)
        {
            mp[find(i)]++;
        }
        long long  res=0;
        long long  rem=n;
        for(auto x:mp)
        {
            long long  size=x.second;
            res+=size*(rem-size);
            rem -= size;
        }
        return res;
    }
};
