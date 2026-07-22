function countPoints(points, queries) {
  // For each query, check all points and calculate
  // number of points having distance <= radius.
  return queries.map(([qx, qy, qr]) => {
    return points.reduce((acc, [px, py]) => {
      if (isInside(px, py, qx, qy, qr)) ++acc;
      return acc;
    }, 0);
  });
}

function isInside(px, py, cx, cy, radius) {
  return distance(px, py, cx, cy) <= radius;
}

// Euclidean distance
// https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}
