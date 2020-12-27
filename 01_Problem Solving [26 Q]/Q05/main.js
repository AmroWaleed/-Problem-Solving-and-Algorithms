console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array 
of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated 
numbers sorted in ascending order, the second element will represent
 a second list of comma-separated numbers (also sorted).
  Your goal is to return a comma-separated string 
  containing the numbers that occur in elements of strArr in sorted order.
   If there is no intersection, return the string false.
*/
/*
these solution 50% from the internet  
*/
function findIntersection(strArr) {
  //   let strArr = ", ";
  //   let string_1 = strArr[0];
  //   let string_2 = strArr[1];
  //   let findIntersection = string_1.filter(function (a) {
  //     if (string_2.indexOf(a) != -1) return true;
  //     else return false;
  //   });
  //   console.log(findIntersection);

  // }
  let result = "";
  let string_1 = strArr[0];
  let string_2 = strArr[1];
  string_1 = string_1.split(", ");
  string_2 = string_2.split(", ");
  for (let i = 0; i < string_1.length; i++)
    for (let j = 0; j < string_2.length; j++) {
      if (string_1[i] === string_2[j])
        result = result + string_1[i] + ",";
        else return 
    }
  result = result.slice(0, -1);
  return result;
}

/*
 Examples:
 findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
