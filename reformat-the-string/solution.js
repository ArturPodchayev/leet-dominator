/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {

    let digit = []
    let char = []

    for(let c of s){
        if(!Number(c) && 0!=c){
            char.push(c)
        }else{
            digit.push(c)
        }
    }
    let len = digit.length - char.length
    if( len==-1 || len==1 || len==0 ){
        let newstr = []
        let max = Math.max( digit.length , char.length )
        if(digit.length === max){
            for(let i=0 ; i<max ; i++){
            newstr.push(digit[i] , char[i])
            }
            return newstr.join('')
        }else{
            for(let i=0 ; i<max ; i++){
            newstr.push(char[i] , digit[i])
            }
            return newstr.join('')
        }

    }else{
        return ""
    }
};
