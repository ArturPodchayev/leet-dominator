const totalWaviness = (num1, num2) => {
    const range = [num1, num2]
    let peaks = [];
    let valleys = [];

    for (let i = range[0]; i <= range[1]; i++) {
        let numChars = i.toString();

        for(let j = 1; j < numChars.length-1; j++) {
          let midNum = +numChars[j];
          let leftNum = +numChars[j-1];
          let rightNum = +numChars[j+1];

          if (leftNum > midNum && rightNum > midNum) {
            valleys.push(midNum);
          } else if (leftNum < midNum && rightNum < midNum) {
            peaks.push(midNum);
          }
        }
    }

    return peaks.length + valleys.length;
}
