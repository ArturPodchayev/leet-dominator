function countPoints(points: number[][], queries: number[][]): number[] {
  // points[i] = [x,y]; queries[j] = [x, y, r]    
  // iterate over queries, calculate ranges, iterate over points, 
  const inRange = (a: number, b: number, r: number, x: number, y: number): boolean => {
    return (x - a)**2 + (y - b)**2 <= r**2
  }
  return queries.map(([a, b, r]) => {
    return points.reduce((sum, [x, y]) => {
      if (inRange(a, b, r, x, y)) {
        return sum + 1
      }
      return sum
    }, 0)
  })
};
