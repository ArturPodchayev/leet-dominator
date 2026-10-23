function Token(type, value){
    this.type = type;
    this.value = value;
}
function Node(token){
    this.token = token;
    if(token.type === 'op'){
        this.children = [];
    }
}

const tokenizer = input => {
    const tokens = [];
    let i = 0;

    while (i < input.length){
        if(input[i] === '('){
            tokens.push(new Token('par', input[i]));

            let j = i + 1;
            for(; input[j] !== ' '; j ++){}
            tokens.push(new Token('op', input.slice(i + 1, j)))

            i += j - i;
            continue;
        }

        if(/[0-9]/.test(input[i]) || ['-', '+'].includes(input[i])){
            let j = i + 1;
            for(; /[0-9]/.test(input[j]); j ++){}
            tokens.push(new Token('num', +input.slice(i, j)))
            i += j - i;
            continue;
        }

        if(/[a-z]/.test(input[i])){
            let j = i + 1;
            for(; /[a-z0-9]/.test(input[j]); j ++){}
            tokens.push(new Token('var', input.slice(i, j)))
            i += j - i;
            continue;
        }

        if(input[i] === ')'){
            tokens.push(new Token('par', input[i]));
        }

        i++
    }

    return tokens;
}
const parser = tokens => {
    const stack = [{ children: [] }];

    for(const token of tokens){
        if(token.type === 'op'){
            stack.push(new Node(token));
        }
        else if(token.type === 'num' || token.type === 'var'){
            stack[stack.length - 1].children.push(new Node(token));
        }
        else if(token.type === 'par' && token.value === ')'){
            const head = stack.pop();
            stack[stack.length - 1].children.push(head);
        }
    }

    return stack[0].children[0];
}
const runner = (node, variables = {}) => {
    if(node.token.type === 'num'){
        return node.token.value;
    }

    if(node.token.type === 'var'){
        const variable = node.token.value;

        if(variables[variable] === undefined){
            throw new Error('Invalid variable name: ' + variable);
        }

        return variables[variable];
    }

    variables = {...variables};

    if(node.token.type === 'op'){
        const operator = node.token.value;

        if(['add', 'mult'].includes(operator)){
            const resolvedChildren = node.children.map(child => runner(child, variables));

            if(operator === 'add'){
                return resolvedChildren.reduce((sum, num) => sum + num, 0);
            }

            return resolvedChildren.reduce((mult, num) => mult * num, 1);
        }

        if(operator === 'let'){
            for(let i = 0; i < node.children.length - 1; i += 2){
                const variable = node.children[i].token.value;
                variables[variable] = runner(node.children[i + 1], variables);;
            }
            return runner(node.children[node.children.length - 1], variables);
        }

        throw new Error('Invalid operator: ' + operator);
    }
}
const evaluate = (expression) => {
    const tokens = tokenizer(expression);
    const ast = parser(tokens);
    return runner(ast);
};
