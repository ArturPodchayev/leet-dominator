class Solution {
public:
    int minimumOperations(vector<int>& nums, int start, int goal) {
        int n = nums.size();

        queue<pair<int,int>> q;
        set<int>visited;
        q.push({start,0});
        visited.insert(start);

        while (!q.empty()){
            pair<int,int> temp = q.front();
            q.pop();

            int nd = temp.first;
            int cnt = temp.second;

            if (nd == goal){
                return cnt;
            }

            for (int i = 0; i < n; i++){
                int add = nums[i] + nd;
                int sub = nd - nums[i];
                int xr = nd^nums[i];

                if (add == goal || sub == goal || xr == goal){
                    return cnt+1;
                }

                if (add >= 0 && add <= 1000 && visited.find(add) == visited.end()){
                    q.push({add,cnt+1});
                    visited.insert(add);
                }

                if (sub >= 0 && sub <= 1000 && visited.find(sub) == visited.end()){
                    q.push({sub,cnt+1});
                    visited.insert(sub);
                }

                if (xr >= 0 && xr <= 1000 && visited.find(xr) == visited.end()){
                    q.push({xr,cnt+1});
                    visited.insert(xr);
                }

            }

        }

        return -1;
    }
};
