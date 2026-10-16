class Solution {
public:
    vector<int> getOrder(vector<vector<int>>& tasks) {
        int n = tasks.size();
        vector<int> result;
        vector<pair<int, int>> indexedTasks(n);
        
        for (int i = 0; i < n; i++) indexedTasks[i] = {tasks[i][0], i};
        
        sort(indexedTasks.begin(), indexedTasks.end());
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        
        long long currentTime = 0;
        int taskIndex = 0;
        
        while (taskIndex < n or !minHeap.empty()) {
            while (taskIndex < n and indexedTasks[taskIndex].first <= currentTime) {
                int index = indexedTasks[taskIndex].second;
                int processingTime = tasks[index][1];
                minHeap.push({processingTime, index});
                taskIndex++;
            }
            if (minHeap.empty()) currentTime = indexedTasks[taskIndex].first;
            else {
                auto [processingTime, index] = minHeap.top();
                minHeap.pop();
                result.emplace_back(index);
                currentTime += processingTime;
            }
        }
        
        return result;
    }
};
