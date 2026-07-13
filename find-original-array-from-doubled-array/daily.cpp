class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        vector<int>res;
        for(int len=2;len<=9;len++){
            for(int i=1;i+len-1<=9;i++){
                int dig = 0;
                for(int j=i;j<i+len;j++){
                    dig = dig*10+j;
                }
                if(dig>=low && dig <= high)
                    res.push_back(dig);
            }
        }
        return res;
    }
};
