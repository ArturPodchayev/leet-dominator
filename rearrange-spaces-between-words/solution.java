class Solution {
    public String reorderSpaces(String text) {
        //Count total spaces
        int totalSpaces = 0;
        for (char c : text.toCharArray()) {
            if (c == ' ') totalSpaces++;
        }

        //Extract words
        String[] words = text.trim().split("\\s+");
        int wordCount = words.length;

        //Handle spacing
        int spacesBetween = 0;
        int extraSpaces = 0;

        if (wordCount > 1) {
            spacesBetween = totalSpaces / (wordCount - 1);
            extraSpaces = totalSpaces % (wordCount - 1);
        } else {
            // If only one word, all spaces go to the end
            extraSpaces = totalSpaces;
        }

        // Join words with equal spaces
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < wordCount; i++) {
            result.append(words[i]);
            if (i < wordCount - 1) {
                result.append(" ".repeat(spacesBetween));
            }
        }

        // Add extra spaces at the end
        result.append(" ".repeat(extraSpaces));

        return result.toString();
    }
}
