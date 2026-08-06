class Solution {
public:
    int productOfDigits(int n)
    {
        int mul=1;
        while(n)
        {
            int rem=n%10;
            n/=10;
            mul*=rem;
        }
        return mul;
    }
    int smallestNumber(int n, int t) {
        while(1)
        {
            int product=productOfDigits(n);
            if(product%t==0) return n;
            else n++;
        }
        return -1;
    }
};
