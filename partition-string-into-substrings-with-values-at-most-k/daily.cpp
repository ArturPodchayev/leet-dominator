class Solution {
public:
    bool checkDivisibility(int n) {
        int sum = 0;
        int x = n;
        while (x > 0) {
            sum += x % 10;
            x /= 10;
        }
        int mul = 1;
        x = n;
        while (x > 0) {
            mul *= x % 10;
            x /= 10;
        }

        return n % (sum + mul) == 0 ? true : false;
    }
};
