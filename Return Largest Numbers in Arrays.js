/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  var answer = [];                    //create empty answer array to push answer into
  for ( i = 0; i < arr.length; i++){  //create for loop to go from 0 to the length of the input arr, incrimenting by 1 at a time
    arr[i].sort(function(a,b){        //at every iteration of i we sort the array arr[i] in reverse order
      return b-a;                     // largest number first, then smaller
    })
  answer.push(arr[i][0])     ;        //we push the biggest number in each array into the answer array
  }
  return answer;                      //return answer 
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [5,27,39,1001]


/* additional test cases: 
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/
