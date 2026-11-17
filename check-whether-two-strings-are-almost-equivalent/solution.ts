function checkAlmostEquivalent(word1: string, word2: string): boolean {
      const countWord1: Record<string, number> = {};
    const countWord2: Record<string, number> = {};

    for (const char of word1) {
      countWord1[char] = (countWord1[char] || 0) + 1;
    }

    for (const char of word2) {
      countWord2[char] = (countWord2[char] || 0) + 1;
    }

    const keys = new Set([...Object.keys(countWord1), ...Object.keys(countWord2)]);

    for (let key of keys) {
      const val1 = countWord1[key] || 0;
      const val2 = countWord2[key] || 0;
  
      if (Math.abs(val1 - val2) > 3) {
        return false;
      }
    }
  
    return true; 
};

/*
Implemented earlier learnings from chatGPT to form frequency objects.
Then chatGPT further thought me new things to wrap up project in my own logic style
*/
