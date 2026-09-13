class Solution {
    static void print_imgs(const vector<uint32_t>& img1, const vector<uint32_t>& img2, const size_t extent)
    {
        for (const auto row : img1)
            println(cout, "{:0{}b}", row, extent);

        cout << endl;

        for (const auto row : img2)
            println(cout, "{:0{}b}", row, extent);
    }

public:
    int largestOverlap(vector<vector<int>>& img1, vector<vector<int>>& img2)
    {
        const int extent = img1.size();

   

        vector<uint32_t> bits1(extent);
        vector<uint32_t> bits2(extent);

        for (int row = 0; row < extent; ++row)
            for (int col = extent - 1; col >= 0; --col) {
                bits1[row] = (bits1[row] << 1) | img1[row][col];
                bits2[row] = (bits2[row] << 1) | img2[row][col];
            }


        int max_overlap = 0;

        for (int dx = -extent + 1; dx < extent; ++dx)
            for (int dy = -extent + 1; dy < extent; ++dy) {

                int current_overlap = 0;

                for (int r1_idx = 0; r1_idx < extent; ++r1_idx) {
                    const int r2_idx = r1_idx + dy;
                    if (r2_idx < 0 || r2_idx >= extent)
                        continue;

                    auto r1 = bits1[r1_idx]; 
                    const auto r2 = bits2[r2_idx];
                    if (dx >= 0)
                        r1 >>= dx;
                    else
                        r1 <<= -dx;

                    current_overlap += popcount(r1 & r2);
                }
                
                max_overlap = max(max_overlap, current_overlap);
            }

        return max_overlap;
    }
};
