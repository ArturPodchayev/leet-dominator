class ATM {

    int[] denominations;
	int[] banknotes;

	public ATM() {
		this.denominations = new int[] { 20, 50, 100, 200, 500 };
		this.banknotes = new int[5];
	}

	public void deposit(int[] banknotesCount) {
		for (int i = 0; i < banknotesCount.length; i++) {
			banknotes[i] += banknotesCount[i];
		}
	}

	public int[] withdraw(int amount) {
		int[] withdawnNotes = new int[5];
		int i = 4;
		while (amount > 0 && i >= 0) {
			int requiredNoOfNotes = Math.min(amount / denominations[i], banknotes[i]);
			amount -= requiredNoOfNotes * denominations[i];
			withdawnNotes[i] = requiredNoOfNotes;
			banknotes[i] -= withdawnNotes[i];
			i--;
		}

		if (amount == 0) {
			return withdawnNotes;
		} else {
			for (int j = 0; j < 5; j++) {
				banknotes[j] += withdawnNotes[j];
			}
			return new int[] { -1 };
		}
	}
}
