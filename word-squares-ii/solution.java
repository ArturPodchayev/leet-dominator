class Solution{

public static List<List<String>> wordSquares(String[] words){
	Arrays.sort(words);

	Map<Character, List<String>> firstCharToWords = Arrays.stream(words)
			.collect(Collectors.groupingBy(word -> word.charAt(0)));
	for (char ch = 'a'; ch <= 'z'; ch += 1){
		firstCharToWords.putIfAbsent(ch, new ArrayList<>());
	}

	var result = new ArrayList<List<String>>();

	var wordSet = new HashSet<String>();
	for (String topWord : words){
		wordSet.add(topWord);

		final char topLeftChar = topWord.charAt(0);
		final char topRightChar = topWord.charAt(topWord.length() - 1);

		for (String leftWord : firstCharToWords.get(topLeftChar)){
			if (wordSet.contains(leftWord)){
				continue;
			}

			wordSet.add(leftWord);

			final char bottomLeftChar = leftWord.charAt(leftWord.length() - 1);

			for (String rightWord : firstCharToWords.get(topRightChar)){
				if (wordSet.contains(rightWord)){
					continue;
				}

				wordSet.add(rightWord);

				final char bottomRightChar = rightWord.charAt(rightWord.length() - 1);

				for (String bottomWord : firstCharToWords.get(bottomLeftChar)){
					if (bottomWord.charAt(bottomWord.length() - 1) != bottomRightChar){
						continue;
					}

					if (wordSet.contains(bottomWord)){
						continue;
					}

					result.add(List.of(topWord, leftWord, rightWord, bottomWord));
				}

				wordSet.remove(rightWord);
			}

			wordSet.remove(leftWord);
		}

		wordSet.remove(topWord);
	}

	return result;
}

}
