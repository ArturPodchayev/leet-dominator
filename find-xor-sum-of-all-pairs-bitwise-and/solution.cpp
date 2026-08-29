class Solution {
public:
    int getXORSum(vector<int>& arr1, vector<int>& arr2) {
        int y = 0;

        for (int x : arr2) {
            y ^= x;
        }

        int ans = 0;

        for (int x : arr1) {
            ans ^= (x & y);
        }

        return ans;
    }
};
