/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    
    // build graph

    const g = Array.from({ length: n }, () => []); 

    for(let i=0;i<edges.length;i++) {

        const [u,v] = edges[i];
        g[u].push(v);
        g[v].push(u);
    }

    //console.log(g);

    const visited = new Array(n).fill(false);

    let result = 0;

    let component = [];
    
    let queue = [];

    for(let i=0;i<n;i++) {
       
        if(visited[i] == true) 
            continue;
        else {
            queue.push(i);
            visited[i] = true;
            component.push(i);
        }

        while(queue.length != 0) {
            
            node = queue.shift();

            for( adj of g[node]) {
                if(visited[adj] == false) {
                    queue.push(adj);
                    visited[adj] = true;
                    component.push(adj);
                }
            }
        }

        //console.log(component);

        // check complete or not

        let size = component.length;
        let complete = true;
        for( node of component) {
            // each node must connect to other remaining node
            // so there are size-1 edges
            if(g[node].length != size-1)
                complete = false;
        }

        if(complete == true)
            result++;

        // reset component and start to form next one and check
        component = [];


    }



    return result;
};
