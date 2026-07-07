class Solution {
    public long sumAndMultiply(int n) {
        if(n<=0)return 0;
        long no=0,sum=0,len=1;
        while(n>0){
            int rem=n%10;
            if(rem==0){
                n/=10;
                continue;
            }
            no=rem*len+no;
            len*=10;;
            sum+=rem;
            n/=10;
        }
        return no*sum;
    }
}
