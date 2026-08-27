class Solution {
    public String lexGreaterPermutation(String s, String target) {
        int n = s.length();

        int[] freq = new int[26];

        for (char ch : s.toCharArray()) {
            freq[ch - 'a']++;
        }

        for (int i = 0; i < n; i++) {
            freq[target.charAt(i) - 'a']--;
        }

        for (int i = n - 1; i >= 0; i--) {
            int idx = target.charAt(i) - 'a';

            freq[idx]++;

            boolean valid = true;

            for (int j = 0; j < 26; j++) {
                if (freq[j] < 0) {
                    valid = false;
                    break;
                }
            }

            if (!valid) {
                continue;
            }

            for (int j = idx + 1; j < 26; j++) {
                if (freq[j] > 0) {
                    StringBuilder ans = new StringBuilder();

                    ans.append(target, 0, i);
                    ans.append((char) ('a' + j));

                    freq[j]--;

                    for (int k = 0; k < 26; k++) {
                        while (freq[k] > 0) {
                            ans.append((char) ('a' + k));
                            freq[k]--;
                        }
                    }

                    return ans.toString();
                }
            }
        }

        return "";
    }
}
