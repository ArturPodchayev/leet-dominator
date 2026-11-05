class Solution {
public:
    //Approach : Sorting + Binary Search

    //Time Complexity = O(m log m + n log m) =>
    /* Let n = arr1.size() and m = arr2.size().
    * Sorting arr2 takes O(m log m).
    * The loop visits all n elements of arr1.
    * For each element, binary search on arr2 takes O(log m).
    * All searches together take O(n log m).
    * Total: O(m log m + n log m).
    */

    //Space Complexity = O(log m) =>
    /* Variables such as left, right, mid, and found take O(1) space.
    * Binary search is iterative, so it takes O(1) extra space.
    * C++ std::sort typically uses O(log m) stack space.
    * Total auxiliary space: O(log m).
    */

    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        
        int n = arr2.size();

        //1.) First sort the array2
        sort(arr2.begin(), arr2.end());

        int ans = 0;

        //2.) Visit each element of arr1, storing the current value in x.
        for(int x : arr1){

            int left = 0;
            int right = n - 1;

            bool found = false;// Tracks whether any element in arr2 is within distance d of x.
            
            //Apply Binary Search using two pointers
            while(left <= right){

                int mid = left + (right - left)/2;

                //Compare x-d with arr2[mid]

                //Case-1: // Below the interval: search right.
                if(arr2[mid] < x - d){

                    left = mid + 1;//move left pointer to right for greater elements
                }

                //Case-2: // Above the interval: search left.
                else if(arr2[mid] > x + d){

                    right = mid - 1;//move right pointer to left for smaller values
                }

                //Case-3: //if x - d <= arr2[mid] <= x + d
                else{
                    found = true;
                    break;
                }
            }
            
            // Count x only if no element in arr2 is within distance d of x.
            if(!found){//if found is false
                ans++;
            }
        }

        //Finally return the output
        return ans;
    }
};
