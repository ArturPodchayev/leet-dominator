function maxIceCream(costs: number[], coins: number): number {
    // Find the maximum cost to determine the range for counting sort
    const maxCost = Math.max(...costs);
    
    // Create a count array for counting sort
    const count = new Array(maxCost + 1).fill(0);
    
    // Count the frequency of each cost
    for (const cost of costs) {
        count[cost]++;
    }
    
    // Greedily buy ice cream bars starting from the cheapest
    let totalSpent = 0;
    let barsBought = 0;
    
    for (let price = 1; price <= maxCost; price++) {
        // For each price, try to buy as many bars as possible at that price
        for (let i = 0; i < count[price]; i++) {
            if (totalSpent + price <= coins) {
                totalSpent += price;
                barsBought++;
            } else {
                // If we can't afford this bar, we can't afford any more bars
                // since we're going in increasing order of price
                return barsBought;
            }
        }
    }
    
    return barsBought;
}
