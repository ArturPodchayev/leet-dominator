class Solution {
public:
    using ll = unsigned long long;
    const ll BASE = 1315423911ULL;

    bool good(int mid, int n, vector<int> &nums) {
        if (mid > n) return false;

        unordered_map<ll, int> freq(2*n);


        ll hash = 0;
        ll power = 1;

       
        for (int i = 0; i < mid - 1; i++) {
            power *= BASE;
        }

      
        for (int i = 0; i < mid; i++) {
            hash = hash * BASE + nums[i];
        }
        freq[hash]++;

       
        for (int i = mid; i < n; i++) {
            hash = hash - nums[i - mid] * power;
            hash = hash * BASE + nums[i];
            freq[hash]++;
        }

      
        for (auto &p : freq) {
            if (p.second == 1) return true;
        }

        return false;
    }

    int smallestUniqueSubarray(vector<int>& nums) {
        int n = nums.size();
        int l = 1, r = n;
        int best = n;

        while (l <= r) {
            int mid = (l + r) / 2;
            if (good(mid, n, nums)) {
                best = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return best;
    }
};
