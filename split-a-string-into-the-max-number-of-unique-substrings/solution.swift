class Solution {
    func maxUniqueSplit(_ s: String) -> Int {
        
        func build(_ s: String = s, _ c: Set<String> = Set()) -> Int {
            guard !s.isEmpty else { return c.count }

            var best = [-1]
            
            for i in 1...s.count {

                let sub = String(s.prefix(i))
                guard !c.contains(sub) else { continue }

                let rest = String(s.dropFirst(i))
                var newc = c
                newc.insert(sub)

                let res = build(rest, newc)
                best.append(res)
            }

            return best.max()!
        }

        return build()
    }
}
