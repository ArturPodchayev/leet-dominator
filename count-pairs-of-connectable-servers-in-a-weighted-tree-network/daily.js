/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const mergeSort = (asteroids) => {
  if (asteroids.length <= 1) {
    return asteroids;
  }
  const mid = Math.floor(asteroids.length / 2);
  const left = mergeSort(asteroids.slice(0, mid));
  const right = mergeSort(asteroids.slice(mid));
  return merge(left, right);
};

var asteroidsDestroyed = function (mass, asteroids) {
  asteroids = mergeSort(asteroids);
  for (let i = 0; i < asteroids.length; i++) {
    if (mass < asteroids[i]) {
      return false;
    }
    mass += asteroids[i];
  }
  return true;
};
