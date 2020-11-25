console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter 
being passed and determine if the string is a valid username 
according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore 
character.
4. It cannot end with an underscore character.

If the username is valid then your program should return 
the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  var str ="";
  var stringStart = str.startsWith("");
  var stringValue = str.length >=4 && str.length <=25
  var stringEnd = str.endsWith("",Number);
  return stringEnd;
}
// I try to solve like that bu the second condetion is not active 
// and I have another idea to solve it with if condetion but i have 
// somthing wrong with this solution  
/* 
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123'); // => true

*/
