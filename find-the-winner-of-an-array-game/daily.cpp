class Solution {
public:
    int maxNumberOfFamilies(int n, std::vector<std::vector<int>>& reservedSeats) {
        std::unordered_map<int, std::vector<int>> reservedSeatsMap; // Rows to column lists

        // Populate the reserved seats map
        for (const auto& seat : reservedSeats) {
            reservedSeatsMap[seat[0]].push_back(seat[1]);
        }

        int spotsForFamilies = 0;
        for (const auto& reservedSeatsInRow : reservedSeatsMap) {
            const auto& seats = reservedSeatsInRow.second;

            // Check if there are no reserved seats in the family spots
            if (std::none_of(seats.begin(), seats.end(), [](int s) {
                return s >= 2 && s <= 9;
            })) {
                spotsForFamilies += 2;
            }
            // Check if there are no reserved seats in specific family spots
            else if (std::none_of(seats.begin(), seats.end(), [](int s) {
                return s >= 2 && s <= 5;
            }) || std::none_of(seats.begin(), seats.end(), [](int s) {
                return s >= 4 && s <= 7;
            }) || std::none_of(seats.begin(), seats.end(), [](int s) {
                return s >= 6 && s <= 9;
            })) {
                spotsForFamilies += 1;
            }
        }

        // Calculate the total spots for families, considering unreserved rows
        return spotsForFamilies + (n - reservedSeatsMap.size()) * 2;
    }
};
