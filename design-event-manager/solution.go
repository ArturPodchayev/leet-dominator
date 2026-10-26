type Item struct {
    Id       int
	Priority int
	Index    int // index for heap.Fix()
}

type EventManager struct {
    items []*Item
	index map[int]*Item // O(1) lookup by event.Id
}

func Constructor(events [][]int) EventManager {
    em := EventManager{
        items: []*Item{},
		index: map[int]*Item{},
	}

    for id, e := range events {
        item := &Item{ Id: e[0], Priority: e[1], Index: id }
        em.items = append(em.items, item)
        em.index[e[0]] = item
    }

	heap.Init(&em)
	return em
}


func (this *EventManager) UpdatePriority(eventId int, newPriority int)  {
    item, ok := this.index[eventId] // get eventId indes in EventManager map for hoeap.Fix
	if !ok {
		return
	}
	item.Priority = newPriority
	heap.Fix(this, item.Index) // reorder items after new priority applied
}


func (this *EventManager) PollHighest() int {
    if this.Len() == 0 {
        return -1
    }
    r := heap.Pop(this).(*Item)
    return r.Id
}

// PQ stuff

func (e *EventManager) Len() int { return len(e.items) }
func (e *EventManager) Less(i, j int) bool {
	if e.items[i].Priority == e.items[j].Priority { // sorting by less event Id
		return e.items[i].Id < e.items[j].Id
	}
	return e.items[i].Priority > e.items[j].Priority // soring by highest priority
}
func (e *EventManager) Swap(i, j int) { // change elements, keeping it's Indexes intact
	e.items[i], e.items[j] = e.items[j], e.items[i]
	e.items[i].Index = i // fix new index to old
	e.items[j].Index = j // fix old index to new
}
func (e *EventManager) Push(x interface{}) {
	item := x.(*Item)
	item.Index = len(e.items)
	e.items = append(e.items, item)
	e.index[item.Id] = item
}
func (e *EventManager) Pop() interface{} {
	old := e.items
	n := len(old)
	item := old[n-1]
	item.Index = -1
	delete(e.index, item.Id)
	e.items = old[0:n-1]
	return item
}
