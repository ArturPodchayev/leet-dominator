function firstPalindrome(words: string[]): string {
    return words.find((word: string) => word === word.split("").reverse().join("")) ?? "";
};
