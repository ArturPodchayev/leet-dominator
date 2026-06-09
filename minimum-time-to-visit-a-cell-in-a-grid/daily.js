const maxTotalValue=(t,a)=>{let e=1/0,l=-1;for(let a of t)e=Math.min(e,a),l=Math.max(l,a);return(l-e)*a};
