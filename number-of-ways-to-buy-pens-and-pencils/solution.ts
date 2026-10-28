function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
    const maxPrice = Math.max(cost1, cost2);
    const minPrice = Math.min(cost1, cost2);
    const mostForMaxPrice = Math.floor(total / maxPrice);

    let count = 0;
    for(let i = 0; i <= mostForMaxPrice; i++) {
        count += Math.floor((total - maxPrice * i) / minPrice) + 1
    }
    return count;
};
