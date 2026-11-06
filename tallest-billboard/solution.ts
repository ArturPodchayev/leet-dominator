function predictC(cache, rods, corner, height) {
  if (height === 0) {
    return true;
  }
  const sum = 0;
  for (let i = corner; i < rods.length; i += 1) {
    const rod = rods[i];
    if (rod + sum > height) {
      continue;
    }
    if (rod + sum === height) {
      return true;
    }
    if (predict(cache, rods, i + 1, height - rod)) {
      return true;
    }
  }
  return false;
}

function predict(cache, rods, corner, height) {
  const key = `${corner}-${height}`;
  if (cache[key] !== undefined) {
    return cache[key];
  }
  const result = predictC(cache, rods, corner, height);
  cache[key] = result;
  return result;
}

function tryWeld(cache, rods, height, left, right, corner) {
  if (left === right && left === height) {
    return true;
  }
  const lPredict = predict(cache, rods, corner, height - left);
  if (!lPredict) {
    return false;
  }
  const rPredict = predict(cache, rods, corner, height - right);
  if (!rPredict) {
    return false;
  } else if (left === height) {
    return true;
  }

  for (let i = corner; i < rods.length; i += 1) {
    const rod = rods[i];
    if (rod > height) {
      continue;
    }
    if (rod + left <= height) {
      if (tryWeld(cache, rods, height, left + rod, right, i + 1)) {
        return true;
      }
    }
    if (rod + right <= height) {
      if (tryWeld(cache, rods, height, left, right + rod, i + 1)) {
        return true;
      }
    }
  }
  return false;
}

function tallestBillboard(rods) {
  const cachePredict = {};
  rods.sort();
  rods = rods.reverse();
  const sum = rods.reduce((acc, x) => acc + x, 0);
  for (let i = Math.floor(sum / 2); i > 0; i -= 1) {
    if (tryWeld(cachePredict, rods, i, 0, 0, 0)) {
      return i;
    }
  }
  return 0;
}
