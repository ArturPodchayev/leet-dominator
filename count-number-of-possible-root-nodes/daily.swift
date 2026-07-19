class Solution {
    func smallestSubsequence(_ s: String) -> String {

        func code(_ c: Character) -> Int {
            1 << (c.asciiValue! - Character("a").asciiValue!)
        }

        let chr = Array(
            s
                .reversed()
                .reduce(into: [0]) { $0.append($0.last! | code($1)) }
                .reversed()
        )

        let cds = s.map(code)
        let str = s.map(String.init)
        var tgt = chr.reduce(0, |)
        var res = ""
        var i = 0

        while tgt != 0 {

            var bc: String!
            var bj: Int!

            for j in i..<str.count
                where tgt & cds[j] != 0 && (tgt ^ cds[j]) & chr[j + 1] == (tgt ^ cds[j]) {
            
                    bc = bc ?? str[j]
                    bj = bj ?? j

                    if str[j] < bc {
                        bc = str[j]
                        bj = j
                    }
                }
            
            res += bc
            tgt ^= cds[bj]
            i = bj + 1
        }

        return res
    }
}
