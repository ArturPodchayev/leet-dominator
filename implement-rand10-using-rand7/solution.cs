/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
    let ans: number = Number.MAX_SAFE_INTEGER;
    while (ans >= 40) {
        ans = 7 * (rand7() - 1) + (rand7() - 1);
    }
    return (ans % 10) + 1;
};
