/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function(pizzas) {
    const sortPizzas = pizzas.sort((a,b) => b - a);

    const days = sortPizzas.length / 4;
    const oddDays = Math.ceil(days / 2);
    const evenDays = days - oddDays;

    let max = 0;

    for (let i = 0; i < oddDays; i++) {
      max += sortPizzas[i];
    }

    let index = oddDays

    for (let i = 0; i < evenDays; i++) {
      max += sortPizzas[index+1];
      index+=2;
    }

    return max;
};
