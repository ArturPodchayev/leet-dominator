type Price struct{
    value int
    minHeapIndex int
    maxHeapIndex int
}

type MinHeap []*Price
func (h MinHeap) Len() int{
    return len(h)
}
func (h MinHeap) Less(i, j int) bool{
    return h[i].value < h[j].value
}
func (h MinHeap) Swap(i, j int){
    h[i], h[j] = h[j], h[i]
    h[i].minHeapIndex = i
    h[j].minHeapIndex = j
}
func (h *MinHeap) Push(x interface{}){
    item := x.(*Price)
    item.minHeapIndex = len(*h)
    *h = append(*h, item)
}
func (h *MinHeap) Pop()interface{}{
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[:n-1]
    return item
}

type MaxHeap []*Price
func (h MaxHeap) Len() int{
    return len(h)
}
func (h MaxHeap) Less(i, j int) bool{
    return h[i].value > h[j].value
}
func (h MaxHeap) Swap(i, j int){
    h[i], h[j] = h[j], h[i]
    h[i].maxHeapIndex = i
    h[j].maxHeapIndex = j 
}
func (h *MaxHeap) Push(x interface{}){
    item := x.(*Price)
    item.maxHeapIndex = len(*h)
    *h = append(*h, item)
}
func (h *MaxHeap) Pop() interface{}{
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[:n-1]
    return item
}

type StockPrice struct {
    h   map[int]*Price
    maxTimeStamp    int
    maxTimeStampPrice int
    minHeap MinHeap
    maxHeap MaxHeap
}


func Constructor() StockPrice {
    return StockPrice{h : make(map[int]*Price)}
}


func (this *StockPrice) Update(timestamp int, price int)  {
    if timestamp >= this.maxTimeStamp{
        this.maxTimeStamp = timestamp
        this.maxTimeStampPrice = price
    }

    if p, exist := this.h[timestamp]; exist {
        p.value = price
        heap.Fix(&this.minHeap, p.minHeapIndex)
        heap.Fix(&this.maxHeap, p.maxHeapIndex)
    } else {
        p = &Price{value : price}
        this.h[timestamp] = p
        heap.Push(&this.minHeap, p)
        heap.Push(&this.maxHeap, p)
    }

}


func (this *StockPrice) Current() int {
    return this.maxTimeStampPrice
}


func (this *StockPrice) Maximum() int {
    return this.maxHeap[0].value
}


func (this *StockPrice) Minimum() int {
    return this.minHeap[0].value
}


/**
 * Your StockPrice object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Update(timestamp,price);
 * param_2 := obj.Current();
 * param_3 := obj.Maximum();
 * param_4 := obj.Minimum();
 */
