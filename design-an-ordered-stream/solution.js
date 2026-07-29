class OrderedStream {
    constructor(n) {
        this.map = new Map();
        this.key = 1;
    }
    insert(idKey, value) {
        this.map.set(idKey, value);		// add the key-value to the map
        const result = [];
		// until able to find the key in the map, add it to the resultant chunk
		// each time the next greater key is found, it will start the result from that key value
        while(this.map.has(this.key)) { // O(n)
            result.push(this.map.get(this.key));
            ++this.key;
        }
        return result;
    }
}
