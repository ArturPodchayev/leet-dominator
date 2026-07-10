public class Solution {
    public int[] SortEvenOdd(int[] nums) {
         List<int> even = new List<int>();
 List<int> odd = new List<int>();
 for(int i = 0; i < nums.Length; i++ )
 {
     if (i % 2 == 0)
     {
         even.Add(nums[i]);
     }
     else
     {
         odd.Add(nums[i]);
     }
 }
 even.Sort();
 odd.Sort();
 int k = 0;
 int[] result = new int[nums.Length];
 for (int i = 0; i < even.Count; i++)
 {
     result[k] = even[i];
     k += 2;
 }
 k = 1;
 for (int i = odd.Count() - 1; i >=0; i--)
 {
     result[k] = odd[i];
     k += 2;
 }
 return result;
    }
}
