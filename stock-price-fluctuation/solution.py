import bisect

class StockPrice:
    def __init__(self):
        self.latest_time = 0
        self.timestamp_price_map = {}
        self.prices = []
        self.price_counter = {}

    def _remove_price(self, price):
        self.price_counter[price] -= 1
        if not self.price_counter[price]:
            del self.price_counter[price]
            # Want to pop element before where bisect_right would insert therefore subtract 1.
            pos = bisect.bisect_right(self.prices, price) - 1
            self.prices.pop(pos)

    def update(self, timestamp: int, price: int) -> None:
        self.latest_time = max(self.latest_time, timestamp)

        if timestamp in self.timestamp_price_map:
            old_price = self.timestamp_price_map[timestamp]
            self._remove_price(old_price)

        self.timestamp_price_map[timestamp] = price

        # Price counter is used to determine if we delete pop the price.
        if price in self.price_counter:
            self.price_counter[price] += 1
        else:
            self.price_counter[price] = 1
            bisect.insort(self.prices, price)

    def current(self) -> int:
        return self.timestamp_price_map[self.latest_time]

    def maximum(self) -> int:
        return self.prices[-1] if self.prices else float("inf")

    def minimum(self) -> int:
        return self.prices[0] if self.prices else float("-inf")
