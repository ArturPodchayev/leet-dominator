var nominals = [...]int{20, 50, 100, 200, 500}
var emptyWithdraw = []int{-1}

type ATM struct {
	banknotesCount []int
	withdraw       []int
}

func Constructor() ATM {
	return ATM{
		banknotesCount: make([]int, len(nominals)),
		withdraw:       make([]int, len(nominals)),
	}
}

func (a *ATM) Deposit(banknotesCount []int) {
	for i := range nominals {
		a.banknotesCount[i] += banknotesCount[i]
	}
}

func (a *ATM) Withdraw(amount int) []int {
	for i := len(nominals) - 1; i >= 0; i-- {
		a.withdraw[i] = amount / nominals[i]
		if a.banknotesCount[i] < a.withdraw[i] {
			a.withdraw[i] = a.banknotesCount[i]
		}
		if a.withdraw[i] != 0 {
			amount -= a.withdraw[i] * nominals[i]
		}
	}
	if amount != 0 {
		return emptyWithdraw
	}
	for i := range nominals {
		a.banknotesCount[i] -= a.withdraw[i]
	}
	return a.withdraw
}
