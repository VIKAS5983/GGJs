//Converting Values to string
//Converting Values to Numbers



//converting values to string

//String mode: https://www.geeksforgeeks.org/strict-mode-javascript/
//https://stackoverflow.com/questions/19323699/iterating-through-json-object-javascript


var a=34;

var b=toString(34);
var c=a.toString();
var d=new Date();
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(d.toString());


//Converting Values to Numbers

var n1="2345";
var n2="false";
var n3=true;
var n4="-1";

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));
console.log(Number(n2)==NaN);
if(Number(n2)==NaN)//== and === always return false for the Nan equality
{
  console.log("n2 is of type NaN");
}


if(isNaN(n2)){//We can either pass n2 or Number(n2)
  console.log("n2 is NaN");
}
