function solveEquation(equation: string): string {
    const [left, right] = equation.split('=');

    const regex = /[+-]?(\d+)?x|^\d+|[+-]\d+/gm;
    const leftside = left.match(regex);
    const rightside = right.match(regex);

    // making sure strings like 'x' is correctly parsed as 1x
    // and '-x' is parsed as -1x
    const parse = (num: string) => {
        if (num === '' || num === '+') return 1;
        if (num === '-') return -1;
        return Number(num);
    }

    const parseSide = (side: string[]) => {
        let sidesum = 0;
        // sum of all coefficients of x. e.g '2x+3x' = 5
        let sidexsum = 0;
        side.forEach((p) => {
            if (p.indexOf('x') !== -1) {
                sidexsum += parse(p.replace('x', ''));
            } else {
                sidesum += Number(p);
            }
        })

        return [sidesum, sidexsum];
    }

    const [leftsum, leftxsum] = parseSide(leftside);
    const [rightsum, rightxsum] = parseSide(rightside);

    if (rightsum === leftsum && rightxsum === leftxsum) {
        return 'Infinite solutions';
    }

    const sum = rightsum - leftsum;
    // sum of all xes.
    const xsum = leftxsum - rightxsum;

    if (xsum === 0) {
        return 'No solution';
    }

    return `x=${sum / xsum}`;
};
