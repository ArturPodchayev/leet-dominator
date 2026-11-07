var assignTasks = function (servers, tasks) {
    const availables = new Heap(servers.length, (a, b) => a.w === b.w ? (a.i - b.i) : a.w - b.w);
    const busies = new Heap(servers.length, (a, b) => a.remaining - b.remaining);

    for (let i = 0; i < servers.length; i++) {
        availables.push({ w: servers[i], i });
    }

    let processing = 0;
    let elapsed = 0
    const result = new Array(tasks.length);

    while (processing < tasks.length) {
        while (busies.size() > 0 && busies.peek().remaining <= elapsed) {
            availables.push(busies.pop());
        }
        while (availables.size() > 0 && processing <= elapsed && processing < tasks.length) {
            const server = availables.pop();
            result[processing] = server.i;
            server.remaining = (elapsed + tasks[processing]);
            busies.push(server);
            processing++;
        }
        if (availables.size() === 0) {
            elapsed = busies.peek().remaining;
        } else {
            elapsed++;
        }
    }

    return result;
};

class Heap {
    constructor(size = Infinity, comparator) {
        this._heap = size === Infinity ? [] : new Array(size);
        this._idx = 0;
        this._max = size;
        this._comparator = comparator;
    }

    _get = (i) => this._heap[i];
    _parent = (i) => (i - 1) / 2 | 0;
    _left = (i) => (i * 2) + 1;
    _right = (i) => (i * 2) + 2;
    _push = (value) => (this._heap[this._idx++] = value);
    _pop = () => this._heap[--this._idx];

    _compare = (i, j) => this._comparator(this._get(i), this._get(j)) < 0;

    _swap = (a, b) => {
        const tmp = this._heap[a];
        this._heap[a] = this._heap[b];
        this._heap[b] = tmp;
    }

    _best = (idx, best = idx) => {
        const { _left, _right, _compare } = this;
        const l = _left(idx);
        const r = _right(idx);

        if (l < this.size() && _compare(l, idx)) best = l;
        if (r < this.size() && _compare(r, best)) best = r;

        return _compare(idx, best) ? idx : best;
    }

    _heapify = (i = 0) => {
        const { _best, _swap } = this;
        let best = _best(i);
        while (best !== i) {
            _swap(i, best);
            best = _best(i = best);
        }
    }

    size = () => this._idx;
    isEmpty = () => this.size() === 0;
    isFull = () => this.size() === this._max;
    peek = () => {
        if (this.size() === 0) return undefined;
        return this._heap[0];
    }

    push = (value) => {
        const { _compare, _swap, _parent } = this;
        this._push(value);
        let i = this.size() - 1;
        let j = _parent(i);
        while (i > 0 && _compare(i, j)) {
            _swap(i, j);
            j = _parent(i = j);
        }
    }

    pop = () => {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this._pop();
        const val = this.peek();
        this._heap[0] = this._pop();
        this._heapify();
        return val;
    }

}
