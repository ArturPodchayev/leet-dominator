class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        vector<int>odd , even;
        for(int i=0;i<nums.size();i++){
            if(i%2==0) even.push_back(nums[i]);
            else{
                odd.push_back(nums[i]);
            }
        }
        sort(odd.rbegin() , odd.rend());
        sort(even.begin() , even.end());
        vector<int>ans;
        int i=0 , j=0;
        while(i<even.size() && j<odd.size()){
            ans.push_back(even[i]);
            i++;
            ans.push_back(odd[j]);
j++;
        }
        while(j<odd.size()){
            ans.push_back(odd[j]);
            j++;
        }
        while(i<even.size()){
            ans.push_back(even[i]);
            i++;
        }
        return ans;
    }
};
