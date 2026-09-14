func isRectangleOverlap(rec1 []int, rec2 []int) bool {
    x11, x12, y11, y12 := rec1[0],rec1[2],rec1[1],rec1[3] 
    x21, x22, y21, y22 := rec2[0],rec2[2],rec2[1],rec2[3]

    x_intersect := false
    y_intersect := false

    if x11 <= x21 && x21< x12 {
        x_intersect = true
    }
    if x21 <= x11 && x11< x22 {
        x_intersect = true
    }
    if y11 <= y21 && y21< y12 {
        y_intersect = true
    }
    if y21 <= y11 && y11< y22 {
        y_intersect = true
    }
    return y_intersect && x_intersect

}
