class Solution {

    // Longest repeating prefix, suffix and substring
    int[] pref, suff, best;

    // First and last character of every segment
    char[] left, right;


    // Build the Segment Tree
    void build(String s, int node, int l, int r) {

        // Leaf node
        if (l == r) {

            char c = s.charAt(l);

            // A single character has length 1
            pref[node] = 1;
            suff[node] = 1;
            best[node] = 1;

            left[node] = c;
            right[node] = c;

            return;
        }

        int mid = (l + r) >>> 1;

        int lc = node << 1;
        int rc = lc | 1;

        // Build left and right children
        build(s, lc, l, mid);
        build(s, rc, mid + 1, r);

        // Merge both children
        pull(node, lc, rc, mid - l + 1, r - mid);
    }


    // Merge information from two child nodes
    void pull(int node, int lc, int rc, int lenL, int lenR) {

        // First character of the parent
        // comes from the left child
        left[node] = left[lc];

        // Last character of the parent
        // comes from the right child
        right[node] = right[rc];


        // ---------------------------------------------
        // Calculate Prefix
        // ---------------------------------------------

        int p = pref[lc];

        /*
         * If the complete left segment is made
         * of the same character and the boundary
         * characters are equal, the prefix continues
         * into the right segment.
         */
        if (p == lenL && right[lc] == left[rc]) {
            p = lenL + pref[rc];
        }


        // ---------------------------------------------
        // Calculate Suffix
        // ---------------------------------------------

        int su = suff[rc];

        /*
         * If the complete right segment is made
         * of the same character and the boundary
         * characters are equal, the suffix continues
         * into the left segment.
         */
        if (su == lenR && right[lc] == left[rc]) {
            su = lenR + suff[lc];
        }

        pref[node] = p;
        suff[node] = su;


        // ---------------------------------------------
        // Calculate Best
        // ---------------------------------------------

        /*
         * The best substring can be completely inside
         * either child.
         */
        int b = Math.max(best[lc], best[rc]);


        /*
         * If the boundary characters are equal,
         * a repeating substring can cross the boundary.
         */
        if (right[lc] == left[rc]) {
            b = Math.max(
                b,
                suff[lc] + pref[rc]
            );
        }

        best[node] = b;
    }


    // Update one character in the Segment Tree
    void update(int node, int l, int r, int idx, char c) {

        // Reached the required index
        if (l == r) {

            // Reset the leaf with the new character
            pref[node] = 1;
            suff[node] = 1;
            best[node] = 1;

            left[node] = c;
            right[node] = c;

            return;
        }

        int mid = (l + r) >>> 1;

        int lc = node << 1;
        int rc = lc | 1;

        // Move to the child containing idx
        if (idx <= mid) {
            update(lc, l, mid, idx, c);
        } else {
            update(rc, mid + 1, r, idx, c);
        }

        // Recalculate this node after the update
        pull(node, lc, rc, mid - l + 1, r - mid);
    }


    public int[] longestRepeating(
        String s,
        String queryCharacters,
        int[] queryIndices
    ) {

        int n = s.length();

        // Allocate arrays for the Segment Tree
        int size = 4 * n + 5;

        pref = new int[size];
        suff = new int[size];
        best = new int[size];

        left = new char[size];
        right = new char[size];


        // Build the initial Segment Tree
        build(s, 1, 0, n - 1);


        int q = queryCharacters.length();

        int[] ans = new int[q];


        // Process every query
        for (int i = 0; i < q; i++) {

            int idx = queryIndices[i];
            char c = queryCharacters.charAt(i);

            // Update the required position
            update(
                1,
                0,
                n - 1,
                idx,
                c
            );

            /*
             * The root represents the entire string,
             * so best[1] is the required answer.
             */
            ans[i] = best[1];
        }


        return ans;
    }
}
