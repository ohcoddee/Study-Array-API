//length
let computers = ["monitor", "keyboard", "mouse"];
console.log("computers.length", computers.length); // 3
let first = computers[0];
let last = computers[computers.length - 1];
console.log("first", first); // monitor
console.log("last", last); // mouse

//push() - 배열 끝에 n개의 요소를 넣는다
const pushArr = [1, 2, 3, 4, 5];
pushArr.push(6, 7, 8);
console.log("pushArr", pushArr); // 1, 2, 3, 4, 5, 6, 7, 8(8)

//pop()
const popArr = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log("popArr.pop()", popArr.pop()); // tomato
console.log("popArr", popArr); // "broccoli", "cauliflower", "cabbage", "kale"
console.log("popArr.pop()", popArr.pop()); // kale
console.log("popArr", popArr); // "broccoli", "cauliflower", "cabbage"

//concat() - 두 개 이상의 배열을 합쳐서 새로운 배열을 생성한다
const concatArr1 = ["a", "b", "c", "d"];
const concatArr2 = [1, 2, 3, 4];
const concatArr = concatArr1.concat(concatArr2);
console.log("concatArr", concatArr); // a, b, c, d, 1, 2, 3, 4(8)

//reverse()
const numArr = ["one", "two", "three"];
console.log("numArr", numArr); // "one", "two", "three"
const reversed = numArr.reverse();
console.log("reversed", reversed); // "three", "two", "one"

//join()
const joinArr = ["Hello", "my", "name", "is:"];
console.log("joinArr.join()", joinArr.join()); // Hello,my,name,is
console.log("joinArr.join()", joinArr.join("")); // Hellomynameis
console.log("joinArr.join()", joinArr.join("-")); // Hello-my-name-is

//split()
const numEx = "02-0000-1111";
const splitedNum = numEx.split("-");
console.log("splitedNum", splitedNum[0]); // 02
console.log("splitedNum", splitedNum[1]); // 0000
console.log("splitedNum", splitedNum[2]); // 1111

//splice()
const months = ["jan", "march", "april", "june"];
months.splice(1, 0, "feb");
console.log("months", months); // "jan", "feb", "march", "april", "june"
const result11 = months.splice(4, 0, "may");
console.log("result11", result11); // []
console.log("months", months); // "jan", "feb", "march", "april", "may", "june"
const monthsResult = months.splice(5, 1, "끝");
console.log("months", months); // "jan", "feb", "march", "april", "may", "끝"
console.log("monthsResult", monthsResult); // "june"

//slice()
const sliceArr = ["rabbit", "cow", "pig", "dog", "cat", "monkey"];
const sliceArr1 = sliceArr.slice(3); // "dog", "cat", "monkey"
console.log("sliceArr1", sliceArr1);
const sliceArr2 = sliceArr.slice(1, 4);
console.log(sliceArr2); // "cow", "pig", "dog"

//find(), filter()
const animals = [
  {
    id: 0,
    diverse: "cat",
    isIt: true,
  },
  {
    id: 2,
    diverse: "carrot",
    isIt: false,
  },
  {
    id: 3,
    diverse: "dog",
    isIt: true,
  },
];
const findAnimal = animals.find((animal) => animal.id === 2);
console.log(findAnimal); // id: 2, diverse: "carrot", isIt: false,

const filterAnimal = animals.filter((animal) => animal.id >= 2);
console.log(filterAnimal); // {id: 2, diverse: "carrot", isIt: false}, {id: 2, diverse: "dog", isIt: true}

//map()
const mapArr = [1, 2, 3, 4, 5];
const mapResult = mapArr.map((numbers) => {
  return numbers + 3;
});
console.log(mapResult); // 4, 5, 6, 7, 8

const resultAAA = animals.map((animal) => {
  return animal.diverse + "님";
});
console.log(resultAAA); // cat님, carrot님, dog님

//some()
const someArr1 = [1, 2, 3, 4, 5];
const someArr2 = [1, 2, 3, 4, 11];
const resultSomeArr1 = someArr1.some((number) => number > 10);
console.log(resultSomeArr1); // false
const resultSomeArr2 = someArr2.some((number) => number > 10);
console.log(resultSomeArr2); // true

const even = (number) => number % 2 === 0;
const resultEven = someArr1.some(even);
console.log(resultEven); // true

//reduce()
const arrList = [1, 2, 3, 4, 5];
const startValue = 0;
const newList = arrList.reduce((previous, current) => {
  return previous + current;
}, startValue);
console.log(newList); // 15

//sort()
const monthsArr = ["March", "Jan", "Feb", "Dec"];
monthsArr.sort();
console.log(monthsArr); // "Dec", "Feb", "Jan", "March"

const numbersArr = [1, 30, 4, 21, 100000, 10];
numbersArr.sort((first, second) => {
  return second - first;
});
console.log(numbersArr); // 1, 4, 21, 30, 100000
