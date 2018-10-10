function func(){
console.log("Function called ");
return "success";
}


//As the language is asynchronous it would print the timeout object first and later it would print the "function called" value
var ret=setTimeout(func, 10000);
console.log(ret);
