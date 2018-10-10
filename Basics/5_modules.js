//Modules are small units of independent, reusable code that is desired to be used as the building blocks in
//creating a non-trivial Javascript application. Modules let the developer define private and public members separately,
// making it one of the more desired design patterns in JavaScript paradigm.


function Rectangle() {
    var l;
    var w;
  function create(length,widgth){
     l=length;
     w=widgth;
  }

  function getParameter(){
    return 2*(l+w);
  }

  function getArea(){
    return l*w;
  }

  var modRec={create:create,
              getParameter:getParameter,
              getArea:getArea};

return modRec;
}

var rec=Rectangle();

rec.create(4,5);

console.log("Parameter is "+ rec.getParameter());
console.log("Area is "+rec.getArea());
