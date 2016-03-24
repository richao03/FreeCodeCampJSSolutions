/* Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(sen) { 
var longword = sen.split(" ")     //longward contains all the words in input sen, separated by a space
 longword.sort(function(a, b) {   // here, sort(function(a,b) { return b-a} is a often used method of sort to put things in order
                                  // sort ( function(a,b) { return a - b }) will return all elements in size order
                                  // sort ( function(a,b) { return b - a}) will return it in reverse size order (bigger first then small)
    return b.length - a.length;  // by adding .length to a and b, we are now asking to have elements in longword to be sorted
                                  //by reverse word length, meaning the longest word comes first
});
  return longword[0].length;     //longword[0] will be the longest word because we used the sort method above
         
}

findLongestWord("The quick brown fox jumped over the lazy dogggggggg");  //should retrun the length of dogggggggg = 10


/* additional test cases:
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
