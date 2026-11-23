type ProductOfNumbers struct {
    rightToLeft []int
}


func Constructor() ProductOfNumbers {
    return ProductOfNumbers{
        rightToLeft: []int{},
    }    
}


func (this *ProductOfNumbers) Add(num int)  {
    // if current num is 0, that's means the prefix can be clean
    // because 0 * any number still equal 0
    if num == 0 {
        this.rightToLeft = []int{}
        return
    }

    if len(this.rightToLeft) == 0 {
        this.rightToLeft = append(this.rightToLeft, num)
    } else {
        this.rightToLeft = append(this.rightToLeft, num * this.rightToLeft[len(this.rightToLeft)-1])
    }
}

func (this *ProductOfNumbers) GetProduct(k int) int {
    // according the question, You can assume that always the current list has at least k numbers
    // so if len is shorter than k, that's means it's must have 0, then answer is 0
    if k > len(this.rightToLeft) {
        return 0
    }

    total := this.rightToLeft[len(this.rightToLeft)-1]

    if k == len(this.rightToLeft) {
        return total
    }

    return total / this.rightToLeft[len(this.rightToLeft)-k-1]
}


/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(num);
 * param_2 := obj.GetProduct(k);
 */
