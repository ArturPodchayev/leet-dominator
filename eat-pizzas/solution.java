class Solution {
    public long maxWeight(int[] pizzas) {
        int n=pizzas.length;
        int s=n/4;
        Arrays.sort(pizzas);

        int oCount=(s+1)/2;
        int eCount=s-oCount;
        long tPizzas=0;
        int l=n-1;

        for(int i=0;i<oCount;i++){
            tPizzas+=pizzas[l];
            l--;
        }
        for(int i=0;i<eCount;i++){
            l--;
            int pizza=pizzas[l];
            l--;
            tPizzas+=pizza;
        }
        return tPizzas;
    }
}
