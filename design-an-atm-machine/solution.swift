class ATM {
  // Init dictionary with 20, 50, 100, 200, and 500 dollar banknotes
  var banknotes = [
    500 : 0,
    200 : 0,
    100 : 0,
    50 : 0,
    20 : 0
  ]
  
  // Deposit function that update values for keys 20,50,...500 in dictionary
  func deposit(_ banknotesCount: [Int]) {
    var balanceBeforeDeposit = getTotalBalance()
    banknotes[20]! += banknotesCount[0]
    banknotes[50]! += banknotesCount[1]
    banknotes[100]! += banknotesCount[2]
    banknotes[200]! += banknotesCount[3]
    banknotes[500]! += banknotesCount[4]
    var balanceAfterDeposit = getTotalBalance()
    print("Add \(balanceAfterDeposit - balanceBeforeDeposit) to \(balanceBeforeDeposit). TOTAL: \(balanceAfterDeposit)")
  }
  
  // Return total balance
  func getTotalBalance() -> Int {
    var sum = 0
    for (key, value) in banknotes {
      sum += key*value
    }
    return sum
  }
  
  // Withdrawing amount from total balance
  func withdraw(_ amount: Int) -> [Int] {
    print("Withdrawing: \(amount)")
    print("Current balance: \(banknotes)")
    
    var amount = amount
    
    // d500,d200... it's amount of banknotes with this value
    let d500 = calcCountOfBanknotesFor(500, &amount)
    let d200 = calcCountOfBanknotesFor(200, &amount)
    let d100 = calcCountOfBanknotesFor(100, &amount)
    let d50 = calcCountOfBanknotesFor(50, &amount)
    let d20 = calcCountOfBanknotesFor(20, &amount)

    // checking if we can give amount of money, if amount != 0 it means that
    // we dont have such amount or situation like:
    // we want to withdraw 600$, but we have 1-500$ and 3-200$
    if amount != 0 {
      print("Withdraw rejected!")
      // Return banknotes to balance if withdraw rejected
      banknotes[500]! += d500
      banknotes[200]! += d200
      banknotes[100]! += d100
      banknotes[50]! += d50
      banknotes[20]! += d20
      return [-1]
    } else {
      return [d20, d50, d100, d200, d500]
    }
  }
  
  // This function calculate count of banknotes bills and delete this amount from dictionary
  private func calcCountOfBanknotesFor(_ banknote: Int, _ amount: inout Int) -> Int {
    if amount >= banknote && banknotes[banknote]! > 0 {
      // We take min() to check if there's more amount/banknotes then banknotes in balance
      let withdrawCount = min(amount / banknote, banknotes[banknote]!)
      
      banknotes[banknote]! -= withdrawCount
      amount -= withdrawCount * banknote // reducing amount of money to withdraw
      
      return withdrawCount
    }
    return 0
  }
}
