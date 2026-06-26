public class Solution {
    public int SumOfUnique(int[] arr) {
       //int sum = arr.GroupBy(x => x).Where(g => g.Count() == 1).Select(g => g.Key).Sum();
//return sum; 

 Dictionary<int, int> d = new Dictionary<int, int>();
 int sum = 0;

 foreach( var item in arr)
 {
     if (d.ContainsKey(item))
     {
         d[item] += 1;
     }
     else
     {
         d[item] = 1;
     }
 }
 foreach( var item in d)
 {
     if (item.Value == 1)
         sum += item.Key;
 }
 return sum;

    }
}
