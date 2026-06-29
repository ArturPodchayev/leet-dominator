class Solution {
    public int longestWPI(int[] hours) {
        Map<Integer,Integer> map = new HashMap<>();
        int sum = 0;
        int maxLen = 0;
        for(int i = 0; i < hours.length; i++) {
            if(hours[i] > 8) 
                sum += 1;
            else
                sum -= 1;
            
            if(sum > 0) {
                maxLen = i + 1;
            }
            else {
                if(map.containsKey(sum - 1)) {
                    maxLen = Math.max(maxLen, i - map.get(sum - 1));
                }
            }
            map.putIfAbsent(sum, i);
        }
        return maxLen;
    }
}
