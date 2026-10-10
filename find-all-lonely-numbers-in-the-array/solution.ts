function findLonely(nums: number[]): number[] {
      let answer: number[] = [];
  let map: Map<Number, Number> = new Map<Number, Number>();

  nums.forEach((e) => {
    map.set(e, ((map.get(e) as number) || 0) + 1);
  });

  map.forEach((value, key) => {
    if (
      value == 1 &&
      !map.get((key as number) - 1) &&
      !map.get((key as number) + 1)
    )
      answer.push(key as number);
  });

  return answer;
};
