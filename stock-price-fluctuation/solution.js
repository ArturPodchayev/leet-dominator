var StockPrice = function() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
    this.prices = [];
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.minHeap.enqueue(timestamp, price);
    this.maxHeap.enqueue(timestamp, price);
    this.prices[timestamp] = price;
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.prices[this.prices.length - 1];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    const heap = this.maxHeap;

    while (heap.size() && this.prices[heap.front().element] !== heap.front().priority) {
        heap.dequeue();
    }
    
    return heap.front().priority;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    const heap = this.minHeap;

    while (heap.size() && this.prices[heap.front().element] !== heap.front().priority) {
        heap.dequeue();
    }

    return heap.front().priority;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
