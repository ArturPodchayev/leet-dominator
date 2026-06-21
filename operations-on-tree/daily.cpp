class Solution {
public:
    int maxIceCream(vector<int>& costs, int coins) {
        int maxi = *max_element(costs.begin(), costs.end());

        vector<int> arr(maxi + 1, 0);

        for (auto el : costs) {
            arr[el]++;
        }

        int cnt = 0;

        for (int i = 1; i <= maxi; i++) {
            if (arr[i] == 0) continue;

            long long total = 1LL * arr[i] * i;

            if (total <= coins) {
                coins -= total;
                cnt += arr[i];
            } else {
                cnt += coins / i;
                break;
            }
        }

        return cnt;
    }
};
