class Solution {
    func subsequencePairCount(_ nums: [Int]) -> Int {
        nums
            .reduce([[0, 0]: 1]) { (counts: [[Int]: Int], num: Int) -> [[Int]: Int] in
                counts
                    .merging(
                        counts
                            .flatMap { (gcd: [Int], count: Int) -> [([Int], Int)] in
                                gcd
                                    .compactMap {
                                        sequence(first: ($0, num)) { 
                                            ($1, $0 % $1)
                                        }
                                        .first { $0.1 == 0 }?.0
                                    }
                                    .enumerated()
                                    .map {
                                        $0 == 0 ? [$1, gcd[1]] : [gcd[0], $1]
                                    }
                                    .map {
                                        ($0, count)
                                    }
                            }
                    ) { ($0 + $1) % 1000000007 }
            }
            .filter { 
                $0.key[0] == $0.key[1] && $0.key[0] != 0 
            }
            .reduce(0) { 
                ($0 + $1.value) % 1000000007 
            }
    }
}
