function getOrder(tasks: number[][]): number[] {
  const results = [] as number[];
  const iInd = 0;
  const iTime = 1;
  const iLong = 2;
  const shouldSwap = (arr: number[][], i1: number, i2: number) => {
    if (i1 < arr.length && i2 < arr.length) {
      if (arr[i1][iLong] - arr[i2][iLong]) return arr[i1][iLong] < arr[i2][iLong];
      return arr[i1][iInd] < arr[i2][iInd];
    }
    return false;
  };
  const source = tasks.map(([time, long], ind) => [ind, time, long]);
  source.sort((a, b) => a[iTime] - b[iTime]);

  const heap = [] as number[][];
  let now = 0;

  let ind = 0;
  while (ind < source.length || heap.length) {
    if (!heap.length && now < source[ind][iTime]) now = source[ind][iTime];
    while (ind < source.length && source[ind][iTime] <= now) {
      heapInsert(heap, shouldSwap, source[ind]);
      ind++;
    }
    const item = heapShift(heap, shouldSwap);
    now += item[iLong];
    results.push(item[iInd]);
  }

  return results;
}

function parentIndex(index: number) {
  return Math.floor((index - 1) / 2);
}

function leftChildIndex(index: number) {
  return 2 * index + 1;
}

function rightChildIndex(index: number) {
  return 2 * index + 2;
}

function heapSwap<T>(heap: T[], a: number, b: number) {
  [heap[a], heap[b]] = [heap[b], heap[a]];
}

function heapInsert<T>(heap: T[], shouldSwap: (heap: T[], i1: number, i2: number) => boolean, item: T) {
  heap.push(item);
  let child = heap.length - 1;

  // heapifyUp
  while (child) {
    const parent = parentIndex(child);
    if (shouldSwap(heap, child, parent)) {
      heapSwap(heap, child, parent);
      child = parent;
    } else {
      return child;
    }
  }
}

function heapShift<T>(heap: T[], shouldSwap: (heap: T[], i1: number, i2: number) => boolean) {
  if (heap.length < 2) {
    return heap.pop() as T;
  }
  const result = heap[0];
  heap[0] = heap.pop() as T;
  heapifyDown(0, heap, shouldSwap);
  return result;
}

function heapifyDown<T>(parent: number, heap: T[], shouldSwap: (heap: T[], i1: number, i2: number) => boolean) {
  while (true) {
    let child = leftChildIndex(parent);
    const child2 = rightChildIndex(parent);
    if (shouldSwap(heap, child2, child)) {
      child = child2;
    }
    if (shouldSwap(heap, child, parent)) {
      heapSwap(heap, child, parent);
      parent = child;
    } else {
      return parent;
    }
  }
}
