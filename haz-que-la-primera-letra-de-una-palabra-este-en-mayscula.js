function titleCase(str) {
  let frase = "";
  let arr = str.split(" ");
  //console.log(arr);
  for (let i = 0; i<arr.length;i++){
    let inicial = arr[i].charAt(0).toUpperCase();
    inicial+= arr[i].slice(1,arr[i].length).toLowerCase()+" ";
    frase+=inicial;
  }
  frase = frase.slice(0,frase.length-1);
  console.log(frase);
  return frase;
}

titleCase("I'm a little tea pot");