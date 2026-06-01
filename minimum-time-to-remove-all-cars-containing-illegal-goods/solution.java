class Solution {
    public int minimumTime(String s) {
        int len = s.length();
        
        if (s.length() == 1) {
            return s.charAt(0) == '1' ? 1 : 0;
        }

        int[] dp1 = new int[len];
        int[] dp2 = new int[len];
        
        for (int i = 0; i < len; i ++) {
            if (s.charAt(i) == '0') {
                dp1[i] = (i > 0 ? dp1[i-1] : 0);
            } else {
                if (i > 0) {
                    dp1[i] = Math.min(i + 1, dp1[i - 1] + 2);
                } else {
                    dp1[i] = i + 1;
                }
            }
        }

        for (int i = len - 1; i >= 0; i --) {
            if (s.charAt(i) == '0') {
                dp2[i] = (i < len - 1 ? dp2[i+1] : 0);
            } else {
                
                if (i < len - 1) {
                    dp2[i] = Math.min(len - i, dp2[i + 1] + 2);
                } else {
                    dp2[i] = len - i;
                }
            }
        }
        
        int res = Integer.MAX_VALUE;
        for (int i = 0; i < len - 1; i ++) {
            res = Math.min(res, dp1[i] + dp2[i + 1]);
        }
        
        return res;
    }
}
