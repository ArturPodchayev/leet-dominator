class Solution {
    public boolean checkDivisibility(int n) {
        int x = n;
        int sum = 0, mul = 1;

        while(x!=0){
            sum += x%10;
            mul *= x%10;
            x /= 10;
        }
        int res = sum + mul;

        if(n % res == 0){
            return true;
        }else{
            return false;
        }
    }
}
