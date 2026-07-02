public class Solution {
     public string MakeSmallestPalindrome(string s)
     {
         var result = new StringBuilder(s);

         for (var i = 0; i < s.Length / 2; ++i)
         {
             var leftIndex = i;
             var rightIndex = s.Length - i - 1;

             if (result[leftIndex] == result[rightIndex])
             {
                 continue;
             }

             if (result[leftIndex] < result[rightIndex])
             {
                 result[rightIndex] = result[leftIndex];
             }
             else
             {
                 result[leftIndex] = result[rightIndex];
             }
         }

         return result.ToString();
     }                                                     

}
