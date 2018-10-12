// Class declaration
function autoMobile(color){
  this.color=color;

}

var vehicle1=new autoMobile("red");


console.log(vehicle1.color);


var object={0:'23',1:'geeksForGeeks',2:'true'};

//return an array  of the values of the property
console.log(Object.values(object));

//returns an array an array consisting of enumerable property [key, value] pairs of the object passed.
console.log(Object.entries(object));


//Returns the 1st index of the array
console.log(Object.entries(object)[1]);



var obj1=['x','z','y'];  //Arry object in javascritp

console.log(Object.values(obj1)); //It prints only the property values of the object
