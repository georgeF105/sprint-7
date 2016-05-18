
/** Problem 1 **/
// Your code here.
function min(a,b){
  if(a<b){
    return a;
  }
  return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/** Problem 2 **/
// Your code here.
function isEven(x){

  if(x === 0){
    return true;
  }
  if(x === 1){
    return false;
  }
  if(x < 0){
    //console.log("x+2, x = " + x);
    return isEven(x + 2);
  }
  else{
    //console.log("x-2, x = " + x);
    return isEven(x - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/** Problem 3 **/
// Your code here.

function countBs(a){
  count = 0;
  for(var i = 0; i < a.length; i++){
    if(a.charAt(i) === "B"){
      count++;
    }
  }
  return count;
}

function countChar(a,b){
  count = 0;
  for(var i = 0; i < a.length; i++){
    if(a.charAt(i) === b){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4