// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // input is text to be encoded or decoded
    // shift is how much each letter is shifted by. + goes right and - goes left
    // encode = true is encoding, encode = false is decoding.
    // https://theasciicode.com.ar/ for ASCII codes.

    let lowerInput = input.toLowerCase(); //Making input all lower case
    let codeMessage = ""; //Setting return variable

    // UNACCEPTABLE SHIFT -----------------------------------------------------------------------//
    if(shift === 0 || shift > 25 || shift < -25 || !shift) return false;

    // ENCODING ---------------------------------------------------------------------------------//
    if(encode === true){
      for(let i=0; i<lowerInput.length; i++){
        let characterASCII = lowerInput.charCodeAt(i); //Setting each letters ASCII code
        let code;
        if(characterASCII < 97 || characterASCII > 122){
          code = characterASCII; //If character is not a letter
        } else if(characterASCII + shift < 97){
          code = characterASCII + shift + 26; // If code+shift is less than lower case alphabet
        } else if(characterASCII + shift > 122){
          code = characterASCII + shift - 26; // If code+shift greater than lower case alphabet
        } else {
          code = characterASCII + shift; // If code+shift falls within alphabet ASCII
        }
        const asciiCharacter = String.fromCharCode(code); //Setting each ASCII code to appropriate letter
        codeMessage += asciiCharacter; //Building string of letters
      }
      return codeMessage; //Return new encoded string
    }

    // DECODING --------------------------------------------------------------------------------//
    else if(encode === false){
      for(let i=0; i<lowerInput.length; i++){
        let characterASCII = lowerInput.charCodeAt(i);
        let code;
        if(characterASCII < 97 || characterASCII > 122){
          code = characterASCII;
        } else if(characterASCII - shift < 97){
          code = characterASCII - shift + 26;
        } else if(characterASCII - shift > 122){
          code = characterASCII - shift - 26;
        } else if(96 > characterASCII < 123){
          code = characterASCII - shift;
        }
        const asciiCharacter = String.fromCharCode(code); //Getting letters from ASCII code 
        codeMessage += asciiCharacter; //Building string
      }
      return codeMessage; //Return new decoded string
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };