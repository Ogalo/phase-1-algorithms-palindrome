function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;  
   
  for (let i = 0; i < len / 2; i++) {   
    if (word[i] !== word[len - 1 - i]) {  
      return false;  
    }  
  }  
  return true;  
}
 

  
  


/* 
  Add your pseudocode here
  initialize a for loop giving the first character a value of zero
  Iterate over the length of the word and also initialize a variable with let
    if the letter at index i is not equal to the letter at index (len - 1- i)
      return false
    else
      return true
*/

/*
  Add written explanation of your solution here
  the solution is based on whether the word at index i, that is its letter equal 
  to the word at index word[-1].
  If the it is not equal, it is not a palindrome.
  If it is, it is a palindrome

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
