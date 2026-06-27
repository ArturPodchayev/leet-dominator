#define ll long long
class Solution {
public:
    int maxPossibleScore(vector<int>& start, int d) {
        ll l=0, r=1e12;
        sort(start.begin(), start.end());
        int n = (int)start.size();
        int ans;
        while(l<=r){
            ll m = (l+r)/2;
            ll p = start[0];
            bool ok = true;
            for(int i=1;i<n;i++){
                if(p+m>=start[i] && p+m<=start[i]+d){
                    p+=m;
                } else if(p+m<start[i]){
                    p=start[i];
                } else{
                    ok=false;
                    break;
                }
            }
            if(ok){
                ans = m;
                l=m+1;
            } else {
                r=m-1;
            }
        }
        return ans;
    }
};
