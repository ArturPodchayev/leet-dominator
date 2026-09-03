public class Solution {
      public static int DigitSum(int n)
        {
            int rem , sum = 0;
            while(n>0)
            {
                rem =n% 10;
                sum +=rem;
                n  /= 10;
            }
            return sum;
        }
        public static int TotalSum(int[] a)
        {
            int sum = 0;
            foreach(int i in a)
            {
                sum += i;
            }
            return sum;
        }
      
    public int DifferenceOfSum(int[] a) {
        int n=a.Length;
         int sum = 0;
            for(int i=0;i<n;i++)
            {
                sum += DigitSum(a[i]);
            }
        return Math.Abs(TotalSum(a)-sum);
    }
}
