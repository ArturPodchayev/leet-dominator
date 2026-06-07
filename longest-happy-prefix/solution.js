const longestPrefix=e=>{if(e.length<2)return"";let l=e.length-1;for(;e.slice(0,l)!==e.slice(-l);)l--;return e.slice(0,l)};
