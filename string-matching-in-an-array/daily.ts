function processStr(str: string): string {
    let result = [];

    for (const char of str) {
        if (char === '*') {
            result.pop();
        } else if (char === '#') {
            result = [...result, ...result];
        } else if (char === '%') {
            result.reverse();
        } else {
            result.push(char);
        }
    }

    return result.join('');
};
