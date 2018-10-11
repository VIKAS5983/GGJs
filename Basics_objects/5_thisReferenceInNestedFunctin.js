let add = {
        num : 0,
        calc : function() {

        // logs the add object
        console.log(this + ' ')

        function innerfunc() {
            this.num += 1;

        // logs the window object
        console.log(this + ' ');

        return this.num

    } return innerfunc();
     }
};


console.log(add.calc());
console.log(add.calc());


/*In the above case when we call add.calc() , internally innerfunc() gets called frun calc function, so inside innerfunc this would refer to calc object
 which is not defined
*/




let bed = {
     num : 0,
     calc : function() {

         // logs the add object
         console.log(this + ' ')

        // using thisreference variable to
        // store the value of this
        thisreference = this;

         function innerfunc()
         {

          // using the variable to access the
          // context of the outer function
             thisreference.num += 1;

            // logs the add object
             console.log(thisreference + ' ');
             return thisreference.num;
         }
         return innerfunc();
     }
 };

//As we are using thisReference instead of this it would refer to the scope of the parent object reference;
console.log(bed.calc());
console.log(bed.calc());
