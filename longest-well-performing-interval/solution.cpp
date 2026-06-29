class Solution {
public:
    int longestWPI(vector<int>& hours) {
        int n = hours.size(); 
        unordered_map<int,int> mp; 
        int prefix = 0; 
        int maxi = 0; 

        for(int i=0; i<n; i++){
            if(hours[i] > 8) prefix += 1; 
            if(hours[i] <= 8) prefix -= 1; 
            if(prefix > 0) maxi = i+1; 

            if(mp.find(prefix) == mp.end()){
                mp[prefix] = i; 
            }

            if(mp.find(prefix-1) != mp.end()){
                maxi = max(maxi , i-mp[prefix-1]); 
            }
        }
        return maxi; 
    }
};
