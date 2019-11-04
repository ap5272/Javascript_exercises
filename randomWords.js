var anim = ["puppies", "kittens", "worms"];
var time = ["morning", "afternoon", "evening"];
var drink = ["water", "soda", "juice"];

console.log("I like playing with " + anim[Math.floor( Math.random() * anim.length )] + " during the " time[Math.floor( Math.random() * time.length )] + "while drinking a glass of " + drink[Math.floor( Math.random() * drink.length )]);
