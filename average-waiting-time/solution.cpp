class Solution {
public:
    double averageWaitingTime(const std::vector<std::vector<int>>& customers) {
        if (customers.empty()) {
            return 0;
        }

        double average_time = 0;
        const int n = customers.size();        

        int current_time = customers[0][0];
        for (int i = 0; i < n; ++i) {
            if (customers[i][0] > current_time) {
                current_time = customers[i][0];
            }
            current_time += customers[i][1];
            const double waiting_time = current_time - customers[i][0];
            const double adjusted_waiting_time = waiting_time / n;
            average_time += adjusted_waiting_time;
        }
        return average_time;
    }
};
