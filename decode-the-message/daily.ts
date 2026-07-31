const BUTTONS_COUNT = 8;

function minimumPushes(word: string): number {
    const count = Array.from({ length: 26 }, () => 0);

    for (const char of word) {
        count[getIndex(char)]++;
    }

    count.sort((a, b) => b - a);

    let pushesCount = 0;
    for (let i = 0; i < count.length; i++) {
        const freq = count[i];
        const multiplier = Math.ceil((i + 1) / BUTTONS_COUNT);

        pushesCount += freq * multiplier;
    }

    return pushesCount;
};

function getIndex(char: string): number {
    return char.charCodeAt(0) - 97;
}
