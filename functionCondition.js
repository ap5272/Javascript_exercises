var six = 6;
var five = 5;
var string = "six";

function equal_six(even){
  if(even == "six"){
    return "This is a string";
  } else if (even == 6) {
    return "This is a integer";
  } else {
    return even +" is not 6 or six";
  }
}

console.log(equal_six(six));
console.log(equal_six(string));
console.log(equal_six(five));
