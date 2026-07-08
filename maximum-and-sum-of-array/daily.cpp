class Solution {
public:
    int mod = 1e9 + 7;
    int pow_10(long long a,long long b){
        long long n = 1;
        while(b){
            if(b&1){
                n *= a;
                n %= mod;
                b--;
            }
            a *= a;
            a %= mod;

            b /= 2;
        }
        return n % mod;
    }
    int get_rem(long long a, long long b,int l_a ,int l_b){
        
        int p = pow_10(10,l_b - l_a);
        long long ans = ((b-(a*p))%mod +mod)%mod;
        return ans;
    }
    vector<int> sumAndMultiply(string s, vector<vector<int>>& queries) {
        int n = s.size();
        vector<int> prev_digits(n);
        vector<int> pre_sum(n,0);
        vector<int> len(n,0);

        pre_sum[0] = s[0] - '0';
        prev_digits[0] = s[0] - '0';
        len[0] = s[0] == '0' ? 0 : 1;

        for(int i = 1 ;i < n; i++){
            int d = s[i] - '0';
            pre_sum[i] = d + pre_sum[i-1];
            if(d != 0){
                prev_digits[i] = (1LL*prev_digits[i-1]*10 + d)%mod;
                len[i] = len[i-1] + 1;
            }
            else{
                len[i] = len[i-1];
                prev_digits[i] = prev_digits[i-1];
            } 
        }

        vector<int> ans(queries.size());
        for(int i = 0; i < queries.size() ;i++){
            int l = queries[i][0];
            int r = queries[i][1];

            int sum = pre_sum[r];
            if(l-1 >= 0) sum -= pre_sum[l-1];

            int mul = l-1 >= 0 ? get_rem(prev_digits[l-1] ,prev_digits[r],len[l-1] ,len[r]) : get_rem(0,prev_digits[r],0,len[r]) ;

            ans[i] = (1LL * mul * sum)%mod;
        }
        return ans;
    }
};
