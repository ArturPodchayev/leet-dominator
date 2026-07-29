class OrderedStream {
    
    private String[] values;
    private int ptr;

    public OrderedStream(int n) {
        values = new String[n];
        ptr = 0;
    }
    
    public List<String> insert(int id, String value) {
        values[id - 1] = value;

        List<String> result = new ArrayList();
        while (ptr < values.length && values[ptr] != null) {
            result.add(values[ptr++]);
        }

        return result;
    }
}
