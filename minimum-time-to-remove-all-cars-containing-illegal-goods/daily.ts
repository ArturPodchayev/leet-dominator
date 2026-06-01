function minimumCost(cost: number[]): number {
    // 1. Sort the array in descending order to maximize the free discounts
    cost.sort((a, b) => b - a);

    let result = 0;

    // 2. Iterate through the candies
    for (let i = 0; i < cost.length; i++) {
        // 3. Every 3rd item is free (indices 2, 5, 8...). 
        // We only pay for items where i % 3 is not equal to 2.
        if (i % 3 !== 2) {
            result += cost[i];
        }
    }

    return result;
}
