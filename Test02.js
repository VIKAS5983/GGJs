    var languages = { first : "C",
                     second : "Java", 
                      third : "Python",
                     fourth : "PHP", 
                      fifth : "JavaScript" };
 
    // iterate through every property of the
    // object languages and print all of them
    // using for..in loops
    for (itr in languages) 
    {
        console.log(itr+" : "+languages[itr] );
    }
