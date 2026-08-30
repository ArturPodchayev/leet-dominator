class Solution {
public:
    vector<string> watchedVideosByFriends(vector<vector<string>>& watchedVideos, vector<vector<int>>& friends, int id, int level) {
        int n=friends.size();
        vector<bool> visited(n,false);
        queue<int> q;
        q.push(id);
        visited[id]=true;
        while(!q.empty() && level--){
            int size=q.size();
            for(int i=0;i<size;i++){
                int cur=q.front();
                q.pop();
                for(int f:friends[cur]){
                    if(!visited[f]){
                        visited[f]=true;
                        q.push(f);
                    }
                }
            }
        }
        unordered_map<string,int> freq;
        while(!q.empty()){
            int friendId=q.front();
            q.pop();
            for(auto &video:watchedVideos[friendId]) freq[video]++;
        }
        vector<pair<string, int>> sorted(freq.begin(),freq.end());
        sort(sorted.begin(),sorted.end(),[](auto &a, auto &b){
            if(a.second==b.second) return a.first<b.first;
            return a.second<b.second;
        });
        vector<string> result;
        for (auto &p:sorted) result.push_back(p.first);
        return result;
    }
};
