const smallestPalindrome=e=>{const n=e.length%2?e[e.length>>1]:"",t=[...e.slice(0,e.length>>1)].sort();return t.join("")+n+t.reverse().join("")};
