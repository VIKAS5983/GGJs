/*It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages
 where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be
  reused by other Objects. Lets’s understand inheritance with example:*/


  class person{
    constructor(name){
      this.name=name;
    }

    getName(){
      return "Name of the person is "+ this.name;
    }
  }

  class student extends person{
    constructor(name,age){
      super(name);//Must call super constructor before initializing the variables in the current class
      this.age=age;
    }
    getAge(){
      return "Age is "+ this.age;
    }
    getDetails(){
      return this.getName()+ ", "+ this.getAge();
    }
  }


var p1=new student("ram",21);

console.log(p1.getDetails());
