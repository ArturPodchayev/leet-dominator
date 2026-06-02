function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[]
): number {

    let ans = Infinity;

    // --- SCENARIO 1: Land -> Water ---
    
    // 1. Find the earliest possible finish time for ANY land task
    let minLandEnd = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        minLandEnd = Math.min(
            minLandEnd,
            landStartTime[i] + landDuration[i]
        );
    }

    // 2. Calculate the earliest finish time for a water task following the land task
    for (let i = 0; i < waterStartTime.length; i++) {
        ans = Math.min(
            ans,
            // The water task can only start AFTER the land task has finished
            Math.max(minLandEnd, waterStartTime[i]) + waterDuration[i] 
        );
    }


    // --- SCENARIO 2: Water -> Land ---
    
    // 3. Find the earliest possible finish time for ANY water task
    let minWaterEnd = Infinity;
    for (let i = 0; i < waterStartTime.length; i++) {
        minWaterEnd = Math.min(
            minWaterEnd,
            waterStartTime[i] + waterDuration[i]
        );
    }

    // 4. Calculate the earliest finish time for a land task following the water task
    for (let i = 0; i < landStartTime.length; i++) {
        ans = Math.min(
            ans,
            // The land task can only start AFTER the water task has finished
            Math.max(minWaterEnd, landStartTime[i]) + landDuration[i]
        );
    }

    return ans;
}
