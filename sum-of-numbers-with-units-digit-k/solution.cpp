class Solution {
public:
    int minimumNumbers(int num, int k) {
        if (num == 0) {
            return 0; // If the target number is 0, return 0 directly
        }

        // Precomputed unit digits of multiples for each digit (0-9)
        vector<string> multiples = {
            "0",            // k = 0
            "1234567890",   // k = 1
            "24680",        // k = 2
            "3692581470",   // k = 3
            "48260",        // k = 4
            "50",           // k = 5
            "62840",        // k = 6
            "7418529630",   // k = 7
            "86420",        // k = 8
            "9876543210"    // k = 9
        };

        // Get the last digit of the target number
        char lastDigit = (num % 10) + '0';

        // Find the position of the last digit in the precomputed multiples for digit k
        int position = multiples[k].find(lastDigit) + 1;

        // If the position is zero or k * position > num, it's not possible
        if (position == 0 || k * position > num) {
            return -1;
        }

        // Return the number of elements required
        return position;
    }
};
