var shortestSubstrings = function(arr) {
    return arr.map((string, sId) => {
        let smalles = '';

        for (let len = 1; len <= string.length && !smalles; len++) {
            for (let i = 0; i < string.length - len + 1; i++) {
                const substr = string.substring(i, i + len);

                if (smalles && smalles < substr)
                    continue;

                if (arr.every((string, idx) => idx === sId || string.indexOf(substr) === -1))
                    smalles = substr;
            }
        }

        return smalles;
    });
};
