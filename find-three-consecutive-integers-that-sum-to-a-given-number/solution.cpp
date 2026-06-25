class Solution {
public:
    vector<long long> sumOfThree(long long num) {
        if(num % 3 != 0){
            return {};a
        }
        long long middle = num / 3;
        return {middle - 1, middle, middle +1};
    }
};
