class Solution 
{
    var arr: [Character] = []
    var ans: Set<String> = []
    var maxCount = Int.min

    func removeInvalidParentheses(_ s: String) -> [String] 
    {
        arr = Array(s)
        
        helper(0, 0, 0, "")

        return Array(ans)
    }

    private
    func helper(_ leftCount: Int, _ rightCount: Int, _ i: Int, _ str: String)
    {
        if rightCount > leftCount
        {
            return
        }
        else if i == arr.count
        {
            if rightCount == leftCount && str.count >= maxCount
            {
                if str.count > maxCount
                {
                    ans.removeAll()
                    maxCount = str.count
                }

                ans.insert(str)
            }
            
            return
        }

        helper(leftCount, rightCount, i + 1, str)

        let c = arr[i]
        helper(leftCount  + (c == "(" ? 1 : 0), 
               rightCount + (c == ")" ? 1 : 0), 
               i + 1, 
               str + String(c))
    }
}
