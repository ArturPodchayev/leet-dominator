class Solution {
    public boolean reportSpam(String[] message, String[] bannedWords) {
        Set<String> set = new HashSet<>();
        for (String banned : bannedWords) {
            set.add(banned);
        }
        int count = 0;
        for (String word : message) {
            if (set.contains(word)) {
                count++;
                if (count == 2) return true;
            }
        }
        return false;
    }
}
