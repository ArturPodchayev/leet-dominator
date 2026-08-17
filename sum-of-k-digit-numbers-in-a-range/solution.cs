public class Solution {
    const long m = 1000000000 + 7;    
    public int SumOfNumbers(int l, int r, int k) {
        var s = 0L;
        for (int i = l; i <= r; i++) {
            s += i;
        }
        var q = BinPow(r - l + 1, k - 1);
        var d = Bin111(k);
        var e = (s * q) % m;
        var result = e * d;
        return (int)(result % m);
    }

    static long Bin111(int k) {
        if (k == 1) {
            return 1;
        }
        if (k % 2 == 0) {
            var a = Bin111(k / 2);
            var d = BinPow(10, k / 2);
            var r = ((a * d) % m + a) % m;
            return r;
        } else {
            var a = Bin111(k - 1);            
            var d = BinPow(10, k - 1);
            var r = (a + d) % m;
            return r;
        }
    }
    
    static long BinPow(long a, int n) {
    	var res = 1L;
    	while (n > 0) {
    		if ((n & 1) > 0) {
    			res *= a;
                res %= m;
            }
    		a *= a;
            a %= m;
    		n >>= 1;
    	}
    	return res;
    }    
}
