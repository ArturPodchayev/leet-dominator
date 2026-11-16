class Solution {
    func digitSum(_ s: String, _ k: Int) -> String {
        
        var answer = s
        var temp = 0
        var count = 0

        while answer.count > k {

            var answerTemp = ""

            answer.forEach {

                temp += Int(String($0))!
                count += 1

                if count == k {
                    answerTemp += String(temp)
                    count = 0
                    temp = 0
                }

            }

            if count != k && count != 0 {
                answerTemp += String(temp)
                count = 0
                temp = 0
            }

            answer = answerTemp
        }

        return answer
    }
}
