 class Track {
    var count: Int
    var sum: Int

    init(count: Int = 0, sum: Int = 0) {
        self.count = count
        self.sum = sum
    }
}

class Solution {
    var result = 0

    func averageOfSubtree(_ root: TreeNode?) -> Int {
        guard let root else {
            return 0
        }

        let _ = traverse(root, Track())
        return result
    }

    func traverse(_ tree: TreeNode, _ track: Track) -> Track {
        if let left = tree.left {
            let lTrack = traverse(left, Track())
            track.count += lTrack.count
            track.sum += lTrack.sum
        }

        track.sum += tree.val
        track.count += 1

        if let right = tree.right {
            let rTrack = traverse(right, Track())
            track.count += rTrack.count
            track.sum += rTrack.sum
        }

        if tree.val == (track.sum / track.count) {
            result += 1
        }

        return track
    }
}
