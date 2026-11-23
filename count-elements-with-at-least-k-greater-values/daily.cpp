class ProductOfNumbers {
public:
    int lastZero = -1;
    vector<int> stream;

    ProductOfNumbers() {}
    
    void add(int num) {
        if (num == 0) {
            lastZero = stream.size();
            stream.push_back(0);
        } else {
            if (stream.empty() || stream.back() == 0) {
                stream.push_back(num);
            } else {
                stream.push_back(stream.back() * num);
            }
        }
    }
    
    int getProduct(int k) {
        int n = stream.size();
        if (lastZero >= n - k) {
            return 0;
        }

        if (k == n) {
            return stream.back();
        }

        int prev = stream[n - 1 - k];
        return prev == 0 ? stream.back() : stream.back() / prev;
    }
};
