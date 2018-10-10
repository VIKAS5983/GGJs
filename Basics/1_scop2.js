  var num=10;
  function func(){
    var num=40;
  };
console.log(num);



//If else statements


var a="Before If Else condition";

if(num==10){
  console.log("INside if condition");
}else{

  console.log("Inside else condition");
}




//Switch CAse condition

var condition="2";
//can be of type numbers or strings
//"2"===2 is not equal to it would pick default Condition
//2===2 is equal so it would print all the below conditions
switch(condition){
  case 1:
     console.log("Condition vlaue is one");
  case 2:
     console.log("Condition value is two ");
  case 3:
     console.log("Condition value is three");//No break statement so it would print all the below statemnets
  case "vikas":
     console.log("condition value is name vikas");
    default:
    console.log("DEfault condition value is evaluated");//DEfault is also considered in-case of no break points
}
