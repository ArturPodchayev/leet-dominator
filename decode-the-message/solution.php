class Solution {

    /**
     * @param String $key
     * @param String $message
     * @return String
     */
    function decodeMessage($key, $message) {
        $kk = str_replace(" ","",$key);
        $kk = array_unique(str_split($kk));
        array_push($kk," ");
        $newKey = [];
        $mm = str_split($message);
    
        $alphabet = range('a','z');
        foreach($kk as $i => $kkm){
           $newKey[] = $kkm;           
        }
        $ans = [];
        foreach($mm as $j => $mms){
            foreach($newKey as $ni => $nkkm){            
                if($nkkm == $mms){                   
                    if($mms == " "){
                        $ans[] = " ";
                    }else{    
                        $ans[] = $alphabet[$ni];                        
                    }                    
                }               
           } 
   
        }
        return implode($ans);     
    }
}
