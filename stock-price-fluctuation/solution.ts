class StockPrice {
    prices: {}
    curr: number
    minQ: any
    maxQ: any
    constructor() {
        this.prices = {}
        this.curr = -1
        this.minQ = new MinPriorityQueue((prices) => prices[1])
        this.maxQ = new MaxPriorityQueue((prices) => prices[1])
    }

    update(timestamp: number, price: number): void {
        this.prices[timestamp] = price
        if (this.curr === -1) {
            this.curr = timestamp
        }
        this.curr = Math.max(timestamp, this.curr)
        this.minQ.enqueue([timestamp, price])
        this.maxQ.enqueue([timestamp, price])
    }

    current(): number {
        return this.prices[this.curr]
    }

    maximum(): number {
        while (this.maxQ.size() > 0 && this.prices[this.maxQ.front()[0]] !== this.maxQ.front()[1]) {
            this.maxQ.dequeue()
        }
        return this.maxQ.front()[1]
    }

    minimum(): number {
        while (this.minQ.size() > 0 && this.prices[this.minQ.front()[0]] !== this.minQ.front()[1]) {
            this.minQ.dequeue()
        }
        return this.minQ.front()[1]
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

 // update -> {1: 10}
 // update -> {1: 10, 2: 5}
 // current -> 5
 // max -> 10
