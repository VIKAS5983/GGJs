//Objects in JAVASCRIPT can be created in two ways


var person={
  first_name:"Sumit",
  last_name:"Mishra",
  getMethod:function(){
              return "Person name is "+ this.first_name+ " "+this.last_name;
            },
  phone_number:{
                mobile:"Phone",
                Landline:"Landline"
              }
}


console.log(person.getMethod());
console.log("Person firstName "+ person.first_name+"  person last name "+ person.last_name);
console.log(" Phoner number is "+ person.phone_number.Landline);


//Defining the class and object using the proptype. This will be a public function accessible from anywhere
function pers(first,last){
this.firstName=first;
this.lastName=last;
};

pers.prototype.getFirstName=function(){
  return this.firstName;
};
//Defining the method using the prototype of the class
pers.prototype.getDetails = function () {
return "Person name is "+this.firstName+ " "+this.lastName;
};
var p =new pers("vikas","varakantham");
console.log(p.firstName);
console.log(p.getDetails());
console.log(p.getFirstName());



//Defining the function inside the object inside the class. STarting from ES6 class variable is introduced
class pers1{
  constructor(name){
    this.name=name;
  }

  getName(){
    return this.name;
  }
}


var p1=new pers1("Vikas Varakantham");
console.log(p1.getName());
