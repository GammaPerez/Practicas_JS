function confirmEnding(str, target) {
  let redex = new RegExp(target+"$","i");
  return redex.test(str);
}

confirmEnding("Bastian", "n");