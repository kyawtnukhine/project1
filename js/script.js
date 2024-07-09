// Addition optration
let x=10;
let y= 100;
let z=1000;
{

// let result = x+ y+ z;
// console.log(result);
}

{
// let result = z-y;
// console.log(result);
}



// equal vlue && equal data type ===
{
    let x = 5;
    let y = "5";
    let z = 5;
    let greet = "Hello";

    // let result1 = x===y;   // equal vlue && equal data type ===   (== vlue only)
    // console.log(result1);


      let result = x != y;
    //console.log(result);
    //console.log( x != greet);
}


  // Ternary Operators
  // variablename = (condition) ? "value1" : "value2" 
  {
   let age = 20;
   let result = (age > 18)? "University Student" : "Hight School Student";
  //console.log(result);
 
 
  let color = "blue";
  let fruit = (color == "red")? "Apple" : "Orange";
  //console.log(fruit);
 }

 

 // Functions

//  function name(parameter1, parameter2, parameter3){   //()parentheses  
//   code
//  }

 
 function Name (){
  //console.log("Mg Mg");
  //console.log("Ag Ag");
  //console.log("Su Su");
 }
//  function call
 Name();

function Calculate(){
  //console.log(200 + 300 + 400);
  //console.log(500 - 400);
  //console.log(60 * 5);
  //console.log(19 / 9);
}

Calculate();

function productFunction(p1, p2){
 let x = 100 / 5;
 //console.log(x);
}
productFunction();

function runFunction(p1 , p2){
let x = p1 * p2;
console.log(x);
}
runFunction(2,15);
runFunction(3,15);
runFunction(4,15);
runFunction(5,15);

function functionCall(p1, p2, p3, p4, p5){
let x = p1+ p2+ p3+ p4+ p5;
//console.log(x);
}
functionCall("Mg Mg", " is"," 16"," years"," old.");
functionCall (10, 20,30,40,50);




// function Return & Why Function
function testFunction(x, y){
  return x*y;                  //return is notic
};
let answer  = testFunction(20,60);
//console.log(answer);
  
let answer2 = testFunction(20,2);
//console.log(answer2); 

// function use as variables

function fruit(){
  return "apple";
  
}

function color(){
  return "red";
}
//console.log("this fruit is "+ fruit()+ " and this color is " +color()+".");

// Objects 
const objectName = {
  name:"Honda",
  model:2024,
  weight:"900 kg",
  canOrder:true,
  aboutCar: function(){
    return this.name + "is very beautiful and  "+this.model+" model is very nice."
  }
};

// objectName.propertyName
// objectName["propertyName"]
//console.log([objectName]);
//console.log(objectName.aboutCar());
//console.log(objectName.name);
const Mine = {
  name:"Kyawt",
  age : 20,
  id:12345,
  add:"Yangon",
};
 //console.log(Mine.name);
 //console.log(Mine.age);
 //console.log(Mine.id);
 //console.log(Mine.add);

 Mine.name= "Nu";
      // OR

 //console.log(Mine["name"]);
 //console.log(Mine["age"]); 
 //console.log(Mine["id"]); 
 //console.log(Mine["add"]); 
 
//String

let carName = 'this is "TOYOTA" car.'; 
//console.log(carName);

//Length   
let Text="ABCDEFGHIJK LOP QRSTU WXYZ";  //string ALL Count
console.log(Text.length);

//slice(start, end)
//substring(start, end)
//substr(start, length)

let text = "Apple, Banana, Kiwi";
//console.log(text.slice(7,13));

//replace()
//replaceAll()

let test = "Please Visit Microsoft!";

//test.replace("first","second")

console.log(test.replace("Microsoft","W3school")); 

//toUpperCase()
//toLowercase()

let greeting = "hello Myanmar";
//console.log(greeting.toUpperCase());
//console.log(greeting.toLowerCase());

// trim()

let greet ="             hello Word     ";
//console.log(greet.trim());  

//padding
let pad ="A";
//console.log(pad.padStart(4,"#"));

//charAt
//charCodeAt
let alph ="Hello Word Myanmar";
console.log(alph.charAt(1));
console.log(alph.charCodeAt(13));

let text2 = "Myanmar Solo";
console.log(text2[0]); 

//split
let txt = "a,b,c,d,e,f";
console.log(txt.split(2));
