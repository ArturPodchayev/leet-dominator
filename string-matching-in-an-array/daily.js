const processStr=e=>{let t="";for(const r of e)"#"===r?t+=t:"*"===r?t.length&&(t=t.slice(0,t.length-1)):"%"===r?t=t.split("").reverse().join(""):t+=r;return t};
