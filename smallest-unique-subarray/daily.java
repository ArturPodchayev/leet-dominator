class Solution {
    public int minAddToMakeValid(String s) {

        // Number of unmatched '('
        int open = 0;

        // Number of brackets we need to add
        int additions = 0;

        for(int i = 0; i < s.length(); i++) {

            // Opening bracket → it needs a ')' later
            if(s.charAt(i) == '(') {
                open++;
            }

            // Closing bracket
            else if(open > 0) {

                // Match it with an existing '('
                open--;
            }

            else {

                // No '(' available to match this ')'
                // So we need to add a '('
                additions++;
            }
        }

        // Any remaining '(' need a ')' each
        return additions += open;
    }
}
