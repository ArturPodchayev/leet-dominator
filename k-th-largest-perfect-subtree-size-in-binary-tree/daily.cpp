class Solution {
public:
    using ll = long long;
    
    ll findKthSmallest(vector<int>& A, int k) {
        int n = A.size();
        
        auto can = [&](ll x) -> bool {
            ll count = 0;
            
            for(ll msk = 1; msk < (1 << n); ++msk) {
                ll bits = 0, LCM = 1;
                
                for(int i = 0; i < n; ++i) {
                    if(msk & (1 << i)) {
                        ++bits;
                        LCM = lcm(LCM, (ll)A[i]);
                    }
                }

                if(bits & 1)
                    count += x / LCM;

                else
                    count -= x / LCM;
            }

            return count >= k;
        };

        ll low = 1, high = 1e18, cur = low;

        while(low <= high) {
            ll mid = low + (high - low) / 2;

            if(can(mid))
                cur = mid, high = mid - 1;

            else
                low = mid + 1;
        }

        return cur;
    }
};
