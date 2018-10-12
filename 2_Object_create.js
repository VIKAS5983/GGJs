

function fruits(){
  this.name="fruits";
}

function apple(){
  fruits.call(this);
}
//Not completely satisfied with the example Will try to find a different example 
apple.prototype=Object.create(fruits.prototype);
var app=new apple();
console.log(app.name);
