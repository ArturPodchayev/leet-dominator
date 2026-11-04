class Solution {


static class TreeMultiSet<T> implements Iterable<T> {
    private final TreeMap<T, Integer> map;
    private int size;

    public TreeMultiSet() {
        this(false);
    }

    public TreeMultiSet(boolean reverse) {
        map = reverse
            ? new TreeMap<>(Collections.reverseOrder())
            : new TreeMap<>();
        size = 0;
    }

    public void clear() {
        map.clear();
        size = 0;
    }

    public int size() {
        return size;
    }

    public int setSize() {
        return map.size();
    }

    public boolean contains(T a) {
        return map.containsKey(a);
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int get(T a) {
        return map.getOrDefault(a, 0);
    }

    public void add(T a, int count) {
        if (count <= 0) return;

        map.merge(a, count, Integer::sum);
        size += count;
    }

    public void addOne(T a) {
        add(a, 1);
    }

    public void remove(T a, int count) {
        if (count <= 0) return;

        int cur = get(a);
        int removed = Math.min(cur, count);

        if (removed == cur) {
            map.remove(a);
        } else {
            map.put(a, cur - removed);
        }

        size -= removed;
    }

    public void removeOne(T a) {
        remove(a, 1);
    }

    public void removeAll(T a) {
        int cur = get(a);
        map.remove(a);
        size -= cur;
    }

    public boolean removeOneIfPresent(T a) {
    Integer count = map.get(a);

    if (count == null) {
        return false;
    }

    if (count == 1) {
        map.remove(a);
    } else {
        map.put(a, count - 1);
    }

    size--;
    return true;
}

    public T ceiling(T a) {
        return map.ceilingKey(a);
    }

    public T floor(T a) {
        return map.floorKey(a);
    }

    public T first() {
        return map.firstKey();
    }

    public T last() {
        return map.lastKey();
    }

    public T higher(T a) {
        return map.higherKey(a);
    }

    public T lower(T a) {
        return map.lowerKey(a);
    }

    public T pollFirst() {
        Map.Entry<T, Integer> entry = map.firstEntry();
        T key = entry.getKey();
        int count = entry.getValue();

        if (count == 1) {
            map.pollFirstEntry();
        } else {
            map.put(key, count - 1);
        }

        size--;
        return key;
    }

    public T pollLast() {
        Map.Entry<T, Integer> entry = map.lastEntry();
        T key = entry.getKey();
        int count = entry.getValue();

        if (count == 1) {
            map.pollLastEntry();
        } else {
            map.put(key, count - 1);
        }

        size--;
        return key;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>() {
            private final Iterator<Map.Entry<T, Integer>> iter =
                map.entrySet().iterator();

            private T current;
            private int remaining = 0;

            public boolean hasNext() {
                return remaining > 0 || iter.hasNext();
            }

            public T next() {
                if (remaining == 0) {

                    Map.Entry<T, Integer> entry = iter.next();
                    current = entry.getKey();
                    remaining = entry.getValue();
                }

                remaining--;
                return current;
            }
        };
    }
}
    TreeMultiSet<Integer> L, R;
    long sumL, sumR;

    void insert(int v){
        if(L.isEmpty() || L.last() >= v){
            L.addOne(v);
            sumL += v;
        }
        else{
            R.addOne(v);
            sumR += v;
        }
        balance();
    }

    void remove(int v) {
        if (L.removeOneIfPresent(v)) {
            sumL -= v;
        } else if (R.removeOneIfPresent(v)) {
            sumR -= v;
        }

        balance();
    }

    void balance(){
        while(L.size() > R.size() + 1){
            //remove L's last and add it to R
            int lval = L.pollLast();
            sumL -= lval;

            R.addOne(lval);
            sumR += lval;
        }

        while(L.size() < R.size()){
            int rval = R.pollFirst();
            sumR -= rval;
            L.addOne(rval);
            sumL += rval;
        }
    }

    long cost(){
        long med = L.last();
        return med*L.size() - sumL + sumR - med*R.size();
    }

    long[][] dp;

    public long minOperations(int[] nums, int x, int k) {
        //for each element i can store value rv, which is if i start sub-array of size x from here, what is the no of ops i need to perform to make all elements equal
        //so i can maintain two ms of equal size, l & r, and if size of l == r, then mid = (l.bottom() + r.top())/2, else if sz(r) = 1 + sz(l), then mid = r.top(), then i can remove this elmeent and move to next element and find it's rv!
        //now i have rv for all elements, from this i have to pick K rvs that sums up lowest with a constraint that the gap between each rv should be at least x, which can be solved using DP
        sumL = sumR = 0;
        int n = nums.length;
        L = new TreeMultiSet<>();
        R = new TreeMultiSet<>();

        int till = n - x + 1;
        long[] vals = new long[till];

        for(int i=0; i<x; ++i)insert(nums[i]);
        vals[0] = cost();

        for(int i=1; i<till; ++i){
            remove(nums[i-1]);
            insert(nums[i+x-1]);

            vals[i] = cost();
        }

        //that's it, now DP on this array
        dp = new long[till+1][k+1];
        for(int i=0; i<till; ++i){
            Arrays.fill(dp[i], -1);
        }
        return recur(0, k, x, till, vals);
    }

    long recur(int id, int k, int x, int n, long[] vals){
        if(k == 0)return 0;
        if(id >= n || (id + ((k-1)*x)) >= n)return (long)1e12;

        long ret = dp[id][k];
        if(ret  != -1)return ret;
        //i can use this or skip this
        ret = recur(id+1, k, x, n, vals);
        long useCost = vals[id] + recur(id+x, k-1, x, n , vals);
        if(useCost < ret)ret = useCost;
        return dp[id][k] = ret;
    }
}
