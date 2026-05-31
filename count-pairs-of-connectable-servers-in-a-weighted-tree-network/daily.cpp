class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {
        int n = asteroids.size();

        // find the range of asteroid masses
        int maxM = INT_MIN;
        int minM = INT_MAX;

        for (auto& e : asteroids) {
            maxM = max(maxM, e);
            minM = min(minM, e);
        }

        // counting sort: freq[i] = how many asteroids have mass i
        // this lets us process asteroids in sorted order without actually sorting
        vector<int> freq(maxM + 1, 0);
        for (auto& e : asteroids)
            freq[e]++;

        // process asteroids from smallest to largest (greedy)
        for (int i = minM; i <= maxM; i++) {

            if (freq[i] == 0)
                continue; // no asteroid of this mass, skip

            // eat all asteroids of mass i one by one
            while (freq[i]) {

                if (mass < i)
                    return false; // can't eat this asteroid, impossible to continue

                else if (mass >= 1e5)
                    return true;  // our mass exceeds max possible asteroid mass,
                                  // guaranteed to eat everything remaining

                else
                    mass += i;    // eat the asteroid, grow our mass

                freq[i]--;        // one less asteroid of this mass
            }
        }

        return true; // ate all asteroids successfully
    }
};
