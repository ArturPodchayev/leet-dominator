function normalizeTransaction(trxn) {
  const [name, time, amount, city] = trxn.split(',');

  return {
    name,
    time: Number(time),
    amount: Number(amount),
    city: city
  }
}

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  if (!transactions || !transactions.length) {
    return [];
  }

  // position matters not value, so we need to track each index
  const invalidTransactions = new Array(transactions.length).fill(false);
  const result = [];


  for (let i = 0; i < transactions.length; i++) {
    const currentTransaction = normalizeTransaction(transactions[i]);

    if (currentTransaction.amount > 1000) {
      invalidTransactions[i] = true;
    }

    for (let j = 0; j < transactions.length; j++) {
      if (i === j) continue;

      const otherTransaction = normalizeTransaction(transactions[j]);

      if (currentTransaction.name === otherTransaction.name && currentTransaction.city !== otherTransaction.city && Math.abs(currentTransaction.time - otherTransaction.time) <= 60) {
        invalidTransactions[i] = true;
        break;
      }
    }

    if (invalidTransactions[i]) {
      result.push(transactions[i]);
    }
  }

  return result;
};

