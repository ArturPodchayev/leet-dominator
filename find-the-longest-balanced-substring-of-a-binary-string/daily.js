const isBalanced=t=>{let n=!0;return function t(r){if(null===r)return 0;const a=t(r.left),e=t(r.right);return Math.abs(a-e)>1&&(n=!1),Math.max(a,e)+1}(t),n};
