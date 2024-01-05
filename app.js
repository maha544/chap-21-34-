//chap 21

//Q1

//var allLower = userInput.toLowerCase();

//Q2

// var x = "Name Of Your Subject";
// var change = x.toLowerCase();
// console.log(change);

//Q3

// var y = "Name Of Your Subject";
// var change = y.toUpperCase();
// console.log(change);

//Q4

// var originalString = "Write Your Opinion";
// var lowerString = originalString.toLowerCase();
// console.log(lowerString);

//Q5

// var arr = ["Back", "Forth", "Behind"];
// var lowerElement = arr[2].toLowerCase();
// console.log(lowerElement);

//Q6

// var originalString = "Write Your Opinion";
// var upperString = originalString.toUpperCase();
// alert(upperString);

//Q7

// var cityName = "kaRacHi";
// var lowerString = cityName.toLowerCase();
// console.log(lowerString);

// var indexKhi = lowerString.indexOf("k");
// console.log(indexKhi);

// var capitalFirstLetter = lowerString.charAt(indexKhi).toUpperCase() + lowerString.slice(indexKhi + 1);
// console.log(capitalFirstLetter);

//Chapter 22 - 25 (Strings)

//Q1

var sameWord = "captain";

var cut = sameWord.slice(1 , 3);
console.log(cut);

//Q2

var sameWord = "captain";
var numberOfCharacters = sameWord.length;
console.log(numberOfCharacters);

//Q3

var animal = "elephant";
var seg = animal.slice(2 , 6);
console.log(seg);

//Q4

// var bacteria = "pseudopodia";
// var characters = bacteria.length;
// console.log(characters);

//Q5

// var bacteria = "pseudopodia";
// var characters = bacteria.length;
// console.log(characters);

// var firstLast = bacteria.slice(1, 10);
// console.log(firstLast);

//Q6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx); //ans is 3

//Q7

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);  ans is 16

//Q8

// var text = "Let's go for a walk, and then let's go to eat something delicious.";
// var lastInd = text.lastIndexOf("go");

// if (lastInd !== -1){
//     var indx = text.indexOf("go" , lastInd);
//     console.log("so the index of last one (go) is," , indx);
// }else {
//     console.log("go is not found");
// }

//Q9

// var text = "example words";
// var indexNum = 5;

// if (text[indexNum] !== undefined){
//     console.log("index num is present", indexNum);
// }else {
//     console.log("index num isn't present");
// }

//Q10

// var alphabets = "abcde";

// var some = alphabets.charAt(2);
// console.log(some);

//Q11

// var text = "Let's go for a walk, and then let's go to eat something delicious.";

// var cha = text.charAt(10);
// console.log(cha);

//Q12

// var str = "abcdef";
// var x = str.charAt(5);
// console.log(x);

//Q13

// var input = "example";
// var cha = input.charAt(5);
// console.log(cha);

//Q14

var str = "abcdef";

if (str.charAt(3) === "d"){
    console.log("3rd character is present");
}

//Q15

//For loop 
// var input = "example";
// var charArray = [];

// for (var i = 0; i < input.length; i++) {
//     charArray.push(input.charAt(i));
// }

// console.log(charArray);

// // Replace the first instance of "no" with "yes"
// var reply = "no, not again, no way";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);

//Q16

// var str = "no, not again, no way";
// var newStr = str.replace( "1" , "one");
// console.log(newStr);

//Q17

// var x = "aabbaccaa";
// var y = x.replace(/a/g, "z");
// console.log(y);

//Chapter 26 (Rounding Numbers)

//Q1

// var deci = 5.66;
// var int = Math.round(deci);
// console.log(int);

//Q2

// var origNum = 2.3;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

//Q3

// var origNum = 2.9;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

//Q4

// var origNum = 4.6;
// var roundNum = Math.round(origNum);
// console.log(roundNum);

//Q5

// var num = 0.5;
// var roundedNum = Math.floor(num);
// console.log(roundedNum);



//Chapter 27 (Random Numbers)

//Q1

// var num = Math.random();
// console.log(num);

// var range = Math.floor(num * 50);
// console.log(range);

//Q2

// var randNum = Math.random();
// console.log(randNum);

//Q3

// var randNum = Math.random();
// var dice = (randNum * 6);
// console.log(dice);

// var diceFloor = Math.floor(dice) + 1;
// console.log(diceFloor);

//Q4

// var randNum = Math.random();
// var roundNum = Math.round(randNum);
// console.log(roundNum);

// if (roundNum === 1){
//     console.log("Head");
// }else {
//     console.log("Tail");
// }


// Chapter 28, 29 (Converting Strings)


//Q1

// var str = "125";
// var conInIntegar = Number (str);
// console.log(conInIntegar);

//Q2

// var str = "123";
// var conInIntegar = parseInt(str);
// console.log(conInIntegar);

// //Q3

// var str = "125.54";
// var conInIntegar = parseFloat(str);
// console.log(conInIntegar);

//Q4

// var str = "125";
// var conInIntegar = parseInt(str);
// console.log(typeof conInIntegar);

// if (!isNaN(conInIntegar)) {
//     console.log("Successfully converted to integer:", conInIntegar);
//     console.log("Type:", typeof conInIntegar);
// } else {
//     console.log("Cannot be converted to integer");
// }


//Q5

// by  using (toString) function

//Q6

// var num = 125;
// var conInStr = toString(num);
// var conInStr = num.toString();
// console.log(typeof conInStr);

//Q7

// var str = "3.14";
// var num =  + str ;
// var int = Math.round(num);
// console.log(int);


//Chapter 30 (Controlling the length of decimals)

//Q1

// var num = 3.14159265359;
// var newNum = num.toFixed(4);
// console.log(newNum);

// //Q2

// var num = 3.14159265359;
// num = parseFloat(num.toFixed(2));
// console.log(num);

// //Q3

// if ((num.toFixed(2).toString()).length > 4) {

// }


//Q4

// var num = 3.14159265359;
// alert(num.toFixed(2).toString());

//Chapter 31 - 34 (Date & Time)

//Q1

// var dObj = new Date ();
// console.log(dObj);

//Q2

// var dObj = new Date ();
// var dStr = dObj.toDateString();
// console.log(dStr);

//Q3

// var dObj = new Date ();
// var d = dObj.getDay();
// console.log(d);

// //Q4

// var dayNames = ["Sunday","Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

// var currentDay = dayNames[d];
// alert("Today is " + currentDay);

// //Q5

// var dObj = new Date();

// var date = dObj.getDate();
// var day = dObj.getDay();
// var year = dObj.getFullYear();
// var hours = dObj.getHours();
// var minutes = dObj.getMinutes();
// var seconds = dObj.getSeconds();

// console.log("Date: " + date);
// console.log("Day: " + day);
// console.log("Year: " + year);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);


//Q6

// var dec = new Date (2020 , 11 , 31);
// console.log(dec);

//Q7

// var dOfFeb = new Date (1992 , 1 , 2);
// console.log(dOfFeb);

//Q8

// var refDate = new Date(1970 ,0 ,1);
// var begiOf1980 = new Date(1980,0,1); 

// var miliSec = begiOf1980 - refDate;
// alert(miliSec);

//Q9

// var forYear = new Date();
// var changeYear = new Date(forYear)
// changeYear.setFullYear(2020);
// console.log(forYear);
// console.log(changeYear);

//Q10

// var forMonth = new Date();
// var changeMonth = new Date(forMonth);
// changeMonth.setMonth(8);
// console.log(forMonth);
// console.log(changeMonth);

//Q11

// var forDay = new Date();
// var changeDay = new Date(forDay);
// changeDay.setDate(7);
// console.log(forDay);
// console.log(changeDay);

//Q12

// var forMint = new Date();
// var userMint = prompt("enter your desired minutes");
// forMint.setMinutes((parseFloat(userMint , 10)));
// console.log(forMint);

//Q13

// var forHour = new Date();
// var changeHour = new Date(forHour);
// changeHour.setHours(3);
// console.log(forHour);
// console.log(changeHour);

//Q14

var userBirthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
var currentDate = new Date();
var changeBirthdate = new Date(userBirthdate);

// for milliseconds
var ageInMilliseconds = currentDate - changeBirthdate;

// Convert milliseconds in years
var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

// Round down
var age = Math.floor(ageInYears);
console.log("Your age is: " + age + " years");

