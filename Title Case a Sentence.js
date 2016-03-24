/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  answer = [];                             //create an empty array to push our results to
  var arr = str.toLowerCase().split(" ");   // turn all words in input str into lower case, then split whenever we see a space
  for ( i = 0 ; i < arr.length; i ++){      // creat a for loop to go from 0 to the array arr's length, incrimenting by 1 at a time
  var sec = arr[i].split("");               // variable sec is where we will split each element in arr by each letter
  sec[0]=sec[0].toUpperCase();              // here we take the first letter in the sec array and make it uppercased
  answer.push(sec.join(""));                 // we push all the elements in sec into our answer array. 
                                            // every time i gets incrimented a new sec array is being proceesed and a new word is added
                                               pushed to the answer array
 }
  return answer.join(" ");                  // we take the answer array and join it all together separated by a space
}
titleCase("I'm a little tea pot");           // should return "I'm A Little Tea Pot"


/* additional test cases:

titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

*/
