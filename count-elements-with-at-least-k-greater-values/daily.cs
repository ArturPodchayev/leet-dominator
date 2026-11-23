public class ProductOfNumbers {
    private List<int> integers;
    public ProductOfNumbers() {
        integers=new List<int>();
    }
    public void Add(int num) {
        if(num==0) integers.Clear();
        integers.Add(num);
    }
    public int GetProduct(int k) {
        int res=1;
        while(k>0)
        {
            if(integers.Count-k<0) return 0;
            else res=res*integers[integers.Count-k];
            k--;
        }
        return res;
    }
}
