function smallestPalindrome(s: string): string {
    const freq = new Map<string, number>();

    // 1. Count character frequencies
    for (let c of s) {
        freq.set(c, (freq.get(c) || 0) + 1);
    }

    let firstHalf = "";
    let middleChar = "";

    // 2. Extract unique characters and sort alphabetically (A-Z)
    const uniqueChars = Array.from(freq.keys()).sort();

    // 3. Build the first half and determine the middle character
    for (const char of uniqueChars) {
        const count = freq.get(char)!;
        
        // Handle odd frequencies
        if (count % 2 !== 0) {
            // A valid palindrome can only have at most one odd-frequency character
            if (middleChar !== "") {
                throw new Error("Cannot form a palindrome from the given string.");
            }
            middleChar = char;
        }
        
        // Append half of the characters to the first half
        const halfCount = Math.floor(count / 2);
        firstHalf += char.repeat(halfCount);
    }

    // 4. Create the second half by reversing the first half
    const secondHalf = firstHalf.split("").reverse().join("");

    // 5. Assemble the 3 pieces into the final palindrome
    return firstHalf + middleChar + secondHalf;
}
