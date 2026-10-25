class Solution {
    using tii = tuple<int,int,int>;
public:
    vector<vector<int>> colorGrid(int n, int m, vector<vector<int>>&sources) {
        vector<vector<int>>g(n,vector<int>(m,0));
        vector<vector<int>>time(n,vector<int>(m,INT_MAX));
        priority_queue<tii,vector<tii>,greater<tii>>pq;
        for(int i = 0;i<sources.size();i++){
            int r = sources[i][0];
            int c = sources[i][1];
            int col = sources[i][2];
            g[r][c] = col;
            time[r][c] = 0;
            pq.push({0,r,c});
        }
        vector<pair<int,int>>dir = {{0,-1},{-1,0},{1,0},{0,1}};
        while(!pq.empty()){
            auto [t,r,c] = pq.top();
            pq.pop();
            for(auto [dx,dy]:dir){
                int x = dx+r;
                int y = dy+c;
                if(x >= 0 && x < n && y >= 0 && y < m){
                    if(time[x][y] > t+1){
                        time[x][y] = t+1;
                        g[x][y] = g[r][c];
                        pq.push({t+1,x,y});
                    }
                    else if(time[x][y] == t+1 && g[x][y] < g[r][c]){
                        g[x][y] = g[r][c];
                        pq.push({t+1,x,y});
                    }
                }
            }
        }
        return g;
    }
};
