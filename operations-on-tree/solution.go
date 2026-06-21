package main

type LockingTree struct {
	lock       map[int]bool
	lockByUser map[int]int
	childs     map[int][]int
	parents    []int
}

func Constructor(parent []int) LockingTree {
	childs := map[int][]int{}
	for i := 0; i < len(parent); i++ {
		if _, f := childs[parent[i]]; !f {
			childs[parent[i]] = []int{}
		}
		childs[parent[i]] = append(childs[parent[i]], i)
	}
	return LockingTree{
		lock:       map[int]bool{},
		lockByUser: map[int]int{},
		parents:    parent,
		childs:     childs,
	}
}

func (this *LockingTree) Lock(num int, user int) bool {
	if v, f := this.lock[num]; !f || !v {
		this.lock[num] = true
		this.lockByUser[num] = user
		return true
	}
	return false
}

func (this *LockingTree) Unlock(num int, user int) bool {
	locked, f := this.lock[num]
	owner, _ := this.lockByUser[num]
	if f && locked && owner == user {
		this.lock[num] = false
		return true
	}
	return false
}

func (this *LockingTree) HasParentLock(num int) bool {
	parentNum := this.parents[num]
	for parentNum != -1 && !this.lock[parentNum] {
		parentNum = this.parents[parentNum]
	}
	return parentNum != -1
}

func (this *LockingTree) HasChildLock(parent int) bool {
	lock := false
	if numChilds, f := this.childs[parent]; f {
		for _, child := range numChilds {
			if this.lock[child] {
				this.lock[child] = false
				lock = true
			}
			if this.HasChildLock(child) {
				lock = true
			}
		}
	}
	return lock
}

func (this *LockingTree) Upgrade(num int, user int) bool {
	if v, f := this.lock[num]; !f || !v {
		parentLock := this.HasParentLock(num)
		if !parentLock {
			childsLock := this.HasChildLock(num)
			if childsLock {
				this.lock[num] = true
				this.lockByUser[num] = user
				return true
			}
		}
	}
	return false
}
