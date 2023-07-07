//In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

//1️⃣Same keys and values
//function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
const createInstructor = (firstName, lastName) => {
  return { firstName, lastName };
};
//2️⃣Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt",
// };

// instructor[favoriteNumber] = "That is my favorite!";
let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};
//3️⃣Object Methods
// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };
let instructorAgain = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
