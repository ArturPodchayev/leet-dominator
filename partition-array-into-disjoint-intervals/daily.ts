function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let run:ListNode=head;
    let N:number=0;
    while(run!=null)N++,run=run.next;

    if(N<=2)return new Array(2).fill(-1);

    let prev:ListNode=head;
    let curr:ListNode=head?.next;
    let nxt:ListNode=head?.next?.next;
    let d_points:number[]=[];
    let i=2;

    while(nxt!=null){
        if(curr.val < prev.val && curr.val < nxt.val){
            d_points.push(i)
        }
        else if(curr.val > prev.val && curr.val > nxt.val){
            d_points.push(i);
        }

        i++;
        prev=curr;
        curr=nxt;
        nxt=nxt?.next;
    }
    
    d_points.sort((a,b)=>a-b);
    let m=d_points.length;
    console.log(d_points)
    
    let MAX=Math.max(d_points[m-1]-d_points[0]);
    
    let MIN:number=Infinity;
    for(let j=0;j<m-1;j++){
        MIN=Math.min(d_points[j+1]-d_points[j], MIN);
    }

    if(!MIN || !MAX)return [-1,-1]
    return [MIN, MAX]
};
