/* Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
  return str.split("").reverse().join(""); //there are basic methods of str and array, if these seem unfamiliar, please take time 
                                           //to go through every single method for str, arr, and numbers on MDN
}
reverseString("hello");  // should return "olleh"

/* test cases: 
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/
