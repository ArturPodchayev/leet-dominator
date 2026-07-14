class Solution {
public:
    vector<int> getStrongest(vector<int>& arr, int k) {
        int n=arr.size();
        sort(arr.begin(),arr.end());
        int m=arr[(n-1)/2];
        int s=0,e=n-1;
        vector<int>ans;
        while(ans.size()<k){
            if(abs(arr[s]-m)>abs(arr[e]-m)){
                ans.push_back(arr[s]);
                s++;
            }
            else{
                ans.push_back(arr[e]);
                e--;
            }
        }
        return ans;
    }
};
