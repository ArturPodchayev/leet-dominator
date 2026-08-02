class Solution {
    public int countTestedDevices(int[] batteryPercentages) {
        int count=0;
        int dec=0;

        for(int x:batteryPercentages){
            int per=Math.max(0,x-dec);
            if(per>0){
                count++;
                dec++;
            }
        }

        return count;
    }
}
