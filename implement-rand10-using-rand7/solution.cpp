class Solution {
public:
    int rand10() {
        int result;
        do {
            int row = rand7();
            int col = rand7();
            result = (row - 1) * 7 + col;
        } while (result > 40);

        return (result - 1) % 10 + 1;
    }
};
