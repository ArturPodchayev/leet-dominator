class Solution {
    func earliestFinishTime(_ landStartTime: [Int], _ landDuration: [Int], _ waterStartTime: [Int], _ waterDuration: [Int]) -> Int {
        
        var minFinishTime = Int.max
        
        for i in 0..<landStartTime.count {
            let landStart = landStartTime[i]
            let landDur = landDuration[i]
            let landFinish = landStart + landDur
            
            for j in 0..<waterStartTime.count {
                let waterStart = waterStartTime[j]
                let waterDur = waterDuration[j]
                let waterFinish = waterStart + waterDur
                
        
                let startWaterAfterLand = max(landFinish, waterStart)
                let totalTimeLandFirst = startWaterAfterLand + waterDur
                
           
                let startLandAfterWater = max(waterFinish, landStart)
                let totalTimeWaterFirst = startLandAfterWater + landDur
                
                minFinishTime = min(minFinishTime, totalTimeLandFirst, totalTimeWaterFirst)
            }
        }
        
        return minFinishTime
    }
}
