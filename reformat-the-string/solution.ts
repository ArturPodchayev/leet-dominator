function reformat(s: string): string {
    const letters = [];
    const digits = [];

    s.split('').forEach((w) => {
        if ('a' <= w && w <= 'z') {
            letters.push(w);
        } else {
            digits.push(w);
        }
    });

    if (Math.abs(letters.length - digits.length) > 1) {
        return ""
    }

    const result = [];
    let isDigitsFirst = digits.length > letters.length;
    for (let i = 0; i <= Math.min(letters.length, digits.length); i++) {
        if (isDigitsFirst) {
            result.push(digits[i]);
            result.push(letters[i]);
        } else {
            result.push(letters[i]);
            result.push(digits[i]);
        }


    }

    return result.join('');
};
