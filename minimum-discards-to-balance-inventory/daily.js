const missingInteger=e=>{let t=e[0];for(let n=1;n<e.length&&e[n-1]+1===e[n];n++)t+=e[n];for(let n=t,r=new Set(e);;n++)if(!r.has(n))return n};
