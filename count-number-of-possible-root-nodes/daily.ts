const A_CHARCODE = 97;
const ALPHABET_LENGTH = 26;

function smallestSubsequence(str: string): string {
    const lastIndexes: number[] = Array.from({ length: ALPHABET_LENGTH }, () => -1);

    for (let i = 0; i < str.length; i++) {
        const index = str[i].charCodeAt(0) - A_CHARCODE;
        lastIndexes[index] = i;
    }

    const seen: boolean[] = Array.from({ length: ALPHABET_LENGTH }, () => false);

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = char.charCodeAt(0) - A_CHARCODE;

        if (seen[index]) {
            continue;
        }

        while (
            stack.length &&
            stack.at(-1) > char &&
            lastIndexes[stack.at(-1).charCodeAt(0) - A_CHARCODE] > i
        ) {
            const char = stack.pop();
            seen[char.charCodeAt(0) - A_CHARCODE] = false;
        }

        seen[index] = true;
        stack.push(char);
    }

    return stack.join('');
};
