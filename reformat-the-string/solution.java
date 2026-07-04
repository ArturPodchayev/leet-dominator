class Solution {
    public String reformat(String s) {
        if (s.length() == 1)
            return s;

        StringBuilder sb = new StringBuilder();
        Stack<Character> letters = new Stack();
        Stack<Character> digits = new Stack();

        for (char ch : s.toCharArray()) {
            if (Character.isLetter(ch)) {
                letters.push(ch);
            } else {
                digits.push(ch);
            }
        }

        if (Math.abs(digits.size() - letters.size()) > 1)   //suppose stack1 size is 5 and second size is 4 then it will work eg covid (stack1) & 2019 (stack2) return 5-4=1 but greater than 1 return false
            return "";

        while (!letters.isEmpty() && !digits.isEmpty()) {
            sb.append(letters.pop()).append(digits.pop());
        }

        if (!letters.isEmpty())
            sb.append(letters.pop());
        else if (!digits.isEmpty())
            sb.insert(0, digits.pop());

       // return (s.length() == sb.toString().length()) ? sb.toString() : "";
       //no need of above line as last test case stack dcba & stack 21  will already be passed as 4-2=2 i.e greater than 1
       
        return sb.toString(); 
    }
}
