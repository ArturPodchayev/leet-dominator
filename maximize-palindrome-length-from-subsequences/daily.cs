public class Solution {
    public long SumAndMultiply(int n) {
        int x = 0;
        int sum = 0;

        while (n > 0){
            int r = n % 10;
            n = n/10;
            if(n > 0 && r != 0) {
                x += r;
                x *= 10;
            } else {
                x += r;
            }

            sum += r;
        }

        int v = 0;

        while (x > 0) {
            int r = x % 10;
            x = x/10;

            if(x > 0 && r != 0) {
                v += r;
                v *= 10;
            } else {
                v += r;
            }
        }

        return (long) v * sum;
    }
}
