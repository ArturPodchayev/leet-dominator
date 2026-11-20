class Solution {
    func minimumRemoval(_ beans: [Int]) -> Int {
        
        let N = beans.count
        let sum =  beans.reduce(0,+)
        let sortedBeans = beans.sorted(by:<)
        print(sortedBeans)
        var ans = Int.max;
        for(i, value) in sortedBeans.enumerated() {
              ans = min(ans, sum - (N - i) * value);
        }

         return ans;

    }
}
