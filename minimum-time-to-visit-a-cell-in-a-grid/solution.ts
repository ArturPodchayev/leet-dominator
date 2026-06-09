type MinTime = {
  time: number;
  row: number;
  col: number;
};

function isSuperiorThan(MinTime1: MinTime, MinTime2: MinTime) {
  return MinTime1.time < MinTime2.time;
}

function push(heap: MinTime[], newMinTime: MinTime) {
  let top = heap.length;
  heap[top] = newMinTime;
  let now = top;
  let temp: MinTime;
  let next = Math.floor((top - 1) / 2);

  while (now) {
    if (isSuperiorThan(heap[now], heap[next])) {
      temp = heap[next];
      heap[next] = heap[now];
      heap[now] = temp;
      now = next;
      next = Math.floor((now - 1) / 2);
    } else return;
  }
}

function pop(heap: MinTime[]) {
  let top = heap.length - 1;
  heap[0] = heap[top];
  heap.pop();
  let now = 0;
  let next;
  let temp: MinTime;
  let left = 1;
  let right = 2;
  while (left < top) {
    next =
      top == right
        ? left
        : isSuperiorThan(heap[left], heap[right])
        ? left
        : right;
    if (isSuperiorThan(heap[next], heap[now])) {
      temp = heap[next];
      heap[next] = heap[now];
      heap[now] = temp;
      now = next;
      left = now * 2 + 1;
      right = now * 2 + 2;
    } else return;
  }
}

function traverse(
  grid: number[][],
  heap: MinTime[],
  nextRow: number,
  nextCol: number,
  visited: Set<string>,
  nowTime: MinTime
) {
  if (
    nextRow < 0 ||
    nextCol < 0 ||
    nextRow >= grid.length ||
    nextCol >= grid[0].length ||
    visited.has(`${nextRow},${nextCol}`)
  ) {
    return 0;
  }

  const limit = grid[nextRow][nextCol];

  if (nowTime.time + 1 >= limit) {
    const newTime = { time: nowTime.time + 1, row: nextRow, col: nextCol };
    if (nextRow === grid.length - 1 && nextCol === grid[0].length - 1) {
      return newTime.time;
    }
    push(heap, newTime);
  } else {
    // Need wasting time
    const range = limit - nowTime.time;
    const newTime = {
      time: limit + (range % 2 === 1 ? 0 : 1),
      row: nextRow,
      col: nextCol,
    };
    if (nextRow === grid.length - 1 && nextCol === grid[0].length - 1) {
      return newTime.time;
    }
    push(heap, newTime);
  }
  return 0;
}

function minimumTime(grid: number[][]): number {
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

  const visited = new Set<string>();
  const heap: MinTime[] = [];
  let curRow: number;
  let curCol: number;
  let ans: number;
  push(heap, { time: 0, row: 0, col: 0 });

  while (heap[0]) {
    while (visited.has(`${heap[0].row},${heap[0].col}`)) {
      pop(heap);
    }
    const curTime = heap[0];
    curRow = curTime.row;
    curCol = curTime.col;
    visited.add(`${curRow},${curCol}`);
    ans = traverse(grid, heap, curRow + 1, curCol, visited, curTime);
    if (ans > 0) return ans;
    ans = traverse(grid, heap, curRow, curCol + 1, visited, curTime);
    if (ans > 0) return ans;
    ans = traverse(grid, heap, curRow - 1, curCol, visited, curTime);
    if (ans > 0) return ans;
    ans = traverse(grid, heap, curRow, curCol - 1, visited, curTime);
    if (ans > 0) return ans;
  }
  return -1;
}
