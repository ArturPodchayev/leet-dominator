class Solution:
    def is_vowel(self, c: str) -> bool:
        if c == "a" or c == "e" or c == "i" or c == "o" or c == "u":
            return True
        return False

    def countOfSubstrings(self, word: str, k: int) -> int:
        vowels = defaultdict(int)
        consonants = defaultdict(int)
        n = len(word)
        n_subs = 0

        for i in range(0, n - 4 + k):
            vowels.clear()
            consonants.clear()
            for j in range(i, n):
                if self.is_vowel(word[j]):
                    vowels[word[j]] += 1
                else:
                    consonants[word[j]] += 1
                if len(vowels) == 5 and sum(consonants.values()) == k:
                    n_subs += 1

        return n_subs
