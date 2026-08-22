var minimumPartition = function(s, k) {
    let res = 0;
    let curr = '';
    for (let c of s) {
        if (Number(c) > k) {
            return -1;
        }
        if (Number(curr + c) > k) {
            res++;
            curr = c;
        } else {
            curr += c;
        }
    }
    if (Number(curr) <= k) {
        res++;
    }
    return res;
};
