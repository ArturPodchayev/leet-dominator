var possiblyEquals = function(s1, s2) {
    const s1Len = s1.length;
    const s2Len = s2.length;
    const visited = new Set();

    function isDigit(char) {
        return !isNaN(parseInt(char));
    }

    const stack = [{ s1Idx: 0, s2Idx: 0, diff: 0 }];

    while (stack.length > 0) {
        const { s1Idx, s2Idx, diff } = stack.pop();

        if (s1Idx > s1Len || s2Idx > s2Len) {
            continue;
        }

        if (s1Idx === s1Len && s2Idx === s2Len) {
            if (diff === 0) {
                return true;
            }
            continue;
        }

        const key = `${s1Idx}|${s2Idx}|${diff}`;

        if (visited.has(key)) {
            continue;
        }
        visited.add(key);

        if (isDigit(s1[s1Idx])) {
            let num = 0;
            let tmp = s1Idx;

            while (isDigit(s1[tmp])) {
                num = num * 10 + parseInt(s1[tmp]);
                tmp++;

                stack.push({ s1Idx: tmp, s2Idx, diff: diff + num });
            }
        }

        if (isDigit(s2[s2Idx])) {
            let num = 0;
            let tmp = s2Idx;

            while (isDigit(s2[tmp])) {
                num = num * 10 + parseInt(s2[tmp]);
                tmp++;

                stack.push({ s1Idx, s2Idx: tmp, diff: diff - num });
            }
        }

        if (!isDigit(s1[s1Idx]) && !isDigit(s2[s2Idx])) {
            if (diff === 0 && s1[s1Idx] === s2[s2Idx]) {
                stack.push({ s1Idx: s1Idx + 1, s2Idx: s2Idx + 1, diff });
            }
            if (diff > 0) {
                stack.push({ s1Idx, s2Idx: s2Idx + 1, diff: diff - 1 });
            }
            if (diff < 0) {
                stack.push({ s1Idx: s1Idx + 1, s2Idx, diff: diff + 1 });
            }
        }
    }

    return false;
};
