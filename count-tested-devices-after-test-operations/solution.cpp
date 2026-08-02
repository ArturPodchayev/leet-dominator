class Solution {
public:
    int countTestedDevices(vector<int>& batteryPercentages) {
        int cnt = 0;
        for(int testit : batteryPercentages)
            if(testit > cnt)
                ++cnt;
        return cnt;
    }
};
