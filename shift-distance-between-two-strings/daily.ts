function countCommas(num: number): number {
    let commas = 0;
    let power = 1000;

    while (num >= power) {
        commas += num - power + 1;
        power *= 1000;
    }

    return commas;
};
