class Solution {
public:
    vector<int> busiestServers(int k, vector<int>& arrival, vector<int>& load) {
        vector<int> cnt(k, 0);

        // Min-heap: {available time, server index}
        priority_queue<pair<int, int>,vector<pair<int, int>>,greater<pair<int, int>>> busyServers;

        // Stores indices of currently available servers
        set<int> availableServers;

        // Initially, all servers are available
        for (int i = 0; i < k; i++) {
            availableServers.insert(i);
        }

        int n = arrival.size();

        for (int i = 0; i < n; i++) {
            int arrTime = arrival[i];

            //taking out all servers that are available when ith request arrive 
            while (!busyServers.empty() &&
                   busyServers.top().first <= arrTime) {

                availableServers.insert(busyServers.top().second);
                busyServers.pop();
            }

            // if no server is available drop request (according to question)
            if (availableServers.empty()) {
                continue;
            }

            // Find the first available server with index >= i % k
            auto it = availableServers.lower_bound(i % k);

            //wrap around the index
            if (it == availableServers.end()) {it = availableServers.begin();}

            int serverIndex = *it;

            cnt[serverIndex]++;

            // Move selected Server from Available Server to BusyServer
            busyServers.push({arrTime + load[i], serverIndex});
            availableServers.erase(it);
        }

        int maxRequests = *max_element(cnt.begin(), cnt.end());

        vector<int> ans;

        for (int i = 0; i < k; i++) {
            if (cnt[i] == maxRequests) {
                ans.push_back(i);
            }
        }

        return ans;
    }
};
