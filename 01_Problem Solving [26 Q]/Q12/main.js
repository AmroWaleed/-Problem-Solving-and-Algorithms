console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/
/* 
try to solve this but i have no idea aboute reversing in same place 
*/
function reverseEachWord(str) {
  var stringSplite = str.split("");
  var reversingArray = stringSplite.reverse();
  var joiningArray = reversingArray.join("");
  return joiningArray;

}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
