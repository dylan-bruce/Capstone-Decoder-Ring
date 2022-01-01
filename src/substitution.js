// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // https://theasciicode.com.ar/ for ASCII codes.

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let message = ""; //Return message
    let lowerInput = input.toLowerCase(); //Setting input to lowercase
    if(!alphabet || alphabet.length != 26) return false; //Check if alphabet exists and is 26 characters
    const only = {}; //Storage object
    for(letter in alphabet.split('')){ //If each letter is not in storage object, store and check next letter
      const uniqueletter = alphabet[letter]; //If a matching letter comes up, return false
      if(only[uniqueletter]) return false; // If unique letter is in only, return false
      else only[uniqueletter] = true; // If unique letter is not in only, store it
    }
    if(encode){ //When encode is true
      for(let i=0; i<lowerInput.length; i++){ //Loop through input
        const asciiCode = lowerInput.charCodeAt(i);  //Getting ASCII code for each letter
        if(lowerInput[i] === ' ') message += ' '; //If character is a space, store a space
        else message += alphabet[asciiCode - 97]; //If character is a letter, store ASCII code - 97
      }
    } else if (!encode){ //When encode is false (decode)
      for(let i=0; i<lowerInput.length; i++){ //Loop through input
        const indexNumber = alphabet.split('').findIndex(letter => letter === lowerInput[i]); //get index number for each letter
        if(lowerInput[i] === ' ') message += ' '; //If character is a space, store a space
        else message += String.fromCharCode(indexNumber + 97); //If character is an letter, use index to get ASCII code for letter
      }
    }
    return message; //Return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
