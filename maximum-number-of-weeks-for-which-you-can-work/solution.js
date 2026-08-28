var numberOfWeeks = function (milestones) {
    let sum = milestones.reduce((total, el) => total + el, 0);
    let max = Math.max(...milestones);
    let rest = sum - max;
    if (max > rest) {
        return 2 * rest + 1;
    } else {
        return sum;
    }
};
