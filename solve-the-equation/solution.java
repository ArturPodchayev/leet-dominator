public String solveEquation(String equation) {
    equation = equation + "=";
    int i = 0;
    boolean pos = true;
    int[] res = new int[2];
    List<Integer> temp1 = new ArrayList<>();
    List<Integer> temp2 = new ArrayList<>();
    while (i < equation.length()) {
        char ch = equation.charAt(i);
        if (ch == '=') {
            i++;
            if (temp1.size() == 0) {
                temp1.add(res[0]);
                temp1.add(res[1]);
            } else {
                temp2.add(res[0]);
                temp2.add(res[1]);
            }
            res[0] = res[1] = 0;
            pos = true;
            continue;
        }
        if (ch == '+') {
            pos = true;
            i++;
        } else if (ch == '-')  {
            pos = false;
            i++;
        }
        if (equation.charAt(i) == 'x') {
            i++;
            res[0] += pos ? 1 : -1;
        } else if (Character.isDigit(equation.charAt(i))) {
            int index = 0;
            int start = i;
            while (i < equation.length() && Character.isDigit(equation.charAt(i))) {
               i++;
            }
            index = Integer.valueOf(equation.substring(start, i)); 
            if (equation.charAt(i) != 'x') res[1] += pos ? index : -index;
            else {res[0] += pos ? index : -index; i++;}
        }
        
    }
    res[0] = temp1.get(0) - temp2.get(0);
    res[1] = temp2.get(1) - temp1.get(1);
    
    if (res[0] == 0 && res[1] == 0) return "Infinite solutions";
    if (res[0] == 0 && res[1] != 0) return "No solution";
    else return "x=" + res[1] / res[0] + "";
}
