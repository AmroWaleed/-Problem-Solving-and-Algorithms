console.log("Problem Solving Q: 7");

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/
/*
the answer is wrong i don`t know why 
 */
function SumOddNumber(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 !== 0);
    result += num[i];
  }
  return result;
}

// for edge case we need to check is the type of value equal number 
/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
