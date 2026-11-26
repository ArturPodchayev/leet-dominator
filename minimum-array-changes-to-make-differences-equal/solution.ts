  function minChanges(nums: number[], k: number): number {
    let obj = new Map();

    for (let i = 0; i < nums.length / 2; i++) {
      let leftNum = nums[i];
      let rightNum = nums[nums.length - 1 - i];
      let diff = Math.abs(leftNum - rightNum);
      if (!obj.has(diff)) obj.set(diff, { count: 0, indexes: [] });
      obj.get(diff).count++;
      obj.get(diff).indexes.push(i);
    }

    let minOperations = Infinity;

    for (let [needDiff, val] of obj) {
      let operationsCount = 0;
      let lol = true;
      let remain = nums.length / 2 - val.count;
      for (let [currDiff, val] of obj) {
        if (needDiff === currDiff) continue;
        if (operationsCount + remain >= minOperations) {
          lol = false;
          break;
        }
        let { indexes } = val;

        for (let m = 0; m < indexes.length; m++) {
          if (operationsCount + remain >= minOperations) {
            lol = false;
            break;
          }
          let ind = indexes[m];

          let leftNum = nums[ind];
          let rightNum = nums[nums.length - 1 - ind];
          let biggerN = Math.max(leftNum, rightNum);
          let smallerN = Math.min(leftNum, rightNum);
          let howBig = Math.max(smallerN, k - biggerN);
          if (needDiff > howBig + currDiff) {
            operationsCount += 2;
            remain -= 1;
          } else {
            operationsCount += 1;
            remain -= 1;
          }
        }
      }
      if (lol) minOperations = Math.min(operationsCount, minOperations);
    }

    return minOperations;
  }
