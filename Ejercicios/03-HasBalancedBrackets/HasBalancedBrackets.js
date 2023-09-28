function HasBalancedBrackets (string) {
  // Your code here:
//   let stack = [];
//   let characterApertura = ["(","{","["];
//   let characterCierre = [")","}","]"];

//   for (let i = 0; i < string.length; i++) {
//     let character = string[i];
    
//     if (characterApertura.includes(character)) stack.push(character);  // (character === "(" || character === "{" || character === "[")
//     if(characterCierre.includes(character)) {
// const conversionSimbolo = characterApertura[characterCierre.indexOf(character)];

//       if(stack.length === 0 || stack.pop() !== conversionSimbolo) return false
//     }
//   }
//   return stack.length === 0;

let stack = [];

const simbolos = { "{":"}", "(":")", "[":"]"}

for (let i = 0; i < string.length; i++) {
  let character = string[i];
  if (simbolos[character]) {
    stack.push(character);
  } else if (simbolos[stack.pop()] !== character) {
    return false;
  }
}
return !stack.length;
}

module.exports = HasBalancedBrackets
