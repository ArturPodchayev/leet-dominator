class Solution {
public:
    int earliestFinishTime(vector<int>& landStartTime, vector<int>& landDuration, vector<int>& waterStartTime, vector<int>& waterDuration) 
    {
        return min(
            quick(landStartTime,landDuration,waterStartTime,waterDuration),
            quick(waterStartTime,waterDuration,landStartTime,landDuration)
        );
    }
    int quick(vector<int>& ls, vector<int>& ld, vector<int>& ws, vector<int>& wd)
    {
        int mini = INT_MAX;
        for(int i=0;i<ls.size();i++)
        {
            mini = min(mini,ls[i]+ld[i]);
        }
        int ans = INT_MAX;
        for(int i=0;i<ws.size();i++)
        {
            ans = min(ans,max(mini,ws[i])+wd[i]);
        }
        return ans;
    }
//please upvote...
};
