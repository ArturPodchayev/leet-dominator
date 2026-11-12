class Solution {
    public boolean isTransformable(String s, String t) {
        int[][] sr = new int[10][10];
        int[][] tr = new int[10][10];
        int[] sc = new int[10];
        int[] tc = new int[10];
        boolean equal = true;
        for (int i = 0; i < s.length(); i++) {
            int ss = s.charAt(i) - '0';
            int tt = t.charAt(i) - '0';
            if (equal) {
                switch (Integer.compare(tt,ss)) {
                    case 1: return false; // cannot produce t > s
                    case -1: equal = false;
                }
            }
            // running frequencies of digits in s & t
            sc[ss]++;
            tc[tt]++;
            // running inversions in s & t
            for (int j = 9; j > ss; j--) sr[ss][j] += sc[j];
            for (int j = 9; j > tt; j--) tr[tt][j] += tc[j];
        }
        for (int i = 0; i < 9; i++) {
            if (sc[i] != tc[i]) return false; // cannot modify digit count
            for (int j = i+1; j <= 9; j++) {
                if (tr[i][j] > sr[i][j]) return false;  // cannot add inversions
            }
        }
        return true;
        
    }
}
