const pivotArray = (n, p) => 
    [
        ...n.filter(v => v < p),
        ...n.filter(v => v === p),
        ...n.filter(v => v > p)
    ];
