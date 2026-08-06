class Solution {
    public int smallestNumber(int n, int t) {
        
         if(productTheNumber(n,t)==0 || productTheNumber(n,t)%t==0) return n;

        return smallestNumber(n+1,t);
        
       

    }

    public int productTheNumber(int n, int t){
        int product = 1;
        
          while(n>0){
            int rem = n % 10;
            product = product * rem;
                n = n/10;
         }

         return product;
    }
}
