class Solution {
    public void prefix(int arr[]){
        int n = arr.length;
        for(int i=1;i<n;i++){
            arr[i] = (arr[i-1]+arr[i])%1000000007;
        }
    }
    public int valueAfterKSeconds(int n, int k) {
        int arr[] = new int[n];
        java.util.Arrays.fill(arr, 1); 
        for(int i=0;i<k;i++){
            prefix(arr);
        }
        return arr[n-1];
    }
}
