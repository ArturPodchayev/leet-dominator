class OrderedStream {
    ptr: number
    stream: string[]
    constructor(n: number) {
        this.ptr = 1
        this.stream = new Array(n+1).fill(null)
    }

    insert(idKey: number, value: string): string[] {
        this.stream[idKey] = value
        const result= []
        while(this.stream[this.ptr]) {
          result.push(this.stream[this.ptr])
          this.ptr++
        }
        return result
        
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
