class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        unordered_map<int,int> mp;

        for(int i=0; i<arr.size(); i++)
        {
            int rem = arr[i] % k;
            if(rem < 0) rem += k; // rem to be in the range [0, k-1]
            
            if(mp.find((k - rem) % k) != mp.end()) 
            {
                mp[(k - rem) % k]--;
                if(mp[(k - rem) % k] == 0) mp.erase((k - rem) % k);
            }
            else
            {
                mp[rem]++;
            }
        }
        
        if(mp.size() != 0) return false;
        return true;
    }
};
