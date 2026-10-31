class Solution {
    public long minCost(int[] arr, int[] brr, long k) {
        long a=0;
        for(int i=0;i<arr.length;i++)
            a+=Math.abs(arr[i]-brr[i]);
        
        Arrays.sort(arr);
        Arrays.sort(brr);

        for(int i=0;i<arr.length;i++)
            k+=Math.abs(arr[i]-brr[i]);


        return a<k?a:k;
    }


}
