#define mod 1000000007
#define ll long long int

class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        // vector<int> arr(n,1);
        vector<int> prefSum(n,1);

        while(k--){
            for(int i=1;i<n;i++){
                prefSum[i] = (prefSum[i-1]+prefSum[i])%mod;
            }
        }
        return prefSum[n-1]%mod;
    }
};
