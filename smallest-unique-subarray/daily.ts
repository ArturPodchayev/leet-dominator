function minAddToMakeValid(s: string): number {
    let openNeeded = 0
    let closeNeeded = 0

    for (const char of s) {
        if (char === '(') {
            closeNeeded += 1
        } else if (char === ')') {
            if (closeNeeded > 0) {
                closeNeeded -= 1
            } else {
                openNeeded += 1
            }
        }
    }

    return openNeeded + closeNeeded
}
