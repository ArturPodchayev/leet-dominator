class Solution {
public:
    int func(int i,int maxfreq,vector<int>&arr,map<pair<int,int>,int>&dp,int count){
        if(i==arr.size())return 0;
        if(count>maxfreq)count=maxfreq;
        pair<int,int>key={i,count};
        if(dp.count(key))return dp[key];
        int ans=INT_MAX/4;
        ans=min(ans,arr[i]+func(i+1,maxfreq,arr,dp,arr[i]));
        if(arr[i]>maxfreq){
            ans=min(ans,arr[i]-maxfreq+func(i+1,maxfreq,arr,dp,arr[i]-maxfreq));
        }
        if(arr[i]<=maxfreq){
             if(arr[i]+count>=maxfreq)ans=min(ans,func(i+1,maxfreq,arr,dp,0));
             else ans=min(ans,maxfreq-arr[i]-count+func(i+1,maxfreq,arr,dp,0));
        }
        return dp[key]=ans;
    }
    int makeStringGood(string s) {
        vector<int>arr(26,0);
        int n=s.size();
        for(int i=0;i<n;i++){
            arr[s[i]-'a']++;
        }
        int maxfreq=0;
        for(int i=0;i<26;i++){
            maxfreq=max(arr[i],maxfreq);
        }
        int ans=INT_MAX;
        for(int i=1;i<=maxfreq;i++){
          map<pair<int,int>,int>dp;
          ans=min(ans,func(0,i,arr,dp,0));
        }
        return ans;
    }
};
