function braceExpansionII(expression: string): string[] {
    let start = 0;
    function braceExpansion(expr: string) {
        let ret = new Set<string>();
        if (start >= expr.length) {
            return ret;
        }

        let curr = new Set<string>();
        curr.add("");
        while (start < expr.length) {
            if (expr.charAt(start) == '{'){
                start += 1;
                curr = mul(curr, braceExpansion(expr));
            } else if (expr.charAt(start) == ','){
                ret = add(ret, curr);
                curr = new Set();
                curr.add("");
                start += 1;
            } else if (expr.charAt(start) == '}'){
                ret = add(ret, curr);
                start += 1;
                return ret;
            } else {
                curr = append(curr, expr.charAt(start));
                start += 1;
            }
        }

        ret = add(ret, curr);
        return ret;
    }
    
    function add(set1: Set<string>, set2: Set<string>):Set<string>{
        set2.forEach(item => set1.add(item));
        return set1;
    }
    
    function mul(set1: Set<string>, set2: Set<string>):Set<string>{
        let set3 = new Set<string>();
        set1.forEach(item1 => {
            set2.forEach(item2 => {
                set3.add(item1 + item2);
            })
        })
        return set3;
    }
    
    function append(bag: Set<string>, c: string):Set<string>{
        let ret = new Set<string>();
        bag.forEach(item => ret.add(item + c));
        return ret;
    }

    let ret = braceExpansion(expression);
    let retList = Array.from(ret);
    return retList.sort();
};
