function truncateString(str, num) {
  let newStr;
  if(str.length > num){
    newStr = str.slice(0,num)+"...";
    console.log(newStr);
  }else{
    console.log(str)
    return str;
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);