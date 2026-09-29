function invalidTransactions(t: string[]): string[] {
 let invalid=[]
    for(let i=0;i<t.length;i++){
        let sp=t[i].split(",")
        for(let j=0;j<t.length;j++){
            let val=t[j].split(",")
                if(i==j) continue
                if(sp[0]==val[0] && Math.abs(+val[1]- +sp[1])<=60 && sp[3]!==val[3]){
                    console.log({i,j})
                    invalid.push(t[i])  
                    break
                      
                    }
                   else if(parseInt(sp[2])>1000){
                   invalid.push(t[i])
                   break
                   }   
        }
                }
        
        return invalid

};
