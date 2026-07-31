class Solution {
    public String decodeMessage(String key, String message) {
        char[] map = new char[26];
        boolean[] seen = new boolean[26];
        char[] chars = message.toCharArray();
        char current = 'a';

        for (char ch : key.toCharArray()) {
            if (ch != ' ' && !seen[ch - 'a']) {
                map[ch - 'a'] = current++;
                seen[ch - 'a'] = true;
            }
        }

        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != ' ') {
                chars[i] = map[chars[i] - 'a'];
            }
        }

        return new String(chars);
    }
}
