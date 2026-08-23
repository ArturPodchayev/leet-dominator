function stableMountains(height: number[], threshold: number): number[] {
    let stable: number[] = [];

    for (let i = 1; i < height.length; i++) {
      if (height[i - 1] > threshold) {
        stable.push(i);
      }
    }
    return stable;
};
