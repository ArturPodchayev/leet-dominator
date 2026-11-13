class Solution {
    func numberOfComponents(_ properties: [[Int]], _ k: Int) -> Int {
        var sets = properties.indices.reduce(into: [Int: Set<Int>]()) { $0[$1] = Set(properties[$1])}
        let dsu = DisjointSet(sets.count)
        for i in 0..<sets.count {
            for j in 0..<sets.count {
                if sets[i]!.intersection(sets[j]!).count >= k {
                    dsu.union(i, j)
                }

            }
        }
        return Set(dsu.root).count
    }
}

    
class DisjointSet {
    var root = [Int]()
    var rank = [Int]()
    
    init(_ n: Int) {
        for i in 0..<n {
            root.append(i)
            rank.append(0)
        }   
    }

    func getRoot(_ i: Int) -> Int {
        if root[i] != i {
            root[i] = getRoot(root[i])
        }
        return root[i]
    }

    func union(_ i: Int, _ j: Int) {
        let rootI = getRoot(i), rootJ = getRoot(j)

        if rootI != rootJ {

            if rank[rootI] > rank[rootJ] {
                root[rootJ] = rootI
                // rank[rootI] += 1
            } else if rank[rootI] < rank[rootJ] {
                root[rootI] = rootJ 
                // rank[rootJ] += 1
            } else {
                root[rootJ] = rootI
                rank[rootI] += 1
            }
        }
    }
}
