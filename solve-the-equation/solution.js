var solveEquation = function(equation) {
    const sides = equation.split('=');
    const left = evalSide(sides[0]);
    const right = evalSide(sides[1]);
    left.x -= right.x;
    left.c -= right.c;
    return left.x ? `x=${-left.c / left.x}` : left.c ? 'No solution' : 'Infinite solutions';
};

function evalSide(side) {
    const res = { x: 0, c: 0 };
    let re = /-?(\d*x|\d+)/g, match;
    while (match = re.exec(side)) {
        let val = match[0].replace('x', '');
        if (match[0] === val) {
            res.c += parseInt(val);
        } else if (val === '-') {
            res.x--; 
        } else {
            res.x += parseInt(val || 1); 
        }
    }
    return res;
}
