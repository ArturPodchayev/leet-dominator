class Solution {
public:
    long long maxProduct(vector<int>& nums) {
        int firstMax = INT_MIN;
        int secondMax = INT_MIN;
        int thirdMax = INT_MIN;

        int firstMin = INT_MAX;
        int secondMin = INT_MAX;
        int thirdMin = INT_MAX;


         //read mention below

    
         
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            if (nums[i] > firstMax) {
                thirdMax = secondMax;
                secondMax = firstMax;

                firstMax = nums[i];
            } else if (nums[i] > secondMax) {
                thirdMax = secondMax;
                secondMax = nums[i];
            } else if (nums[i] > thirdMax) {
                thirdMax = nums[i];
            }
            if (nums[i] < firstMin) {
                thirdMin = secondMin;
                secondMin = firstMin;
                firstMin = nums[i];
            } else if (nums[i] < secondMin) {
                thirdMin = secondMin;
                secondMin = nums[i];
            } else if (nums[i] < thirdMin) {
                thirdMin = nums[i];
            }
        }
        
       

<!-- #     **first posible way** -->
        //{1,2,3}

        // (1LL*firstMax * secondMax * 100000LL) 
         //eg:-   (1LL * 3*2*1)
         //only third Max is small so we replace third number

<!-- #     **second posible way** -->
      //{1,2,3,-100}
     // (100000LL*(-1) *firstMax* firstMin)
      //(100000LL*(-1) *3* -100)
     // we choose minus -10*5   2 negative and one positive become pos

<!-- #     **third posible way** -->
      //{1,2,3,-100,-4}
     // (100000LL *secondMin firstMin)
      //(100000LL *-4* -100)
     // we choose 10*5   2 negative and one positive  become pos

        long long ans =
            max((1LL*firstMax * secondMax * 100000LL),
                max((100000LL*(-1) * max(firstMax, secondMin*-1) * firstMin),
                    (100000LL * secondMin * firstMin)));
        return ans;
    }
};
