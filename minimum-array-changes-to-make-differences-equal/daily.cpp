class Solution {
public:
    bool canAliceWin(int n) {
        int x = 10;
        bool alice = true;

        while (n > 0) {
            n -= x;

            if (n < 0) return !alice;
            if (n == 0) return alice;

            alice = !alice;
            x--;
        }

        return false;
    }
};
