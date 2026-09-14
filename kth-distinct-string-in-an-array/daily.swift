class Solution {
    struct Rect {
        let x: Int 
        let y: Int 
        let maxX: Int
        let maxY: Int 
        init(x: Int, y: Int, maxX: Int, maxY: Int) {
            self.x = x
            self.y = y
            self.maxX = maxX
            self.maxY = maxY
        }
    }
    func isRectangleOverlap(_ rec1: [Int], _ rec2: [Int]) -> Bool {
        let rect1 = Rect(x: rec1[0], y: rec1[1], maxX: rec1[2], maxY: rec1[3])
        let rect2 = Rect(x: rec2[0], y: rec2[1], maxX: rec2[2], maxY: rec2[3])
         
			return rect2.x < rect1.maxX && rect2.maxX > rect1.x && rect2.y < rect1.maxY && rect2.maxY > rect1.y
		}
    
}
