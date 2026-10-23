import re 
class Solution:
    def eval(self, code:list) -> int|str:
        if not isinstance(code, list):
            try:    return int(code)
            except: # var
                for i in reversed(self.vars):   
                    if code in i: return i[code]
                else:   return code
        if code[0] == 'add':    return self.eval(code[1]) + self.eval(code[2])
        if code[0] == 'mult':   return self.eval(code[1]) * self.eval(code[2])
        if code[0] == 'let':
            self.vars.append(dict())
            while len(code) > 2:self.vars[-1][code.pop(1)] = self.eval(code.pop(2))
            a =  self.eval(code[1])
            self.vars.pop()
            return a
        return [self.eval(i) for i in code]
    def evaluate(self, expression: str) -> int:
        self.code = list()
        self.code.append(list())
        self.vars = list()
        self.vars.append(dict())
        for i in re.findall(r"\(|\)|[^\(\)\s]+",expression):
            if      i == '(':   self.code.append(list())
            elif    i == ')':   self.code[-2].append(self.code.pop())
            else:
                try:    self.code[-1].append(int(i))
                except: self.code[-1].append(i)
        return self.eval(self.code.pop())[0]
