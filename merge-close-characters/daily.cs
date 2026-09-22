public class Solution
{
    private class Node
    {
        public int Product;
        public int[] Count;

        public Node(int k)
        {
            Product = 1 % k;
            Count = new int[k];
        }
    }

    private int k;
    private int n;
    private Node[] tree;

    public int[] ResultArray(int[] nums, int k, int[][] queries)
    {
        this.k = k;
        n = nums.Length;

        tree = new Node[4 * n];

        Build(nums, 1, 0, n - 1);

        int[] result = new int[queries.Length];

        for (int q = 0; q < queries.Length; q++)
        {
            int index = queries[q][0];
            int value = queries[q][1];
            int start = queries[q][2];
            int x = queries[q][3];

            // This update persists for all future queries.
            Update(1, 0, n - 1, index, value);

            // Get information for nums[start..n-1].
            Node range = Query(1, 0, n - 1, start, n - 1);

            result[q] = range.Count[x];
        }

        return result;
    }

    private void Build(int[] nums, int node, int left, int right)
    {
        if (left == right)
        {
            tree[node] = CreateLeaf(nums[left]);
            return;
        }

        int mid = left + (right - left) / 2;

        Build(nums, node * 2, left, mid);
        Build(nums, node * 2 + 1, mid + 1, right);

        tree[node] = Merge(tree[node * 2], tree[node * 2 + 1]);
    }

    private Node CreateLeaf(int value)
    {
        Node result = new Node(k);

        int remainder = value % k;

        result.Product = remainder;
        result.Count[remainder] = 1;

        return result;
    }

    private Node Merge(Node a, Node b)
    {
        Node result = new Node(k);

        // Product of the entire combined segment.
        result.Product = (int)((long)a.Product * b.Product % k);

        // Prefixes entirely inside the left segment.
        for (int r = 0; r < k; r++)
        {
            result.Count[r] += a.Count[r];
        }

        // Prefixes that start in the left segment
        // and continue through a prefix of the right segment.
        for (int r = 0; r < k; r++)
        {
            if (b.Count[r] == 0)
                continue;

            int newRemainder = (int)((long)a.Product * r % k);

            result.Count[newRemainder] += b.Count[r];
        }

        return result;
    }

    private void Update(int node, int left, int right, int index, int value)
    {
        if (left == right)
        {
            tree[node] = CreateLeaf(value);
            return;
        }

        int mid = left + (right - left) / 2;

        if (index <= mid)
        {
            Update(node * 2, left, mid, index, value);
        }
        else
        {
            Update(node * 2 + 1, mid + 1, right, index, value);
        }

        tree[node] = Merge(tree[node * 2], tree[node * 2 + 1]);
    }

    private Node Query(int node, int left, int right, int queryLeft, int queryRight)
    {
        if (queryLeft <= left && right <= queryRight)
        {
            return tree[node];
        }

        int mid = left + (right - left) / 2;

        if (queryRight <= mid)
        {
            return Query(node * 2, left, mid, queryLeft, queryRight);
        }

        if (queryLeft > mid)
        {
            return Query(node * 2 + 1, mid + 1, right, queryLeft, queryRight);
        }

        Node a = Query(node * 2, left, mid, queryLeft, queryRight);
        Node b = Query(node * 2 + 1, mid + 1, right, queryLeft, queryRight);

        return Merge(a, b);
    }
}
