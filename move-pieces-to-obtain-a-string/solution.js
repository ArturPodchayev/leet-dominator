var canChange = function(start, target) {
    if (start.split('_').join('') !== target.split('_').join('')) {
        return false;
    }
    
    indexStart = 0;
    indexTarget = 0;
    while(true) {
        while(start[indexStart] === '_' || !start[indexStart]) {
            if (indexStart === start.length) {return true;}
            indexStart++;
        }

        while(target[indexTarget] === '_' || !target[indexTarget]) {
            if (indexTarget === target.length) {return true;}
            indexTarget++;
        }
        if (start[indexStart] !== target[indexTarget]) {return false;}
        if (start[indexStart] === 'L' && indexStart < indexTarget ||
            start[indexStart] === 'R' && indexStart > indexTarget) {
            return false;
        }
        indexTarget++;
        indexStart++;
    }
    return true;
}
