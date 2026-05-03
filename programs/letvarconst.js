const PI=3.14;

//const PI=3.15; // This will throw an error as we cannot reassign a value to a constant variable

console.log(PI);

let age=25;

//let age=35; // This will throw an error as we cannot redeclare a variable declared with let

age=26;
console.log(age);


var name="Sandeep";

var name="Sandeep Kumar"; // This is allowed as var allows redeclaration
console.log(name);





function myFunc(){
    if(true){
        var x=10; // var is function scoped
    }
    console.log(x);
}

myFunc();
console.log(x)


