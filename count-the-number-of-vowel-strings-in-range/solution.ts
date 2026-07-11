function vowelStrings(words: string[], left: number, right: number): number {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = left; i <= right; i++) {
      const word = words[i];
      if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
        count++;
      }
    }
    return count;
};
