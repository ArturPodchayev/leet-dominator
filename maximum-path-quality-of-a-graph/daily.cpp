class Solution {
public:
    vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>>free;


        for(int i = 0; i < servers.size(); i++){
            free.push({servers[i], i});
        }
         

        priority_queue<pair<pair<long,long>, int>, vector<pair<pair<long,long>,int>>, greater<pair<pair<long,long>, int>>>busy;
        vector<int>result;


        for(int i = 0; i < tasks.size(); i++){

            while(!busy.empty() && busy.top().first.first <= i) {
                free.push({
                    busy.top().first.second,
                    busy.top().second
                });
                busy.pop();
            }


            if(!free.empty()){
                auto server = free.top();
                free.pop();
                result.push_back(server.second);
                 busy.push({{tasks[i] + i, server.first}, server.second});
            }
                
            else{

                auto server = busy.top();
                busy.pop();

                result.push_back(server.second);
                busy.push({{server.first.first+tasks[i], server.first.second}, server.second});
            }
        }
        return result;
    }
};
