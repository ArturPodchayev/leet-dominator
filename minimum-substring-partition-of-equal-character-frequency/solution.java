class Solution {
    
    public static boolean isValid(int freq[], int maxFreq) {
        for (int i : freq) {
            if (i != 0 && i != maxFreq) {
                return false;
            }
        }
        return true;
    }

    public int minimumSubstringsInPartition(String s) {
        return helper(s);
    }

    public static int helper(String s) {
        int n = s.length();
        int dp[] = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 1; 

        for (int i = 0; i < n; i++) {
            int freq[] = new int[26];
            int maxFreq = 0;
            for (int j = i; j < n; j++) {
                char currentChar = s.charAt(j);
                freq[currentChar - 'a']++;
                maxFreq = Math.max(maxFreq, freq[currentChar - 'a']);
 
                if (isValid(freq, maxFreq)) {
                    if(i == 0) {
                        dp[j] = 1; 
                    } else {
                        dp[j] = Math.min(dp[j], dp[i - 1] + 1); 
                    }
                }
            }
        }
        return dp[n - 1]; 
    }
}
