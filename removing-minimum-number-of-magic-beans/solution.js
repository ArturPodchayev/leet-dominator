var minimumRemoval = function(beans) {
    let max = 0;
    let sum = 0;
    beans.sort((a, b) => a - b);
    
    for (let i = 0; i < beans.length; i++) {
        sum += beans[i];
        max = Math.max(max, beans[i] * (beans.length - i));
    }
    
    return sum - max;
};
