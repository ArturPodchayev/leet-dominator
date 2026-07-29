class Solution {
    private String buildPalindrome(String half, char mid) {
        StringBuilder rev = new StringBuilder(half).reverse();

        if (mid == '#')
            return half + rev;

        return half + mid + rev;
    }

    public String smallestPalindromicRearrangement(String s, int k) {
        int[] freq = new int[26];

        for (char c : s.toCharArray())
            freq[c - 'a']++;

        StringBuilder half = new StringBuilder();
        char mid = '#';

        for (int i = 0; i < 26; i++) {
            if ((freq[i] & 1) == 1)
                mid = (char) ('a' + i);

            for (int j = 0; j < freq[i] / 2; j++)
                half.append((char) ('a' + i));
        }

        char[] arr = half.toString().toCharArray();
        Arrays.sort(arr);

        int count = 1;

        do {
            if (count == k)
                return buildPalindrome(new String(arr), mid);

            count++;
        } while (nextPermutation(arr));

        return "";
    }

    private boolean nextPermutation(char[] arr) {
        int i = arr.length - 2;

        while (i >= 0 && arr[i] >= arr[i + 1])
            i--;

        if (i < 0)
            return false;

        int j = arr.length - 1;

        while (arr[j] <= arr[i])
            j--;

        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        for (int l = i + 1, r = arr.length - 1; l < r; l++, r--) {
            temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
        }

        return true;
    }
}
