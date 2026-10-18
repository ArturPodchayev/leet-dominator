class Solution {
public:
    pair<int,int> helper(int n)
    {
        int n5=0;
        int n2=0;
        while(n%5==0)
        {
            n5++;
            n=(n/5);
        }
        while(n%2==0)
        {
            n2++;
            n=(n/2);
        }
        return {n2,n5};
    }
    int maxTrailingZeros(vector<vector<int>>& grid) {
        vector<vector<pair<int,int>>> horizontal(grid.size(),vector<pair<int,int>>(grid[0].size()));
        vector<vector<pair<int,int>>> vertical(grid.size(),vector<pair<int,int>>(grid[0].size()));

        for(int i=0;i<grid.size();i++)
        {
            horizontal[i][0]=helper(grid[i][0]);
            for(int j=1;j<grid[0].size();j++)
            {
                horizontal[i][j]=helper(grid[i][j]);
                horizontal[i][j].first+=horizontal[i][j-1].first;
                horizontal[i][j].second+=horizontal[i][j-1].second;
            }
        }
        for(int j=0;j<grid[0].size();j++)
        {
            vertical[0][j]=helper(grid[0][j]);
            for(int i=1;i<grid.size();i++)
            {
                vertical[i][j]=helper(grid[i][j]);
                vertical[i][j].first+=vertical[i-1][j].first;
                vertical[i][j].second+=vertical[i-1][j].second;
            }
        }
        int ans=0;
        for(int i=0;i<grid.size();i++)
        {
            for(int j=0;j<grid[0].size();j++)
            {
                pair<int,int> p = helper(grid[i][j]);
                pair<int,int> uv = vertical[i][j];
                pair<int,int> lh = horizontal[i][j];

                pair<int,int> dv = 
                {vertical[grid.size()-1][j].first - uv.first + p.first,vertical[grid.size()-1][j].second - uv.second+p.second};
                pair<int,int> rh = 
                {horizontal[i][grid[0].size()-1].first - lh.first+p.first, horizontal[i][grid[0].size()-1].second - lh.second+p.second};

                int l1 = min(uv.first+lh.first - p.first,uv.second+lh.second - p.second);
                int l2 = min(uv.first+rh.first - p.first,uv.second+rh.second - p.second);
                int l3 = min(uv.first+dv.first - p.first,uv.second+dv.second - p.second);
                int l4 = min(dv.first+lh.first - p.first,dv.second+lh.second - p.second);
                int l5 = min(dv.first+rh.first - p.first,dv.second+rh.second - p.second);
                int l6 = min(rh.first+lh.first - p.first,rh.second+lh.second - p.second);
                // cout<<i<<" "<<j<<" "<<l1<<l2<<l3<<l4<<l5<<l6<<endl;
                ans=max(ans,max({l1,l2,l3,l4,l5,l6}));
            }
        }
        return ans;
    }
};
