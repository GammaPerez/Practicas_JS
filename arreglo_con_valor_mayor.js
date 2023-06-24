function largestOfFour(arr) {
  let max = 0;
  let newArr = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(max) != -1) {
      newArr = arr[i];
    }
  }
  return newArr;
}

let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);