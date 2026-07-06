class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        int n=intervals.size();
        sort(intervals.begin(),intervals.end(),
        [](vector<int>&a,vector<int>&b){
            if(a[0]==b[0])
            return a[1]>b[1];
            return a[0]<b[0];
        });
        int maxiiend=intervals[0][1];
        int cnt=1;
        for(int i=1;i<n;i++){
            if(intervals[i][1]> maxiiend){
                maxiiend=intervals[i][1]; //no overlap
                cnt++;
            }
        }
        return cnt;
    }
};
