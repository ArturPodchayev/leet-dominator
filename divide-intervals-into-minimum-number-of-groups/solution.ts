function minGroups(intervals: number[][]): number {

    const events: Array<[number, number]> = []

    for (let [start, end] of intervals){
        events.push([start, 1])       // Start event
        events.push([end + 1, -1])    // End event
    }

    events.sort((a,b) => {
        let firstCondition = a[0] - b[0]
        if (firstCondition === 0){
            return a[1] - b[1]        // Process end events before start events
        }
        return firstCondition
    })

    let result = 0
    let activeGroups = 0

    for (let [_, change] of events){
        activeGroups += change
        result = Math.max(result, activeGroups)
    }

    return result
};
