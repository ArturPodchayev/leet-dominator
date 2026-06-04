/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    let counter = 1;

    const matrix = [[]];

    for(let i = 1; i <= 7; i++){
        matrix.push([0]);
        for(let j = 1; j <= 7; j++){
            matrix[i].push(7*i+j > 47 ? '*' : counter);

            counter++;

            if(counter>10) counter = 1;
        }
    }

    // console.log({matrix})

    const randomRow = rand7();
    const randomCol = rand7();

    const result = matrix[randomRow][randomCol];

    if(result === '*') return rand10();

    return result;
};
