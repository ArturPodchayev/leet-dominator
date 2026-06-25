function sumOfThree(num: number): number[] {
    const second = num / 3;

    if(Math.floor(second) === Math.ceil(second)) {
        return [second - 1, second, second + 1];
    }

    return [];
};
