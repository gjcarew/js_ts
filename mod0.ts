// var students: string[] = ["Cindy", "Josiah", "Rigo"];

// students.push("Alan");

// var sliced: string[] = students.slice(1, 3)

// console.log(sliced);

// var emails = [
//     "kaitlyn@turing.edu",
//     "justina@turing.edu",
//     "amy@turing.edu",
//     "launa@turing.edu",
//     "nikki@turing.edu",
//     "naomi@turing.edu"
//   ];

// for (var i = 0; i < 4; i++) {
//     console.log(emails[i])
// }

// for (var i = 12; i <= 18; i++) {
//     console.log(i)
// } 
// for (var i = 0; i < 6; i++) {
//     console.log(i + "🥸")
// } 

// var numbers: number[] = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//         console.log(numbers[i])
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//         console.log(numbers[i] ** 2)
// }

// var words: string[] = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]

// for (var i = 0; i < words.length; i++) {
//     console.log(words[i].toLowerCase());
// }

// var names: string[] = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]

// for (var i = 0; i < names.length; i++) {
//     if (names[i][0] === 'P') {
//         console.log(names[i])
//     }
// }

// for (var i = 1; i < 100; i += 2) {
//     console.log(i)
// }

// function greetATexan(): string {
//     return 'Howdy';
// }

// console.log(greetATexan())

// function greetAnAnimal(animal: string): string {
//     return `Hello, ${animal}`
// }

// console.log(greetAnAnimal('tiger'))

// function multiply(n1: number, n2: number): number {
//     return n1 * n2
// }

// console.log(multiply(3, 4))
// function getAge(birthYear: number): string {
//     var age: number = new Date().getFullYear() - birthYear
//     return `You have lived ${age} years of life!`
// }

// console.log(getAge(1990));


var zoo: Record<string,number> = {
    giraffes: 3,
    zebras: 12,
    hippos: 2
  };

function values(obj: Record<string,number>): number[] {
    return Object.keys(obj).map((element) => {
        return obj[element]
    })
}

 console.log(Object.keys(zoo));
 console.log(values(zoo));
 console.log(zoo.giraffes)
 zoo.capybaras = 4;
 console.log(zoo.monkeys);
 zoo.zebra = 90
console.log(Object.keys(zoo));

 

 