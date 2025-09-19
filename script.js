// Simple Caesar Cipher with shift of 3
const shift = 3;

function encryptText() {
  let input = document.getElementById("inputText").value;
  let result = "";
  
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    
    if (char.match(/[a-z]/i)) {
      let code = input.charCodeAt(i);
      
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }
  
  document.getElementById("outputText").value = result;
}

function decryptText() {
  let input = document.getElementById("inputText").value;
  let result = "";
  
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    
    if (char.match(/[a-z]/i)) {
      let code = input.charCodeAt(i);
      
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }
    }
    result += char;
  }
  
  document.getElementById("outputText").value = result;
}
