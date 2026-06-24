class Solution {
    func maxWeight(_ pizzas: [Int]) -> Int {
        let n = pizzas.count
        if n == 0 { return 0 }
        if n < 4 {
            return pizzas.max() ?? 0
        }
        var left = 0
        var right = n - 1
        var pizzas = pizzas.sorted()
        var gain = 0
        var days = n / 4
        var odd_days = (days +  1) / 2
        for day in 0..<days {
            var daily: [Int] = []
            if day < odd_days {
                daily = [pizzas[left], pizzas[left + 1], pizzas[left + 2], pizzas[right]]
                left += 3
                right -= 1
                if let last = daily.last {
                    gain += last
                }
            }
            else {
                daily = [pizzas[left], pizzas[left + 1], pizzas[right - 1], pizzas[right]]
                left += 2
                right -= 2
                gain += daily[2]
            }
            print(daily, gain)
        }
        return gain
    }
}
