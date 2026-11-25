
#define ll long long
#define debug(x) cout<<#x<<" is: "<<x<<endl;

class ArrayHash{
public:
    vector<ll> arr;
    ll mod1, mod2, omega1, omega2;
    vector<ll> prefix1, prefix2, power1, power2;

    ArrayHash(vector<ll> input, ll base1 = 911382629, ll base2 = 357142857,
              ll mod1 = 1e9+7, ll mod2 = 1e9+9)
        : arr(input), omega1(base1), omega2(base2), mod1(mod1), mod2(mod2){
        build();
    }

    void build(){
        int n = arr.size();
        prefix1.assign(n+1,0);
        prefix2.assign(n+1,0);
        power1.assign(n+1,1);
        power2.assign(n+1,1);

        for (int i=0; i<n; i++){
            power1[i+1] = (power1[i]*omega1)%mod1;
            power2[i+1] = (power2[i]*omega2)%mod2;
            prefix1[i+1] = (prefix1[i]*omega1+arr[i])%mod1;
            prefix2[i+1] = (prefix2[i]*omega2+arr[i])%mod2;
        }
    }

    pair<ll, ll> get_hash(int l, int r){
        ll hash1 = (prefix1[r+1]-prefix1[l]*power1[r-l+1])%mod1;
        ll hash2 = (prefix2[r+1]-prefix2[l]*power2[r-l+1])%mod2;
        if (hash1<0) hash1 += mod1;
        if (hash2<0) hash2 += mod2;
        return {hash1,hash2};
    }

    pair<ll, ll> hash_vector(vector<ll>& vec){
        ll h1 = 0, h2 = 0;
        for (ll x : vec){
            h1 = (h1*omega1+x)%mod1;
            h2 = (h2*omega2+x)%mod2;
        }
        return {h1,h2};
    }
};

class Solution {
    
public:
    int smallestUniqueSubarray(vector<int>& nums) {
        int n = nums.size();
        vector<ll> vec(n);
        for(int i=0; i<n; i++) vec[i] = nums[i];
        
        ArrayHash h1(vec);

        ll lo = 1, hi = n; //length of subarray
        ll mid;
    
        while(lo<hi){
            mid = (lo+hi)/2;
            bool check = false;
            map<pair<ll,ll>,ll> mp;

            for(int i=mid-1; i<n; i++){
                //i-(mid-1) to i
                pair<ll,ll> p = h1.get_hash(i-(mid-1),i);
                int cnt = ++mp[p];
            }
            for(auto& x: mp){
                if(x.second==1){
                    check = true;break;
                }
            }

            if(check){
                hi = mid;
            }else{
                lo = mid+1;
            }
        }
        

        return lo;
    }
};
