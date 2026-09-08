class Solution {
public:
    string solveEquation(string equation) {
        unordered_map<char,int> lhs = {{'x', 0}, {'n', 0}};
        unordered_map<char,int> rhs = {{'x', 0}, {'n', 0}};

        bool leftHandSide = true;
        char curOperator = '+';
        string curNum = "";
        char modify = 'n';
        string ans = "x=";
        for (int i = 0; i < equation.size(); i++) {
            if (equation[i] == '=') {
                if (curOperator  == '+') {
                    lhs[modify] += stoi(curNum);
                } else {
                    lhs[modify] -= stoi(curNum);
                }
                leftHandSide = false;
                curNum = "";
                curOperator = '+';
                continue;
            }

            // change operator
            if (ispunct(equation[i])) {
                if (curNum.size() != 0) {
                    // do manipulation
                    if (leftHandSide) {
                        if (curOperator == '+') {
                            lhs[modify] += stoi(curNum);
                        } else {
                            lhs[modify] -= stoi(curNum);
                        }
                    } else {
                        if (curOperator  == '+') {
                            rhs[modify] += stoi(curNum);
                        } else {
                            rhs[modify] -= stoi(curNum);
                        }
                    }

                    //reset curNUm
                    curNum = "";
                }
                curOperator = equation[i];
            }

            if (isalnum(equation[i])) {
                if (isdigit(equation[i])) {
                    curNum+=equation[i];
                    modify = 'n';
                } else {
                    if (curNum.size() == 0) curNum+='1';
                    modify = 'x';
                }
            }

            if (i == equation.size() - 1) {
                if (curOperator  == '+') {
                    rhs[modify] += stoi(curNum);
                } else {
                    rhs[modify] -= stoi(curNum);
                }
            }
        }
        cout << lhs['x'] << " " << lhs['n'] << endl;
        cout << rhs['x'] << " " << rhs['n'] << endl;

        if((lhs['x'] - rhs['x'] == 0) && (rhs['n'] - lhs['n'] != 0)) {
            return "No solution";
        }

        if (lhs['x'] == rhs['x']) {
            return "Infinite solutions";
        }

        int val = (rhs['n'] - lhs['n'])/(lhs['x'] - rhs['x']);
        ans+=to_string(val);
        return ans;

        
    }
};
