console.log("객체 실습");

const person = {
  name: {
    firstName: "Gildong",
    lastName: "Hong",
  },
  age: 20,
  isAdult: true,

  // getFullName 함수 하나만 선언
  getFullName: function (isKorean = false) {
    const fullName = isKorean
      ? `${this.name.lastName} ${this.name.firstName}` // 한국식
      : `${this.name.firstName} ${this.name.lastName}`; // 영어식
    return fullName;
  },

  printInfo: function () {
    console.log("printInfo");
    console.log(`name: ${this.name.firstName} ${this.name.lastName}`);
    console.log(`age: ${this.age}`);
    console.log(`isAdult: ${this.isAdult}`);
  },
};

console.log(person);

// person의 age, isAdult 조회
console.log("객체에서 . 사용하여 접근");
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);

console.log("객체에서 [key] 사용하여 접근");
let age2 = person["age"];
console.log("age2 :", age2);
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("isAdult2 :", isAdult2);

// 객체의 키 전체를 배열에 담기
let keys = [];
for (const key in person) {
  keys.push(key);
}
// console.log(keys);
// for (const key of keys) {
//   console.log("key", key);
//   console.log("person[key]", person[key]);
// }

// 객체 내의 함수 사용하기
const fullName = person.getFullName(); // 기본: 영어식
console.log("fullName :", fullName);

const fullNameKorean = person.getFullName(true); // true면 한국식
console.log("fullName (한국식) :", fullNameKorean);
