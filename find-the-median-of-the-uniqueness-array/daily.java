class Solution {

    public String evaluate(String s, List<List<String>> knowledge) {

        StringBuilder res = new StringBuilder();

        // Store key-value pairs in HashMap
        HashMap<String, String> map = new HashMap<>();

        for (List<String> pair : knowledge) {
            map.put(pair.get(0), pair.get(1));
        }

        // Traverse the string
        for (int i = 0; i < s.length(); i++) {

            // If we find an opening bracket
            if (s.charAt(i) == '(') {

                // Find the closing bracket
                int closingIndex = s.indexOf(')', i + 1);

                // Extract the key
                String key = s.substring(i + 1, closingIndex);

                // Add value if key exists, otherwise add '?'
                res.append(map.getOrDefault(key, "?"));

                // Skip everything until ')'
                i = closingIndex;
            }

            // Normal character
            else {
                res.append(s.charAt(i));
            }
        }

        return res.toString();
    }
}
