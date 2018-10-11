//The process of wrapping property and function within a single unit is known as encapsulation.



class Person{
  constructor(name,id){
    this.name=name;
    this.id=id;
  }
  add_Address(add){
    this.add=add;
  }
  details(){
    return "Name is= "+this.name+", Student id = "+ this.id+",Address=  "+ this.add;
  }
}

var person=new Person("sunny","14783");
person.add_Address("Delhi");
console.log(person.details());


/*encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of
 the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their
 are certain way by which we can restrict the scope of variable within the Class/Object*/


 function   Person1(fname,lname){
   var firstname= fname;
   var lastName=lname;
   var getDetails_noaccess=function(){
      return firstname+lastName;
   }

   this.getDetails_access=function(){
     return firstname+lastName;
   }
 }
