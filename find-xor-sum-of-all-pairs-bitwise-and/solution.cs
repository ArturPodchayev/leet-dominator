public class Solution {
    public int GetXORSum(int[] arr1, int[] arr2) {
        int a=0;
        foreach(var x in arr1){
            a^=x;
        }
        int b=0;
        foreach(var y in arr2){
            b^=y;
        }
        return (a&b);
        
    }
}
