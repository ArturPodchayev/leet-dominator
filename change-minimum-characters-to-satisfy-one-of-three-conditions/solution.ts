function minCharacters(first: string, second: string): number {
    const frequencyFirst = countFrequency(first);
    const frequencySecond = countFrequency(second);

    let minChanges = Number.MAX_SAFE_INTEGER;

    minChanges = Math.min(minChanges,
        minChangesToMakeAllLettersInBothStringsEqual(frequencyFirst, first.length, frequencySecond, second.length));

    minChanges = Math.min(minChanges,
        minChangesToMakeAllLettersInOneStringSmaller(frequencyFirst, frequencySecond));

    minChanges = Math.min(minChanges,
        minChangesToMakeAllLettersInOneStringSmaller(frequencySecond, frequencyFirst));

    return minChanges;
};

function countFrequency(input: string): number[] {
    const frequency = new Array(Util.ALPHABET_SIZE).fill(0);

    for (let i = 0; i < input.length; ++i) {
        ++frequency[input.codePointAt(i) - Util.ASCII_SMALL_CASE_A];
    }
    return frequency;
}

function minChangesToMakeAllLettersInBothStringsEqual(frequencyFirst: number[], lengthFirst: number, frequencySecond: number[], lengthSecond: number): number {
    let minChanges = Number.MAX_SAFE_INTEGER;

    for (let letter = Util.ASCII_SMALL_CASE_A; letter <= Util.ASCII_SMALL_CASE_Z; ++letter) {
        const changesFirst = lengthFirst - frequencyFirst[letter - Util.ASCII_SMALL_CASE_A];
        const changesSecond = lengthSecond - frequencySecond[letter - Util.ASCII_SMALL_CASE_A];
        minChanges = Math.min(minChanges, changesFirst + changesSecond);
    }
    return minChanges;
}

function minChangesToMakeAllLettersInOneStringSmaller(frequencyToMakeSmaller: number[], frequencyToMakeLarger: number[]): number {
    let minChanges = Number.MAX_SAFE_INTEGER;

    for (let letter = Util.ASCII_SMALL_CASE_A; letter < Util.ASCII_SMALL_CASE_Z; ++letter) {
        let changesToMakeSmaller = 0;
        for (let current = (letter + 1); current <= Util.ASCII_SMALL_CASE_Z; ++current) {
            changesToMakeSmaller += frequencyToMakeSmaller[current - Util.ASCII_SMALL_CASE_A];
        }

        let changesToMakeLarger = 0;
        for (let current = Util.ASCII_SMALL_CASE_A; current <= letter; ++current) {
            changesToMakeLarger += frequencyToMakeLarger[current - Util.ASCII_SMALL_CASE_A];
        }
        minChanges = Math.min(minChanges, changesToMakeSmaller + changesToMakeLarger);
    }
    return minChanges;
}

class Util {
    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
    static ASCII_SMALL_CASE_Z = 122;
}
