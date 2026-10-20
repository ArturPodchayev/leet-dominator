class Solution {
public:
    int sortableIntegers(vector<int>& nums) {
        int n = nums.size();
        bool isPossible =false;
        bool isMatch = false;
        int j =0;
        int ans =0;
        int prevMax = INT_MIN;

        for(int k =1; k <=n ; k++){
            prevMax = INT_MIN;
            if(n%k!=0){
                continue;
            }
            //valid divisor
            isPossible = true;
            for(int i = 0; i < n ; i += k){
                int count =0;
                int mn = INT_MAX;
                int mx = INT_MIN;
                
                 for( j =i; j < i+k ; j++){

                    mn = min(mn,nums[j]);
                    mx = max(mx,nums[j]);

                        if(j<i+k-1 && nums[j]>nums[j+1]){
                            count++;
                        }
                 }
                  if(nums[i+k-1]>nums[i]){
                            count++;
                        }

                  if(count>1 || prevMax >mn){
                    isPossible = false;
                    break;
                  }

                  prevMax = mx;
                 
        }

        if(isPossible){
            ans += k;
        }
        
    }
    return ans;
  }
};
