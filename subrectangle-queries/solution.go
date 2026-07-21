type SubrectangleQueries struct {
    rect []int
    rows int
    cols int
}


func Constructor(rectangle [][]int) SubrectangleQueries {
    var subRQ SubrectangleQueries
    
    subRQ.rows = len(rectangle)
    subRQ.cols = len(rectangle[0])
    l := subRQ.rows * subRQ.cols

    a := make([]int, 0, l)
    for _, item := range rectangle {
        a = append(a, item...)
    }

    subRQ.rect = a
    return subRQ
}


func (this *SubrectangleQueries) UpdateSubrectangle(row1 int, col1 int, row2 int, col2 int, newValue int)  {
    for i := row1; i <= row2; i++ {
        for j := col1; j <= col2; j++ {
            index := (i * this.cols) + j
            this.rect[index] = newValue
        }
    }
}


func (this *SubrectangleQueries) GetValue(row int, col int) int {
    index := (this.cols * row) + col

    return this.rect[index]
}


/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * obj := Constructor(rectangle);
 * obj.UpdateSubrectangle(row1,col1,row2,col2,newValue);
 * param_2 := obj.GetValue(row,col);
 */
