/* 
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
var backwards = str.toLowerCase().split("").reverse().join(""); //set backwards to the given input, lower cased, split, reversed, then                                                                   joined
var backstr = backwards.match(/[a-z0-9]/g).join("");            // using regex we take only all alphanumeric characters in backwards
var fwd = str.toLowerCase().split("").join("");                 //set fowrard to given input, lower cased, split, reverse, then joined
var fwdstr = fwd.match(/[a-z0-9]/g).join("")                    // using regex we take only all alphanumeric characters in fwd
return (backstr == fwdstr)                                      //if backstr equals to fwdstr return true, else false 
}
palindrome("race car");     // should return true 


/* additional test caes:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
*/
