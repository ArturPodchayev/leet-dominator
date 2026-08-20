public class Solution {
    public int[] ResultArray(int[] nums) {
        List<int> arr1 = new List<int>();
        List<int> arr2 = new List<int>();

        int p = 0;
        bool checkLastElement = false;
        while(p < nums.Length)
        {

            if(checkLastElement)
            {
                if(arr1[arr1.Count() - 1] > arr2[arr2.Count() - 1])
                {
                    arr1.Add(nums[p]);
                }
                else
                {
                    arr2.Add(nums[p]);
                }
            }
            else
            {
                if(p % 2 == 0)
                {
                    arr1.Add(nums[p]);
                }
                else
                {   
                    arr2.Add(nums[p]);
                    checkLastElement = true;
                }
            }


            p++;
        }

         return arr1.Concat(arr2).ToArray();


    }
}
