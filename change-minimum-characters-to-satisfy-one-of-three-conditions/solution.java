class Solution {
    public int minCharacters(String strA, String strB) {
        int lenA = strA.length();
        int lenB = strB.length();
        int[] freqA = new int[26];
        int[] freqB = new int[26];
        int highestFreqA = 0;
        int highestFreqB = 0;
        int minimumChanges = Integer.MAX_VALUE;
        
        for (int i = 0; i < lenA; i++) {
            int charIdx = strA.charAt(i) - 'a';
            freqA[charIdx]++;
            highestFreqA = Math.max(highestFreqA, freqA[charIdx]);
        }

        for (int i = 0; i < lenB; i++) {
            int charIdx = strB.charAt(i) - 'a';
            freqB[charIdx]++;
            highestFreqB = Math.max(highestFreqB, freqB[charIdx]);
        }

        minimumChanges = Math.min(minimumChanges, lenA + lenB - highestFreqA - highestFreqB);

        for (int i = 1; i < 26; i++) {
            freqA[i] += freqA[i - 1];
            freqB[i] += freqB[i - 1];
        }

        for (int i = 0; i < 25; i++) {
            minimumChanges = Math.min(lenA - freqA[i] + freqB[i], minimumChanges);
            minimumChanges = Math.min(lenB - freqB[i] + freqA[i], minimumChanges);
        }

        return minimumChanges;
    }
}
