class Solution {
public:
    long long minCost(vector<int>& arr, vector<int>& brr, long long k) {
        int n = arr.size();
        long long cost = 0;
        if(arr == brr) return cost;
        long long minCost = 0;
        for(int i=0; i<n; i++){
            minCost += abs(arr[i] - brr[i]);
        }
        sort(arr.begin(),arr.end());
        sort(brr.begin(),brr.end());
   
        for(int i=0; i<n; i++){
            cost += abs(arr[i] - brr[i]);
        }
        return min(minCost,cost+k);
    }
};
