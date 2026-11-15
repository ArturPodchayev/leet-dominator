class Solution {
    int M = 1000000007;
    public int numOfSubarrays(int[] arr) {
        int result = 0;
        int even = 1;
        int odd = 0;
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
            if(sum % 2 == 0){
                result = (result + odd) % M;
                even++;
            }else{
                result = (result + even) % M;
                odd++;
            }
        }
        return result;
    }
}
