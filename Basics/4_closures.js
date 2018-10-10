
//closure is created when a child function keep the environment of the parent scope even after the parent function has already executed

//


function outer(out){

  function inner(ind){
    return ind+out;
  }
  return inner;
}


var in1=outer(10);
console.log(in1(9));
console.log(in1(20));



//Example 2:

//In this example we would to store a anonymous function at every index of an array.

function outer1()
{
    var arr = [];
    var i;
    for (i = 0; i < 4; i++)
    {
        // storing anonymus function
        arr[i] = function () { return i; }
    }

    // returning the array.
    return arr;
}
var get_arr = outer1();
//Below all would print the value of 4 as the latest value of i in the outer function scope is updated to 4
//In any case of closure it only remembers the reference to the variable in that scope it doesn't reflect the value for each loop time
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());




//Slight modification of the above code to make it work


function outerOwn()
{
    var arr = [];
    var i;
    function saveValues1( i ){
      function retu(){//If we pass an argument here it would assumes to get the argument from the user 
        return i;
      }
      return retu;
    }
    for (i = 0; i < 4; i++)
    {
        // storing a function
        arr[i] = saveValues1(i);
    }

    // returning the array.
    return arr;
}
var get_arrOwn = outerOwn();
console.log("Own function "+get_arrOwn[0]());
console.log("Own function "+get_arrOwn[1]());
console.log("Own function "+get_arrOwn[2]());
console.log("Own function "+get_arrOwn[3]());
