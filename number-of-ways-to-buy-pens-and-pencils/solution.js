var waysToBuyPensPencils = function(total, cost1, cost2) {
  let count = 0;
  const penCombos = Math.floor(total / cost1) + 1;
  for (let i = 0; i < penCombos; i++) {
	const totalAfterPens = total - (i * cost1);

    //add pencil counts
    //and +1 for the situation where we buy zero pencils.
    count += Math.floor(totalAfterPens / cost2) + 1;
  }
  return count;
};
