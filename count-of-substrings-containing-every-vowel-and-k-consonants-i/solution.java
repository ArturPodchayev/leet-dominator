class Solution {
    public int countOfSubstrings(String word, int k) {
        char[] ch = word.toCharArray();
        int n = ch.length;
        int[] prev = new int[n];
        int p = -1;
        int res = 0;
        Window w = new Window(k);
        int l = 0;
        for (int i = 0; i < n; i++) {
            prev[i] = p;
            if (!Window.isVowel(ch[i]))
                p = i;

            w.add(ch[i]);
            while (l < ch.length && (w.cons > k || w.isValidAfterRemoving(ch[l]))) {
                w.del(ch[l++]);
            }

            if (w.isValid())
                res += l - prev[l];

        }
        return res;
    }

    public static class Window {
        int k;
        int cons;
        int[] freq = new int[26];
        int vowels;

        public Window(int k) {
            this.k = k;
        }

        void add(char ch) {
            if (isVowel(ch)) {
                if (freq[ch - 'a']++ == 0)
                    vowels++;
            } else
                cons++;
        }

        void del(char ch) {
            if (isVowel(ch)) {
                if (freq[ch - 'a']-- == 1)
                    vowels--;
            } else
                cons--;
        }


        static boolean isVowel(char ch) {
            return ch == 'a' ||
                    ch == 'e' ||
                    ch == 'i' ||
                    ch == 'o' ||
                    ch == 'u';
        }

        boolean isValid() {
            return k == cons && vowels == 5;
        }

        boolean isValidAfterRemoving(char ch) {
            del(ch);
            boolean isValid = isValid();
            add(ch);
            return isValid;
        }

    }
}
