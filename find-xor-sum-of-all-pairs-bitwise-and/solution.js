var getXORSum = function(arr1, arr2) {
    let xor1 = arr1[0];
    let xor2 = arr2[0];
    for(let i=1;i<arr1.length;i++)
        xor1 = xor1^arr1[i];
    for(let i=1;i<arr2.length;i++)
        xor2 = xor2^arr2[i];
    return xor1 & xor2;
};
