class Solution {
    int idx;
    String exp;

    String getVarname() {
        StringBuilder ans = new StringBuilder();
        while (exp.charAt(idx)!=' ' && exp.charAt(idx)!=')') ans.append(exp.charAt(idx++));
        return ans.toString();
    }

    int eval(Map<String, Integer> m) {
        while (exp.charAt(idx)==' ' || exp.charAt(idx)==')') idx++;
        String prefix = exp.substring(idx);
        idx+=5;
        if (prefix.startsWith("(a")) return eval(m)+eval(m);
        else if (prefix.startsWith("(m")) return eval(m)*eval(m);
        else if (prefix.startsWith("(l")) {
            Map<String, Integer> curMap = new HashMap<>();
            curMap.putAll(m);
            while (true) {
                while (exp.charAt(idx)==' ' || exp.charAt(idx)==')') idx++;
                char curChar = exp.charAt(idx);
                if (curChar=='(' || curChar=='-'|| Character.isDigit(curChar)) return eval(curMap);
                String vi = getVarname();
                curChar = exp.charAt(idx);
                if (curChar == ')') return curMap.get(vi);
                curMap.put(vi, eval(curMap));
            }
        }
        idx-=5;
        char curChar = exp.charAt(idx);
        if (!(curChar == '-' || Character.isDigit(curChar))) return m.get(getVarname());
        String e = "";
        while (idx<exp.length() && exp.charAt(idx)!=')'&& exp.charAt(idx)!=' ') e  += exp.charAt(idx++);
        return Integer.parseInt(e);
    }

    public int evaluate(String expression) {
        exp = expression;
        return eval(new HashMap<>());
    }
}
