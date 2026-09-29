class Solution {
    func invalidTransactions(_ transactions: [String]) -> [String] {
        
        class Tran {
            let str: String
            let name: String
            let time: Int
            let amount: Int
            let city: String
            var invalid: Bool

            init(_ str: String) {
                let cmps = str.components(separatedBy: ",")
                self.str = str
                self.name = cmps[0]
                self.time = Int(cmps[1])!
                self.amount = Int(cmps[2])!
                self.city = cmps[3]
                self.invalid = self.amount > 1000
            }
        }

        let trans = transactions.map(Tran.init)
        let tbl = trans.reduce(into: [String: [Tran]]()) { $0[$1.name, default: []].append($1) }
        
        for arr in tbl.values {
            let arr = arr.sorted { $0.time < $1.time }

            for i in arr.indices {
                var j = i + 1

                while j < arr.count, arr[j].time - arr[i].time <= 60 {
                    if arr[j].city != arr[i].city {
                        arr[i].invalid = true
                        arr[j].invalid = true
                    }
                    j += 1
                }
            }
        }

        return trans
            .filter { $0.invalid }
            .map(\.str)
    }
}
