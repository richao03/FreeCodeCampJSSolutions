/*Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
var sum = 1;                     //sum starts at one, so when multiplied, it will not be 0
  for ( i = 1 ; i <=num; i ++){  //i starts from 1 and ends at num 
    sum *= i                     // sum = itself multiplied by every iteration of i
  }
  return sum;                   //return sum as answer
}


factorialize(5);  //should return 1 * 2 * 3 * 4 * 5 = 120

/*
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

//alternative solution using recursion :

function factorialize(num){
if (num < 0) {
    return -1;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return (num * factorialize(num - 1));
    }
}
factorialize(5); 
