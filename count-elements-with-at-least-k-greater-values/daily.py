class ProductOfNumbers:

    def __init__(self):
        # Start with 1 as a neutral base for multiplication
        self.prefix = [1]

    def add(self, num: int) -> None:
        if num == 0:
            # Reset the list when 0 is added so we never divide by 0 later
            self.prefix = [1]
        else:
            # Multiply the previous running product by the new number
            self.prefix.append(self.prefix[-1] * num)

    def getProduct(self, k: int) -> int:
        # If k >= len(self.prefix), a 0 was added within the last k numbers
        if k >= len(self.prefix):
            return 0
        # Cancel out earlier numbers by dividing by the prefix k steps ago
        return self.prefix[-1] // self.prefix[-1 - k]
