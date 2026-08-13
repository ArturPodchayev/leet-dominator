class Solution {
private:
    string binary(int n){
        if(n==0){
            return "0";
        }
        string bin = "";
        while(n>0){
            bin += char('0'+ (n%2));
            n /= 2;
        }
        reverse(bin.begin(),bin.end());
        return bin;
    }
    bool checkpali(string s){
        int l = 0, r = s.size()-1;
        while(l<r){
            if(s[l]!=s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    int nearestval(int x, vector<int>&allpossible){
        int l=0, r= allpossible.size()-1;
        int best = allpossible[0];

        while(l<=r){
            int mid = (l+r)/2;

            if(abs(allpossible[mid]-x) < abs(best-x)){
                best = allpossible[mid];
            }
            if(allpossible[mid]<x){
                l=mid+1;
            }
            else{
                r = mid-1;
            }
        }

        return best;
    }    
public:
    vector<int> minOperations(vector<int>& nums) {
        // sort(nums.begin(),nums.end());
        vector<int>allpossible;
        for(int i=1;i<5000;i++){
            string ss = binary(i);
            if(checkpali(ss)){
                allpossible.push_back(i);
            }
        }
        vector<int>res;
        for(int num : nums){
            int val = nearestval(num,allpossible);
            res.push_back(abs(num-val));
        }
        return res;

    }
};
