const prompt = require("prompt-sync")();



//Input ile 5 eded daxil edin. 7'ye beraber olanların sayini tapib ekrana yazdırin

//let counter = +prompt("Enter a counter: ");

//function counterOfNumbers(counter) {
//for (let i = 0; i < counter; i++) {
//let number = +prompt("Enter a number: ");

//if (number == 7) {
//console.log("Number of equal 7:", number);
//} else {
//console.log("Number of not equal 7:", number);
//}
//}
//}

//counterOfNumbers(counter);


//Input ile daxil olunan ədədin bölənlərinin cəmini tapın.

//let number = +prompt("Enter the number: "");

//function sumOfDivisors(number) {
//let sum = 0;

//for (let i = 1; i <= number; i++) {
//if (number % i === 0) {
//sum += i;
//}
//}

//console.log("Bölənlərin cəmi:", sum);
//}
//sumOfDivisors(number);



//$$$ Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın.


//let number = +prompt("Enter the number: ");

//function largestNumber(number) {

//let result = 0;

//while (number > 0) {
//let digit = number % 10;
//if (digit > result) {
//result = digit
//}
//number = Math.floor(number / 10);
//}

//console.log("Ən böyük rəqəm:", result);

//}
  
//largestNumber(number);



//Daxil edilen ededlerin ededi ortasini tapin


//let counter = +prompt("Enter a counter: ");
//function averageNumber(counter) {
//let sum = 0;

//for (let i = 1; i <= counter; i++) {
//let number = +prompt("Enter a number: ");

//sum += number;
//}

//let avg = sum / counter;
//console.log("Ededi orta:", avg);

//}
//averageNumber(counter);

  

//Daxil etdiyiniz ededde nece 0-var

//let number = +prompt("Enter a number: ");
//function equaltoZero(number){
//for (let i = 1; i <= number; i++) {
//let remember = number % 10;

//if (remember == 0) {
//console.log ("0-a beraberdir" , remember)
//}
//number = (number - remember) / 10;

//}
//}
//equaltoZero(number);




//Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin.


//function findMiddleNumber() {

//let middle = 0;
  
//for (let i = 0; i < 3; i++) {
//let number =+prompt ("Enter a number: ");

//if (middle == 1) {
//console.log ("Middle number: ", number);
//}
    
//middle++;
    
//}

//}

//findMiddleNumber();



//Input ile daxil olunan ədədin bölənlərinin sayını tapın.

//let number = +prompt("Enter a number: ");
//function numberofDivisors(number) {
//let divisor = 0;

//for (let i = 1; i <= number; i++) {
//if (number % i === 0) {
//divisor++;
//}
//}

//console.log("Bölənlərin sayı:", divisor);

//}

//numberofDivisors (number)


//Input ile daxil olunan ədədin bölənlərinin hasilini tapın.

//let number = +prompt("Enter a number: ");
//function numberofMultiply(number) {
//let multiply = 1;

//for (let i = 0; i < number; i++) {
//if (number % i === 0) {
//multiply *= i;
//console.log(i)

//}
//}

//console.log("Bölənlərin hasili:", multiply);

//}
//numberofMultiply(number) 


//İstifadəçi 0 daxil edənədək ədədlərin cəmini tapın

//let sum = 0;
//function numberofZero () {
//while (true) {
//let number = +prompt("Enter a number: ");
  
//if (number == 0) {
//return;
//}
//sum += number;
//}
//}
//numberofZero ()
//console.log ("Number of sum", sum);

  