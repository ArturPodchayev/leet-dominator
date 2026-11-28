func maximumSaleItems(items [][]int, budget int) int {
    n := len(items)

    cheapestPrice := int64(items[0][1])
    for _, item := range items {
        if int64(item[1]) < cheapestPrice {
            cheapestPrice = int64(item[1])
        }
    }

    factorCount := make([]int, n+1)
    for _, item := range items {
        factorCount[item[0]]++
    }

    // multipleCount[f] = number of items whose factor is a multiple of f.
    multipleCount := make([]int, n+1)
    for factor := 1; factor <= n; factor++ {
        for multiple := factor; multiple <= n; multiple += factor {
            multipleCount[factor] += factorCount[multiple]
        }
    }

    // Each item contributes one "doubled" slot per free copy it can earn.
    type slot struct {
        price     int64
        available int64
    }
    slots := []slot{}
    for _, item := range items {
        price := int64(item[1])
        if price >= 2*cheapestPrice {
            continue
        }

        freeCopies := int64(multipleCount[item[0]] - 1)
        if freeCopies > 0 {
            slots = append(slots, slot{price, freeCopies})
        }
    }
    sort.Slice(slots, func(i, j int) bool {
        return slots[i].price < slots[j].price
    })

    remaining := int64(budget)
    var doubledCopies int64
    for _, slot := range slots {
        take := slot.available
        if remaining/slot.price < take {
            take = remaining / slot.price
        }

        doubledCopies += take
        remaining -= take * slot.price

        if remaining < slot.price {
            break
        }
    }

    return int(2*doubledCopies + remaining/cheapestPrice)
}
