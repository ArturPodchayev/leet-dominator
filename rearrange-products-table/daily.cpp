class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int maxi = 0;
        for(int i = 1; i < gain.size(); i++){
            if(i != 0) gain[i] += gain[i - 1];
            maxi = max(maxi, gain[i]);
        }
        return maxi;
    }
};
