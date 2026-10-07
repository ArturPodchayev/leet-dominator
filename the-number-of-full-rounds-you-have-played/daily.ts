function removeInvalidParentheses(
    s: string,
    state = {
        visited: new Set<string>(),
        result: [] as string[],
        length: 0,
    },
): string[] {
    state.visited.add(s);
    if (s.length < state.length) return state.result;

    if (isValid(s)) {
        if (s.length > state.length) {
            state.length = s.length;
            state.result = [];
        }
        state.result.push(s);
        return state.result;
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c !== '(' && c !== ')') continue;

        const sub = s.slice(0, i) + s.slice(i + 1);
        if (state.visited.has(sub)) continue;

        removeInvalidParentheses(sub, state);
    }

    return state.result;
};

function isValid(s: string) {
    let open = 0;
    for (const c of s) {
        if (c === '(') {
            open++;
        }
        else if (c === ')') {
            open--;
        }
        if (open < 0) {
            return false;
        }
    }
    return open === 0;
}
