class StockPrice {

    private var cu = 0
    private var mi = Int.max
    private var ma = Int.min
    private var up = 0
    private var data = [Int: Int]()
    
    func update(_ timestamp: Int, _ price: Int) {
        
        guard let old = data[timestamp] else {

            data[timestamp] = price

            if timestamp > up { cu = price }
            
            mi = min(mi, price)
            ma = max(ma, price)
            up = max(up, timestamp)

            return
        }

        data[timestamp] = price

        mi = min(mi, price)
        ma = max(ma, price)

        if timestamp == up { cu = price }
        if old == mi && price > mi { mi = data.values.min()! }
        if old == ma && price < ma { ma = data.values.max()! }
    }
    
    func current() -> Int { cu }
    func maximum() -> Int { ma }
    func minimum() -> Int { mi }
}
