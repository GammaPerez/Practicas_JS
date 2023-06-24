function getIndexToIns(arr, num) {
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  let indice = 0;
  /*console.log(newArr[newArr.length-1])
  if(newArr[newArr.length-1] >= num){
    return indice = newArr.length-1;
  }*/
  let i;
  for(i = 1; i<newArr.length;i++){
    if((newArr[i]>num && newArr[i-1]<num)||newArr[i]==num){
     indice = i;
    }
  }
  if(i == newArr.length && newArr[i-1]<=num){
    indice = i;
  }
  console.log(indice);
  return indice;
}

getIndexToIns([2, 5, 10], 15);