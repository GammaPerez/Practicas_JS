function mutation(arr) {
  let word = arr[0].toLowerCase();
  let search = arr[1].toLowerCase();
  //const re = new RegExp("/["+arr[1]+"]/","i");
  console.log(word);
  for(let i = 0;i < search.length;i++){
    if(word.indexOf(search.charAt(i)) == -1){
      return false;
    }
  }
  return true;
}
console.log(mutation(["Mary", "Army"]));