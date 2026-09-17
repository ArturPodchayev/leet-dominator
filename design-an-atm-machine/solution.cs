public class ATM {
    long[] arr; // 20 50 100 200 500
    long[] counts;
    public ATM() {
        counts = new long[5];
        arr = new long[]{20,50,100,200,500};
    }
    public void Deposit(int[] banknotesCount) {
        for(int i = 0; i < banknotesCount.Length;i++)
            counts[i]+= banknotesCount[i];
    }
    
    public int[] Withdraw(int amount) {
        long[] res = new long[5];
        for(int i = 4;i >= 0 && amount > 0;i--){
            Console.WriteLine(counts[i]);
            if(amount < arr[i] || counts[i] == 0) continue;
            long div = amount / arr[i];
            long banknotes = Math.Min(div,counts[i]);
            amount -= ((int)(banknotes *  arr[i]));
            counts[i]-= banknotes;
            res[i] = banknotes;
        }
        if(amount > 0){
            for(int i = 0; i < res.Length;i++)
                counts[i]+= res[i];
            return new int[]{-1};
        }
        int[] res2 = new int[5];
        for(int i = 0; i < res.Length;i++) res2[i] = (int) res[i];
        return res2;
    }
}
