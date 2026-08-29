function getXORSum(arr1: number[], arr2: number[]): number {
  let s1 = 0;
  let s2 = 0;

  let len = arr1.length > arr2.length ? arr1.length : arr2.length

  while(len) {
    if (arr1[len - 1]) {
      s1 ^= arr1[len - 1] 
    }
    
    if (arr2[len - 1]) {
      s2 ^= arr2[len - 1] 
    }

    len--
  }
  
  return s1 & s2;
};
