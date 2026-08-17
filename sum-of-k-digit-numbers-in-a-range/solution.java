class Solution {
    public int mod=1000000007;
    public long pow(long a,long b){
        long ans=1;
        while(b>0){
            if((b&1)==1) ans=ans*a%mod;
            a=a*a%mod;
            b>>=1;
        }
        return ans;
    }
    public int sumOfNumbers(int l, int r, int k) {
        // for i=[0...k-1] -> sum pow(10,i)*(l+(l+1)+...+r)*pow(r-l+1,k-1)
        // sumLtoR*pow(r-l+1,k-1)*(10^0 + 10^1 + 10^2 + ... + 10^(k-1))
        // sumLtoR*pow(r-l+1,k-1)*(1*(10^k-1)/9)

        long sum=0;
        for(int i=l;i<=r;i++) sum+=i;

        long ans=sum*pow(r-l+1,k-1)%mod;
        ans=ans*(pow(10,k)-1)%mod;
        ans=ans*pow(9,mod-2)%mod;
        return (int)ans;
    }
}
