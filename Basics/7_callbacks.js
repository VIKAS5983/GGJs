function add(a,b,callback){
  console.log("value of a is "+ a+" b is "+ b);
  console.log("Sum of a and b is "+ (a+b));
  callback(a,b);
}

function callback(a,b){
  console.log("Multipllication of and b "+ a*b);
  console.log("Sum and Multiplication is calculated");
}

add(3,5,callback);
