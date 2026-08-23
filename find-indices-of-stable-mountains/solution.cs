public class Solution {
    public IList<int> StableMountains(int[] height, int threshold) {
        List<int> a=new List<int>();
        for(int i=1;i<height.Length;i++)
        {
            if(height[i-1]>threshold && height[i-1]!=0)
            {
                a.Add(i);
            }
        }
        return a.ToArray();
    }
}
