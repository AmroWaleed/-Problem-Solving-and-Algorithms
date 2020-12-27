console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) 
take the str parameter being passed and return the string in reversed order.
 For example: if the input string is "Hello World and Coders" 
 then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
  var stringSplite = str.split("");
  var reversingArray = stringSplite.reverse();
  var joiningArray = reversingArray.join("");
  return joiningArray;

}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/

