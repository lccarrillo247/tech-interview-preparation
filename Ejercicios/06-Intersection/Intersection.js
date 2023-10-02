function intersection (arr1, arr2) {
  // Your code here:


  // Versión papi :v
  let newArray = [];

  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        newArray.push(arr1[i])
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArray.push(arr2[i])
    }
  }
  }
  console.log(newArray);

// Versión Gama
let repetidos = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      repetidos.push(arr1[i]);
    }
  }
}
console.log(repetidos);

// Versión Gama optimizada

let repetidos2 = [];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if(arr1[i] === arr2[j]) {
    repetidos2.push(arr1[i]);
    i++;
    j++;
  } else if (arr1[i] < arr2[j]) i++;
  else j++;
}
console.log(repetidos2);

const set1 = new Set(arr1);
const repetidos3 = [];
for (const elemento of arr2) {
  if(set1.has(elemento)) {
    repetidos3.push(elemento);
  }
}
console.log(repetidos3);
}

function intersectionGPT(arr1, arr2) {

  const set1 = new Set(arr1);
  const repetidos = arr2.filter((element) => set1.has(element));
  console.log(repetidos);
}

intersection([1,3,5,7,10], [2,3,6,8,10,20]);
intersectionGPT([1,3,5,7,10], [2,3,6,8,10,20]);

module.exports = intersection
