var diagonalSort = function (a) {
  let diagonalMatrix = {};
  // this is the way for iteration and collecting all the diagonal elements
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      let diag = i - j; 
      diagonalMatrix[diag]
        ? diagonalMatrix[diag].push(a[i][j])
        : (diagonalMatrix[diag] = [a[i][j]]);
    }
  }

  // sorting the diagonal diagonalMatrix
  for (let i of Object.keys(diagonalMatrix)) {
    diagonalMatrix[i] = diagonalMatrix[i].sort((a, b) => a - b);
  }

  //reassigning the diagonal values
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      let diag = i - j;
      if (diagonalMatrix[diag]) {
        a[i][j] = diagonalMatrix[diag].shift();
      }
    }
  }

  return a;
};
