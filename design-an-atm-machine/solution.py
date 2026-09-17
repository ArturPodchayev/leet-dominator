class ATM:

    def __init__(self):
        self.denominations = [0] * 5

    def deposit(self, banknotesCount: List[int]) -> None:
        for deposit in range(len(banknotesCount)):
            self.denominations[deposit] += banknotesCount[deposit]
        print(self.denominations)

    def withdraw(self, amount: int) -> List[int]:
        values = [20, 50, 100, 200, 500]
        used = [0] * 5
        remaining = amount

        # Go from largest denomination to smallest
        for i in range(4, -1, -1):
            can_use = min(remaining // values[i], self.denominations[i])
            used[i] = can_use
            remaining -= can_use * values[i]

        # If exact amount achieved
        if remaining == 0:
            # Deduct from ATM
            for i in range(5):
                self.denominations[i] -= used[i]
            return used
        else:
            # Withdrawal failed
            return [-1]
