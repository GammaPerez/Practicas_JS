function findLongestWordLength(str) {
  let arr = str.match(/\w+\S/g);
  let largo = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i].length > largo){
      largo = arr[i].length;
    }
  }
  return largo;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");