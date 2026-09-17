var ATM = function() {
    this.notes = [0,0,0,0,0]
    this.denos = [20,50,100,200,500]
};

ATM.prototype.deposit = function(banknotesCount) {
    for(let i=0; i<5; i++)
        this.notes[i]+=banknotesCount[i]
};

ATM.prototype.withdraw = function(amount) {
    let n = this.notes
    let d = this.denos
    let result = [0,0,0,0,0]
    for(let i=4; i>=0; i--){
        result[i] = Math.min(Math.floor(amount/d[i]),n[i])
        amount -= result[i]*d[i]
    }
    if(amount > 0)
        return [-1]
    for(let i=4; i>=0; i--){
        n[i] -= result[i]
    }
    return result
};
