package main

import "fmt"

type DSU struct {
	parent, size []int
}

func New(n int) *DSU {
	d := &DSU{
		parent: make([]int, n),
		size: make([]int, n),
	}
	for i := 0; i < n; i++ {
		d.parent[i] = i
		d.size[i] = 1 
	}
	return d
}

func(d *DSU) FindParent(u int) int {
	if d.parent[u] == u {
		return u
	}
	d.parent[u] = d.FindParent(d.parent[u])
	return d.parent[u]
}

func(d *DSU) Union(x, y int) {
	a := d.FindParent(x)
	b := d.FindParent(y)
	if(a != b) {
		if(d.size[a] < d.size[b]) {
			a, b = b, a
		}
		d.size[a] += d.size[b]
		d.parent[b] = a
	}
	return
}

func countPairs(n int, edges [][]int) int64 {
	d := New(n)
	for i := 0; i < len(edges); i++ {
		d.Union(edges[i][0], edges[i][1])
	}
	m := make(map[int]int)
	for _, val := range d.parent {
		p := d.FindParent(val)
		m[p]++
	}
	s := make([]int, len(m))
	i := 0
	for _, v := range m {
		s[i] = v
		i++
	}
	var ans int64
	ans = 0
	for i := 0; i < len(s); i++ {
		for j := i+1; j < len(s); j++ {
			p := s[i] * s[j]
			ans += int64(p)
		}
	}
	return ans
}
