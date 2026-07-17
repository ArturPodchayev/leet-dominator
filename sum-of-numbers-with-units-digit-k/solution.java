class Solution {
    public int minimumNumbers(int num, int k) {
        if (num == 0) return 0;

        for (int cnt = 1; cnt <= num; cnt++) {
            if ((cnt * k) % 10 == num % 10 && cnt * k <= num) {
                return cnt;
            }
        }
        return -1;
    }
}
