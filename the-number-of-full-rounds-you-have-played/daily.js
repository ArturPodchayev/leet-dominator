let removeInvalidParentheses = function (s) {
    const isValid = str => {
        let count = 0;
        for (let ch of str) {
            if (ch === '(') count++;
            else if (ch === ')') count--;
            if (count < 0) return false;
        }

        return count === 0;
    }

    let res = [], visited = new Set([s]), queue = [s];

    while (queue.length) {
        let next = [];
        for (let str of queue) if (isValid(str)) res.push(str);
        if (res.length) return res;
        for (let str of queue) {
            for (let i = 0; i < str.length; i++) {
                if (!'()'.includes(str[i])) continue;
                let t = str.slice(0, i) + str.slice(i + 1);
                if (!visited.has(t)) {
                    visited.add(t);
                    next.push(t);
                }
            }
        }

        queue = next;
    }

    return [""];
}
