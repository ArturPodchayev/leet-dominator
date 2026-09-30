var maxDepthAfterSplit = function(seq) {
    let res = new Array(seq.length).fill(0);
    let stack0 = [];
    let stack1 = [];
    
    for(let i=0; i<seq.length; i++){
        if(seq[i] === "("){
            if(stack0 <= stack1) {
                stack0.push("(");
                res[i] = 0;
            } else {
                stack1.push("(");
                res[i] = 1;
            }
        } else {
            if(stack0 <= stack1){
                stack1.pop();
                res[i] = 1;
            } else {
                stack0.pop();
                res[i] = 0;
            }
        }
    }
    
    return res;
};
