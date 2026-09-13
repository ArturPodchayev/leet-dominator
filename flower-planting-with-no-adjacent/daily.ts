function largestOverlap(img1: number[][], img2: number[][]): number {
  const memo: { [key in string]: number } = {};

  const dp = (x: number, y: number): number => {
    if (Math.abs(x) === img1.length || Math.abs(y) === img1.length) return 0;

    if (memo[`${x},${y}`] === undefined) {
      memo[`${x},${y}`] = 0;

	  // start to caculating the overlap
      if (x < 0) {
          if (y < 0) {
              for (let i=0; i<img1.length-Math.abs(x); i++) {
                  for (let j=0; j<img1.length-Math.abs(y); j++) {
                    if (img1[i][j] === 1 && img2[i-x][j-y] === 1) {
                        memo[`${x},${y}`] += 1;
                    }
                  }
              }
          } else {
              for (let i=0; i<img1.length-Math.abs(x); i++) {
                  for (let j=0; j<img1.length-Math.abs(y); j++) {
                    if (img1[i][j+y] === 1 && img2[i-x][j] === 1) {
                        memo[`${x},${y}`] += 1;
                    }
                  }
              }
          }
      } else {
          if (y < 0) {
              for (let i=0; i<img1.length-Math.abs(x); i++) {
                  for (let j=0; j<img1.length-Math.abs(y); j++) {
                    if (img1[i+x][j] === 1 && img2[i][j-y] === 1) {
                        memo[`${x},${y}`] += 1;
                    }
                  }
              }
          } else {
              for (let i=0; i<img1.length-Math.abs(x); i++) {
                  for (let j=0; j<img1.length-Math.abs(y); j++) {
                    if (img1[i+x][j+y] === 1 && img2[i][j] === 1) {
                        memo[`${x},${y}`] += 1;
                    }
                  }
              }
          }
      }

      // find the max of overlap number in the current state and in its translation in 4-direction
      memo[`${x},${y}`] = Math.max(memo[`${x},${y}`], dp(x - 1, y), dp(x, y - 1), dp(x + 1, y), dp(x, y + 1));
    }
    return memo[`${x},${y}`];
  }

  // we start at position 0,0
  return dp(0, 0);
};
