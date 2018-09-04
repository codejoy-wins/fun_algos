// function that takes in avg_mph and distance and let's you know time.

// tell google to add this to their maps.  so people know when to expect a turn based on time not distance.  

function mph(avg_mph, miles){
    var time = miles/avg_mph;
    var minutes = time*60;
    return minutes;
}
// return time in minutes
console.log(mph(60,60)+" minutes");

console.log(mph(60,3)+" minutes");

console.log(mph(35,4.2)+" minutes");
console.log(mph(100,500)+" minutes");




// lets say you're going 60 miles per hour
// and your destination is 60 miles away
// it will take you 1 hour to get there

// lets say you're going 60 miles per hour
// and your destination is 120 miles away
// it will take you 2 hour to get there