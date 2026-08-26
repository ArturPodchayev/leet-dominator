class Solution {

    public String shortestBeautifulSubstring(String s, int k) {

        String ans = "";

        HashMap<Integer, Integer> required = new HashMap<>();
        required.put(1, k);

        int start = 0;
        int end;

        for (end = 0; end < s.length(); end++) {

            char c = s.charAt(end);

            if (c == '1' && required.get(1) > 0)
                required.put(1, required.get(1) - 1);

            if (required.get(1) == 0) {

                // Remove unnecessary leading zeros
                while (start < end && s.charAt(start) == '0')
                    start++;

                String temp = s.substring(start, end + 1);

                if (ans.isEmpty())
                    ans = temp;
                else if (ans.length() > temp.length())
                    ans = temp;
                else if (ans.length() == temp.length())
                    ans = lexicographicallySmaller(ans, temp);

                // Remove the first '1' for the next window
                while (start < end) {

                    char cs = s.charAt(start);

                    if (cs == '1') {
                        required.put(1, required.get(1) + 1);
                        start++;
                        break;
                    } else {
                        start++;
                    }
                }
            }
        }

        return ans;
    }

    public String lexicographicallySmaller(String a, String b) {
        if (a.compareTo(b) < 0)
            return a;

        return b;
    }
}
