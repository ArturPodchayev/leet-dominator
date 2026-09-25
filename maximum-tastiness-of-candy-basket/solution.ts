function maximumTastiness(price: number[], k: number): number {
    price.sort((a,b) => a - b)
    const getCandies = (mid: number) => {
        let lastValue = price[0]
        let collected = 1
        for(let i = 1; i < price.length; i++) {
            if (price[i] - lastValue >= mid) {
                lastValue = price[i]
                collected++
            }
            if (collected >= k) return true
        }
        return false
    }

    let left = 0;
    let right = 10 ** 9
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {

        if (getCandies(mid)){
            left = mid + 1
        } else {
            right = mid - 1
        }

        mid = Math.floor((left + right) / 2)
    }

    return mid
}
