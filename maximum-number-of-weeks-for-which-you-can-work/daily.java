class Solution {

    public String lexPalindromicPermutation(String s, String target) {

        int n = s.length();
        int half = n / 2;

        // Count characters
        int[] count = new int[26];

        for (char ch : s.toCharArray()) {
            count[ch - 'a']++;
        }

        // Find odd-frequency characters
        int oddCount = 0;
        int middle = -1;

        for (int i = 0; i < 26; i++) {

            if (count[i] % 2 == 1) {
                oddCount++;
                middle = i;
            }
        }

        // A palindrome can have at most one odd character
        if (oddCount > 1) {
            return "";
        }

        // Build character counts for the first half
        int[] halfCount = new int[26];

        for (int i = 0; i < 26; i++) {
            halfCount[i] = count[i] / 2;
        }

        /*
         * Try to use target's first half directly.
         */
        String targetHalf = target.substring(0, half);

        int[] remaining = halfCount.clone();
        boolean possible = true;

        for (int i = 0; i < half; i++) {

            int ch = targetHalf.charAt(i) - 'a';

            remaining[ch]--;

            if (remaining[ch] < 0) {
                possible = false;
                break;
            }
        }

        // If target's first half is possible,
        // construct the palindrome.
        if (possible) {

            String palindrome = makePalindrome(
                targetHalf,
                middle
            );

            if (palindrome.compareTo(target) > 0) {
                return palindrome;
            }
        }

        /*
         * Find the smallest first half
         * that is greater than targetHalf.
         */
        for (int i = half - 1; i >= 0; i--) {

            int[] temp = halfCount.clone();

            // Use the same prefix as target
            boolean valid = true;

            for (int j = 0; j < i; j++) {

                int ch = targetHalf.charAt(j) - 'a';

                temp[ch]--;

                if (temp[ch] < 0) {
                    valid = false;
                    break;
                }
            }

            if (!valid) {
                continue;
            }

            // Try a character bigger than target[i]
            int current = targetHalf.charAt(i) - 'a';

            for (int ch = current + 1; ch < 26; ch++) {

                if (temp[ch] > 0) {

                    temp[ch]--;

                    StringBuilder firstHalf = new StringBuilder();

                    // Same prefix
                    firstHalf.append(targetHalf.substring(0, i));

                    // Put the next bigger character
                    firstHalf.append((char) ('a' + ch));

                    // Fill remaining characters
                    // in smallest lexicographical order
                    for (int k = 0; k < 26; k++) {

                        while (temp[k] > 0) {
                            firstHalf.append((char) ('a' + k));
                            temp[k]--;
                        }
                    }

                    // Build complete palindrome
                    return makePalindrome(
                        firstHalf.toString(),
                        middle
                    );
                }
            }
        }

        return "";
    }

    // Create palindrome from the first half
    private String makePalindrome(String half, int middle) {

        StringBuilder result = new StringBuilder();

        // First half
        result.append(half);

        // Middle character for odd length
        if (middle != -1) {
            result.append((char) ('a' + middle));
        }

        // Reverse of first half
        for (int i = half.length() - 1; i >= 0; i--) {
            result.append(half.charAt(i));
        }

        return result.toString();
    }
}
