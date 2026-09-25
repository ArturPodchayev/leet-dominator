class Solution {
    public int maximumTastiness(int[] price, int k) {
        Arrays.sort(price);
        int left = 0;
        int right = Integer.MAX_VALUE;
        int m = price.length;
        while(left < right){
            int mid = right - (right - left) / 2;
            if(count(price, mid, k)){
                left = mid;
            }
            else{
                right = mid - 1;
            }
        }
        return left;
    }
    private boolean count(int[] price, int diff, int k){
        int num = 1; 
        for(int i = 0; i < price.length; i++){
            int j = i + 1;
            while(j < price.length && price[j] - price[i] < diff){
                j++;
            }
            if(j == price.length){
                break;
            }
            else{
                num++;
                i = j - 1;
            }
            if(num >= k){
                return true;
            }
        }
        return false;
    }
}
