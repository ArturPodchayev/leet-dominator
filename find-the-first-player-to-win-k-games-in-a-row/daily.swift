func checkOverlap(radius int, xCenter int, yCenter int, x1 int, y1 int, x2 int, y2 int) bool {
    x1 -= xCenter
    x2 -= xCenter
    y1 -= yCenter
    y2 -= yCenter
    
    if x1 * x2 <= 0 {
        x1 = 0
    } else if x2 < 0 {
        x1 = x2
    }

    if y1 * y2 <= 0 {
        y1 = 0
    } else if y2 < 0 {
        y1 = y2
    }

    return x1*x1 + y1*y1 <= radius*radius
}
