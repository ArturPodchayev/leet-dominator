class Solution {
public:
    int maxActiveSectionsAfterTrade(string s) {
        int n=s.size();
        int ones=0;
        for(int i=0;i<n;i++)if(s[i]=='1') ones++;
        string t="1"+s+"1";
        int m=t.size();
        vector<pair<char,int>> v;
        for(int i=0;i<m;){
            int j=i;
            while(j<m&&t[j]==t[i]) j++;
            v.push_back({t[i],j-i});
            i=j;
        }
        int ans=ones;
        for(int i=1;i+1<(int)v.size();i++){
            if(v[i].first=='1'&&v[i-1].first=='0'&&v[i+1].first=='0'){
                int gain=v[i-1].second+v[i+1].second;
                ans=max(ans,ones+gain);
            }
        }
        return ans;
    }
};
