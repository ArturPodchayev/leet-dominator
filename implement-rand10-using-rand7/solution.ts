public class Solution : SolBase {
    public int Rand10() {
       int val1 = 7;

       while(val1 == 7)
       {
            val1 = Rand7();
       }

       val1 %=2; // val1: 1~2
        val1++;
        
       int val2 = 7;
       while(val2 >5) // 1~5
       {
            val2 = Rand7();
       }
     
        val2*=2; // 2, 4, 6, 8, 10

        int sum = val1+val2;
        int mod = sum%10+1;
        return mod;
    }
}
