//this identifier


var a='GFG';

console.log(a);
//In the current scenarion this refers to the Global scope
this.a="Geeks for Geeks";
console.log(a);




//Functional Scope
function myFunc() {
  console.log( this.b );
}


var b ="GlobalScope";


var myObj1={
  b:"myObjectB",
  myFunc:myFunc
}

var myObj2={
  b:"myObj2B"
}

//This would print the Global value of a. This should happen only in Browser. Current in NodeJS it is printing it is printing undefined 
myFunc();

//This would call the myObj1 objects myFunc1 keyvalue method
myObj1.myFunc();

//When we call the function using the call value the functions this would refer to the scope of the argument object, myObj2 in this case.
myFunc.call(myObj2);

//This should print error , would see after the compilation
new myFunc();

//Ans: new foo() sets this to a brand new empty object thus we get undefined in the console log.
