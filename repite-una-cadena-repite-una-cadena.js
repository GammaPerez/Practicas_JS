function repeatStringNumTimes(str, num) {
  let newStr = "";
  if(num > 0){
    for(let i = 0; i <num; i++){
      newStr += str;
    }
  }else{
    return "";
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes("abc", 3);