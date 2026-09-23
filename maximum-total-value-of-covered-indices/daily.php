function minOperations($nums, $x) {
    //sum all the elements in the array
    $sum = 0;
    for ($i=0; $i < count($nums); $i++) { 
    	$sum += $nums[$i];
    }

    // subtract x from sum of arr
    $subtractXSum = $sum - $x;
    # get the longest subArray that sum up to subtractXSum
    // If the start or right most elements are greater than x return - 1
    if($nums[0] > $x && $nums[count($nums)-1] > $x ) return -1;

    // If x is greater than the sum of the arrays
    if($sum < $x) return -1;

    if($sum == $x) return count($nums);
    
    $start = 0; $arrLength = 0; $movingSum = 0; 
    // Loop and add nums elements
    for ($end=0; $end < count($nums); $end++) { 
    	$movingSum += $nums[$end];
    	// 	Check if movingSum == subtractXSum
    	while ($movingSum >= $subtractXSum) {
			// 	get the length of the subArray. tempArrLength = (start - end + 1);
		    // 	Compare the tempArrLength & arrLength, and store in arrLength.
		    if($movingSum == $subtractXSum)
			    $arrLength = max($arrLength, ($end-$start +1));

		    $movingSum -= $nums[$start];
	    	$start++;
    	}
	    
    }
    
    return count($nums) - $arrLength;      
        
}
