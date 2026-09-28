function maximumTotalSum(maximumHeight: number[]): number {
    maximumHeight.sort((a, b) => a - b)

    const arrayLength = maximumHeight.length
    let currentHeight = maximumHeight[arrayLength-1]
    let totalSum = 0

    for(let i = arrayLength - 1; i >= 0 ; i--) {
        if(maximumHeight[i] < currentHeight) {
            currentHeight = maximumHeight[i]
        }

        if(currentHeight <= 0) {
            return -1
        }

        totalSum += currentHeight
        currentHeight--
    }

    return totalSum
}
