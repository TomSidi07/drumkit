/****Constructor
 *
 *
 *
 *
 *
 */
function HouseKeeper(yearOfExperience, name, cleaningRepertoire = []) {
  this.yearOfExperience = yearOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}
var houseKeeper1 = new HouseKeeper(12, "Jane", [
  "bathroom",
  "lobby",
  "bedroom",
]);
console.log(houseKeeper1);
// document.querySelector("h1").classList.add("huge");
// document.querySelector("h1").textContent = "Tom";
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function calculator(a, b, operator) {
  return operator(a, b);
}
// function fibbo(n, arr = [0, 1]) {
//   if (n <= 1) return [0];
//   if (n == 2) return [0, 1];
//   else {
//     if (n > arr.length) {
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//       return fibbo(n, arr);
//     } else {
//       return arr;
//     }
//   }
// }
// console.log(fibbo(10));
// une function recursive qui ajoute a chaque n eme  chiffre d'une array un nombre x
// la longueeur sera y

// n position recursive
// x nombre a ajouter
// nombre d'elements

// function addRecursive(x = 0, n = 1, y = 0, arr = [0]) {
//   if (y <= 1) {
//     return arr;
//   } else {
//     if (arr.length < y) {
//       let backup = arr[arr.length - 1];
//       if (arr.length == n) {
//         arr.push(backup + x);
//       }
//       if (arr.length > n && arr.length % n === 0) {
//         arr.push(backup + x);
//       }
//       arr.push(backup + 1);
//       return addRecursive(x, n, y, arr);
//     } else {
//       // arr.splice(arr[arr.findIndex((e) => e == 0)]);
//       return arr;
//     }
//   }
// }
// console.log(addRecursive(-2, 2, 10));
