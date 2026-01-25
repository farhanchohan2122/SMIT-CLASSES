var dob = new Date(prompt(`write age in this like (12 january 2001) `));
var dobTime = dob.getTime();
console.log(dobTime);

var date = new Date();
var dTime = date.getTime();
console.log(dTime);

var calAge = dTime - dobTime;
var final = Math.floor(calAge / (1000 * 60 * 60 * 24 * 365));
console.log(final);