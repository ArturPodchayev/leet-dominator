function take2small2big(arr) {
    let arr2 = [];

    arr.sort((a, b) => a - b); // sort ascending

    if (arr.length) arr2.push(arr.pop()); // biggest
    if (arr.length) arr2.push(arr.pop());
    if (arr.length) arr2.push(arr.shift());
    if (arr.length) arr2.push(arr.shift());

    return arr2;
}

var maxProduct = function (a) {
    let d = a.filter((x) => x < 0); // -ve
    let e = a.filter((x) => x === 0);
    let f = a.filter((x) => x > 0);

    d = take2small2big(d); // 2 min -ve, 2 max -ve
    e = take2small2big(e);
    f = take2small2big(f);

    let smallArr = [...d, ...e, ...f]; // merge 12 max elements

    let max = -Infinity;
    let arr1 = [100_000, ...smallArr]; // add biggest addable element
    let arr2 = [-100_000, ...smallArr];

    for (let arr of [arr1, arr2]) {
        let n = arr.length;

        // pick 3 elements
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    // multiply
                    let prod = arr[i] * arr[j] * arr[k];
                    if (max === undefined) {
                        max = prod; // 1s time
                    } else {
                        max = Math.max(max, prod); // get max
                    }
                }
            }
        }
    }

    return max;
};
