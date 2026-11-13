func numberOfComponents(properties [][]int, k int) int {
    for i := 0; i < len(properties); i++ {
        sort.Slice(properties[i], func(a, b int) bool {
            return properties[i][a] < properties[i][b]
        })
    }

    edges := [][]int{}

    for i := 0; i < len(properties)-1; i++ {
        for j := i+1; j < len(properties); j++ {
            if intersect(properties[i], properties[j], k) {
                edges = append(edges, []int{i, j})
            }
        }
    }

    comp := make([]int, len(properties))
    for i := 0; i < len(comp); i++ {
        comp[i] = i
    }

    for i := 0; i < len(edges); i++ {
        f, t := edges[i][0], edges[i][1]
        c1 := find(comp, f)
        merge(comp, t, c1)
        // c2 := find(comp, t)

        // comp[c1] = c2
    }

    d := map[int]bool{}
    for i := 0; i < len(comp); i++ {
        c := find(comp, i)
        d[c] = true
    }

    return len(d)
}

func find(comp []int, n int) int {
    if comp[n] != n {
        comp[n] = find(comp, comp[n])
    }
    return comp[n]
}

func merge(comp []int, comp1, comp2 int) {
    for comp[comp1] != comp1 {
        comp[comp1], comp1 = comp2, comp[comp1]
    }
    comp[comp1] = comp2
}

func intersect(a, b []int, k int) bool {
    i, j := 0, 0
    num := 0
    for i < len(a) && j < len(b) {
        for i + 1 < len(a) && a[i] == a[i+1] {
            i += 1
        }

        for j + 1 < len(b) && b[j] == b[j+1] {
            j += 1
        }

        if a[i] == b[j] {
            num += 1
            i += 1
            j += 1
        } else if a[i] < b[j] {
            i += 1
        } else {
            j += 1
        }

        if num >= k {
            return true
        }
    }
    return false
}
