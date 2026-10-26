class EventManager {
  private readonly mp = new Map<number, number>();
  private readonly pq: [priority: number, id: number][] = [];

  constructor(events: [id: number, priority: number][]) {
    for (const [id, pr] of events) {
      this.mp.set(id, pr);
      this.heapPush([pr, id]);
    }
  }

  updatePriority(eventId: number, newPriority: number): void {
    this.mp.set(eventId, newPriority);
    this.heapPush([newPriority, eventId]);
  }

  pollHighest(): number {
    while (this.pq.length > 0) {
      const [pr, id] = this.heapPop()!;
      if (this.mp.get(id) === pr) {
        this.mp.delete(id);
        return id;
      }
    }
    return -1;
  }

  private heapPush(entry: [number, number]): void {
    this.pq.push(entry);
    this.siftUp(this.pq.length - 1);
  }

  private heapPop(): [number, number] | undefined {
    const top = this.pq[0];
    const last = this.pq.pop()!;
    if (this.pq.length > 0) {
      this.pq[0] = last;
      this.siftDown(0);
    }
    return top;
  }

  private siftUp(i: number): void {
    const { pq } = this;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.cmp(pq[i], pq[parent]) <= 0) break;
      [pq[i], pq[parent]] = [pq[parent], pq[i]];
      i = parent;
    }
  }

  private siftDown(i: number): void {
    const { pq } = this;
    const n = pq.length;
    while (true) {
      let best = i;
      const l = 2 * i + 1;
      const r = l + 1;
      if (l < n && this.cmp(pq[l], pq[best]) > 0) best = l;
      if (r < n && this.cmp(pq[r], pq[best]) > 0) best = r;
      if (best === i) break;
      [pq[i], pq[best]] = [pq[best], pq[i]];
      i = best;
    }
  }

  // max-heap by priority, tie-break: smaller id wins (higher priority)
  private cmp([pa, ia]: [number, number], [pb, ib]: [number, number]): number {
    return pa !== pb ? pa - pb : ib - ia;
  }
}

/**
 * Your EventManager object will be instantiated and called as such:
 * var obj = new EventManager(events)
 * obj.updatePriority(eventId,newPriority)
 * var param_2 = obj.pollHighest()
 */
