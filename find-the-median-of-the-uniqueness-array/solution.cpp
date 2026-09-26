class Solution {
public:
    int medianOfUniquenessArray(vector<int>& nums) {
        size_t n = nums.size();
        int64_t subarrays = (n)*(n+1)/2;
        int64_t k = (subarrays % 2 == 1 ? (subarrays / 2)+1 : (subarrays/2));
        int64_t ans = 0;
        int64_t l =1;
        int64_t r = n;
        while(l<=r) {
            int64_t mid = (l+r)/2;
            if(f(mid, nums,k)) {
                r = mid-1;
                ans = mid;
            }
            else l = mid+1;
        }
        return ans;
    }

    bool f(int64_t mid, vector<int>&a, int64_t subarrays) {
        size_t n = a.size();
        unordered_map<int, int> frq;
        int32_t dist = 0;
        int j = 0;
        int64_t sub = 0;
        for(int i = 0; i <n; i++) {
            if(frq[a[i]] == 0) dist++;
            frq[a[i]]++;
            while(dist > mid) {
                if(frq[a[j]] == 1) dist--;
                frq[a[j]]--;
                j++;
            }
            sub += (i - j + 1);
        }
        return sub >= subarrays;
    }
};
