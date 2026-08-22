public class Solution {
    public bool CheckDivisibility(int n) {
        int sum = 0;
        int product = 1;
        int number = n;

        while(number > 0){
            int digit = number % 10;

            sum += digit;
            product *= digit;

            number /= 10;
        }

        return (n % (sum + product)) == 0;
    }
}
