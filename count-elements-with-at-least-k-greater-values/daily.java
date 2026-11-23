class ProductOfNumbers {
    public static List<Integer> li;
    public static List<Integer> prefix;
    public ProductOfNumbers() {
        li = new ArrayList<>();
        prefix = new ArrayList<>();
        prefix.add(1);
    }
    
    public void add(int num) {
        if(num == 0) {
            li.clear();
            prefix.clear();
            prefix.add(1);
        }
        else{
            li.add(num);
            prefix.add(prefix.get(prefix.size()-1)*num);
        }
    }
    
    public int getProduct(int k) {
        if(k >= prefix.size()) return 0;
        else return prefix.getLast() / prefix.get(prefix.size() - k - 1);
    }
}
