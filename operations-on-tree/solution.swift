class LockingTree {

    private var lockTable: [Int: Int] // node : user
    private var parent: [Int]

    init(_ parent: [Int]) {
        self.lockTable = [:]
        self.parent = parent
    }
    
    func lock(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if let _ = lockTable[num] {
            // node is locked
            return false
        }
        lockTable[num] = user
        return true
    }
    
    func unlock(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if let lockedUser = lockTable[num], lockedUser == user {
            // unlock node, locked by the same user before
            lockTable[num] = nil 
            return true
        }
        return false
    }
    
    func upgrade(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if lockTable[num] != nil {
            // node is locked
            return false
        }

        // Check if any locked ancestors -> false is any
        if isLockedAncestor(of: num) {
            return false
        }

        // Check if any locked descendants -> false if none
        let desc = lockedDescendants(of: num)
        if desc.isEmpty {
            return false
        }

        // If possible - unlock the descendants
        unlockAll(desc, user)
        // Lock the node
        lock(num, user)
        return true
    }

/*
   4    - ancestor of node 9
    \
     9  - node 9 
*/
    private func isLockedAncestor(of node: Int) -> Bool {
        var nextAncestor = node
        while nextAncestor >= 0 {
            nextAncestor = self.parent[nextAncestor]
            if lockTable[nextAncestor] != nil {
                // node is locked
                return true
            }
        }
        return false
    }
/*
   4    - node 4
    \
     9  - descendant of node 4
*/
    private func lockedDescendants(of node: Int) -> [Int] {
        var descendants = [Int]()
        for (targetNode, _) in lockTable {
            if isNode(node, ancestorOf: targetNode) {
                descendants.append(targetNode)
            }
        }

        return descendants
    }

    private func isNode(_ nodeA: Int, ancestorOf targetNode: Int) -> Bool {
        var nextAncestor = targetNode
        while nextAncestor >= 0 {
            nextAncestor = self.parent[nextAncestor]
            if nextAncestor == nodeA {
                // found that 'nodeA' is an ancestor of 'targetNode'
                return true
            }
        }
        return false
    }

    private func unlockAll(_ nodes: [Int], _ user: Int) {
        for node in nodes {
             lockTable[node] = nil
        }
    }
}
