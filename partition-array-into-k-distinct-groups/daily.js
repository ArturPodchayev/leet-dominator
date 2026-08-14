var maximumLengthSubstring = function(s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let count = {};

        for (let j = i; j < s.length; j++) {
            count[s[j]] = (count[s[j]] || 0) + 1;

            if (count[s[j]] > 2) {
                break;
            }

            if (j - i + 1 > max) {
                max = j - i + 1;
            }
        }
    }

    return max;
};
