class SubrectangleQueries {
  updates: number[][] = [];

  constructor(readonly rectangle: number[][]) {}

  updateSubrectangle(...args: number[]): void {
    this.updates.push(args);
  }

  getValue(row: number, col: number): number {
    for (let i = this.updates.length - 1; i >= 0; --i) {
      const [r1, c1, r2, c2, v] = this.updates[i];
      if (r1 <= row && row <= r2 && c1 <= col && col <= c2) return v;
    }
    return this.rectangle[row][col];
  }
}
