class Solution {
    func countDaysTogether(_ arriveAlice: String, _ leaveAlice: String, _ arriveBob: String, _ leaveBob: String) -> Int {

        let dict = [1:0, 2:31, 3:59, 4:90, 5:120, 6:151, 7:181, 8:212, 9:243, 10:273, 11:304, 12:334]

        func findDays(_ dateString:String) -> Int{
            let array = Array(dateString)
            let month = Int(String(array[0]) + String(array[1]))!
            let day = Int(String(array[3]) + String(array[4]))!
            return dict[month]! + day
    }

    let arriveAliceDate = findDays(arriveAlice)
    let leaveAliceDate = findDays(leaveAlice)
    let arriveBobDate = findDays(arriveBob)
    let leaveBobDate = findDays(leaveBob)

    if leaveAliceDate >= arriveBobDate && arriveAliceDate <= arriveBobDate {
        return (min(leaveAliceDate, leaveBobDate) - arriveBobDate + 1) 
    } else if leaveBobDate >= arriveAliceDate && arriveBobDate <= arriveAliceDate {
        return (min(leaveAliceDate, leaveBobDate) - arriveAliceDate + 1)
    } else {
        return (0)
    }
    }
}
