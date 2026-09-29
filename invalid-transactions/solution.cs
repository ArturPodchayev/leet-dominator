public class Solution {
    private class Transaction {
        public string name;
        public int time;
        public int amount;
        public string city;
        public int id;

        public static Transaction Parse(string transString, int id) {
            var split = transString.Split(",");
            return new Transaction {
                name = split[0],
                time = int.Parse(split[1]),
                amount = int.Parse(split[2]),
                city = split[3],
                id = id,
            };
        }

        public bool TimeOverlap(Transaction o, int limit = 60) {
            return Math.Abs(this.time - o.time) <= limit;
        }
    }

    public IList<string> InvalidTransactions(string[] transactions) {
        return transactions
            .Select(Transaction.Parse)
            .GroupBy(t => t.name)
            .SelectMany(g => {
                var trans = g.OrderBy(t => t.time).ToArray();
                var isInvalid = trans.Select(t => t.amount > 1000).ToArray();
                for (int i = 0; i < trans.Length; i++) {
                    for (int j = i - 1; j >= 0 && trans[i].TimeOverlap(trans[j]); j--) {
                        if (trans[i].city != trans[j].city) {
                            isInvalid[i] = true;
                            isInvalid[j] = true;
                        }
                    }
                }
                return trans.Where((_, i) => isInvalid[i]);
            })
            .Select(t => transactions[t.id])
            .ToList();
    }
}
