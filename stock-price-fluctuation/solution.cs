public class StockPrice {
    private int latestTime;
    private PriorityQueue<int, int> minPrice;
    private PriorityQueue<int, int> maxPrice;
    private Dictionary<int, int> timedPrice;
    public StockPrice() {
        minPrice = new PriorityQueue<int, int>(); // min heap
        maxPrice = new PriorityQueue<int, int>(Comparer<int>.Create((x, y) => y - x)); // reverse order, max heap
        timedPrice = new Dictionary<int, int>();
    }
    
    public void Update(int timestamp, int price) {
        latestTime = Math.Max(latestTime, timestamp);
        timedPrice[timestamp] = price;
        // update the history min and max price.
        minPrice.Enqueue(timestamp, price);
        maxPrice.Enqueue(timestamp, price);
    }
    
    public int Current() {
        return timedPrice[latestTime];
    }
    
    public int Maximum() {
        maxPrice.TryDequeue(out var timestamp, out var price);
        while(timedPrice[timestamp] != price) {
            maxPrice.TryDequeue(out timestamp, out price);
        }
        maxPrice.Enqueue(timestamp, price);
        return price;
    }
    
    public int Minimum() {
        minPrice.TryDequeue(out var timestamp, out var price);
        while(timedPrice[timestamp] != price) {
            minPrice.TryDequeue(out timestamp, out price);
        }
        minPrice.Enqueue(timestamp, price);
        return price;
    }
}
