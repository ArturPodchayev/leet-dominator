class ATM {
    banknotesStore: number[] = [0, 0, 0, 0, 0]
    denominations: number[] = [20, 50, 100, 200, 500]
    
    constructor() {

    }

    deposit(banknotesCount: number[]): void {
        for (let i = 0; i < this.banknotesStore.length; i++) {
            this.banknotesStore[i] += banknotesCount[i];
        }
    }

    withdraw(amount: number): number[] {
        let amnt = amount;
        const needBanknotes = [0, 0, 0, 0, 0];

        for (let i = this.banknotesStore.length - 1; i >= 0; i--) {
            if (amnt === 0 ){
                break;
            }

            const denom = this.denominations[i];

            if (amnt < denom) {
                continue;
            }

            // need banknotes
            let needDenomBanknotes = Math.floor(amnt / denom);
            const haveDenomBanknotes = this.banknotesStore[i]; 
            needDenomBanknotes = Math.min(needDenomBanknotes, haveDenomBanknotes); 

            // if we have banknotes
            if (needDenomBanknotes > 0) {
                // remains
                amnt -= needDenomBanknotes * denom;

                needBanknotes[i] = needDenomBanknotes;
            }
        }

        if (amnt > 0){
            return [-1];
        }

        for (let i = 0; i < this.banknotesStore.length; i++) {
            this.banknotesStore[i] -= needBanknotes[i];
        }

        return needBanknotes;
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
