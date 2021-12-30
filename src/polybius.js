// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*  Polybius Square
    1   2   3   4   5
1   A   B   C   D   E
2   F   G   H  I/J  K
3   L   M   N   O   P
4   Q   R   S   T   U
5   V   W   X   Y   Z
*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    
    let message = ''; //Final return
    if(encode){ //If encode
      let lowerInput = input.toLowerCase(); //Setting input to all lower case
      for(let i=0; i<lowerInput.length; i++){ //Loop through message
        switch(lowerInput[i]){ //Switches letter for number pair
          case ' ':
            message += ' ';
            break
          case 'a':
            message += 11;
            break
          case 'b':
            message += 21;
            break
          case 'c':
            message += 31;
            break
          case 'd':
            message += 41;
            break
          case 'e':
            message += 51;
            break
          case 'f':
            message += 12;
            break
          case 'g':
            message += 22;
            break
          case 'h':
            message += 32;
            break
          case 'i':
            message += 42;
            break
          case 'j':
            message += 42;
            break
          case 'k':
            message += 52;
            break
          case 'l':
            message += 13;
            break
          case 'm':
            message += 23;
            break
          case 'n':
            message += 33;
            break;
          case 'o':
            message += 43;
            break
          case 'p':
            message += 53;
            break
          case 'q':
            message += 14;
            break
          case 'r':
            message += 24;
            break
          case 's':
            message += 34;
            break
          case 't':
            message += 44;
            break
          case 'u':
            message += 54;
            break
          case 'v':
            message += 15;
            break
          case 'w':
            message += 25;
            break
          case 'x':
            message += 35;
            break
          case 'y':
            message += 45;
            break
          case 'z':
            message += 55;
        }
      }
      return message; //Returning encoded message
    } else if (!encode) { //If decode
      let noSpaces = input.replace(/\s+/g, ''); //Setting noSpaces equal to encoded message minus spaces to verify all numbers are pairs
      if (noSpaces.length % 2 != 0) return false;
      let newChar = '';
      let counter = 0; 
      for (let i = 0; i < input.length; i++) {
        let initChar = input[i];
        if (initChar === ' ') { //if space, add to message
          message += ' ';
        } else { // if number add to number pair (newChar)
          newChar += initChar;
          counter++;
        }
        if (counter === 2) {//If number pair, switch pair for letter
          switch(newChar) {
            case '11': 
              message += 'a';
              newChar = '';
              counter = 0;
              break;
            case '21':
              message += 'b';
              newChar = '';
              counter = 0;
              break;
            case '31':
              message += 'c';
              newChar = '';
              counter = 0;
              break;
            case '41':
              message += 'd';
              newChar = '';
              counter = 0;
              break;
            case '51':
              message += 'e';
              newChar = '';
              counter = 0;
              break;
            case '12':
              message += 'f';
              newChar = '';
              counter = 0;
              break;
            case '22':
              message += 'g';
              newChar = '';
              counter = 0;
              break;
            case '32':
              message += 'h';
              newChar = '';
              counter = 0;
              break;
            case '42':
              message += 'i/j';
              newChar = '';
              counter = 0;
              break;
            case '52':
              message += 'k';
              newChar = '';
              counter = 0;
              break;
            case '13':
              message += 'l';
              newChar = '';
              counter = 0;
              break;
            case '23':
              message += 'm';
              newChar = '';
              counter = 0;
              break;
            case '33':
              message += 'n';
              newChar = '';
              counter = 0;
              break;
            case '43':
              message += 'o';
              newChar = '';
              counter = 0;
              break;
            case '53':
              message += 'p';
              newChar = '';
              counter = 0;
              break;
            case '14':
              message += 'q';
              newChar = '';
              counter = 0;
              break;
            case '24':
              message += 'r';
              newChar = '';
              counter = 0;
              break;
            case '34':
              message += 's';
              newChar = '';
              counter = 0;
              break;
            case '44':
              message += 't';
              newChar = '';
              counter = 0;
              break;
            case '54':
              message += 'u';
              newChar = '';
              counter = 0;
              break;
            case '15':
              message += 'v';
              newChar = '';
              counter = 0;
              break;
            case '25':
              message += 'w';
              newChar = '';
              counter = 0;
              break;
            case '35':
              message += 'x';
              newChar = '';
              counter = 0;
              break;
            case '45':
              message += 'y';
              newChar = '';
              counter = 0;
              break;
            case '55':
              message += 'z';
              newChar = '';
              counter = 0;
          }
        }
      }
    }
   return message; //return decoded message
 }
 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
