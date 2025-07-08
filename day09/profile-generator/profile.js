// 변수 선언하기
var myName = "선마루"; // string
let myAge = 38; // number
const isAdult = true; // boolean

console.log(myName, myAge, isAdult);

// 문자열 연결 + 이스케이프 문자 사용 \n 줄바꿈 \t 들여쓰기
var profileText = "이름:\t" + myName + "\n나이:\t" + myAge;
console.log(profileText);

// 배열 만들기
let hobbies = ["넷플릭스보기", "게임", "유튜브보기", "중국어공부"];

// 문자열로 합쳐서 출력하기
console.log("My hobbies: " + hobbies.join(", "));

// 객체 만들기
let profile = {
  name: myName,
  age: myAge,
  isAdult: isAdult,
};

console.log(
  "내 이름은 " + profile.name + "이고, 나이는 " + profile.age + "살입니다."
);

// typeof: 변수의 데이터 타입 출력
console.log("typeof hobbies:", typeof hobbies); // object
console.log("typeof profile:", typeof profile); // object

/*일반과제 끝 도전과제 시작*/

// null은 "값이 비어있다"는 의도적 상태
let emptyValue = null;

// undefined는 "값을 아직 안 정했다"는 뜻
let notSet;

console.log("📌 typeof null:", typeof emptyValue); // object (역사적 설계 실수)
console.log("📌 typeof undefined:", typeof notSet); // undefined

// null과 undefined는 타입도 다르고, === 비교하면 false
console.log("📌 null === undefined:", emptyValue === notSet); // false

// 기존 변수들 재사용
// let myName = "선마루";
// let myAge = 38;
// const isAdult = true;

// 템플릿 문자열을 사용해 보기 오른쪽내용을 왼쪽 명령어 뒤쪽에 집어넣는다 기억하기
let message = `✨ 템플릿 문자열 사용:
이름: ${myName}
나이: ${myAge}
성인 여부: '${isAdult}`;

console.log(message);

// 아직 잘 이해되지 않는 부분
let mixedArray = ["coding", null, undefined];

console.log("🎯 mixedArray 요소별 typeof:");
console.log("0번 요소:", typeof mixedArray[0]); // string
console.log("1번 요소:", typeof mixedArray[1]); // object (null)
console.log("2번 요소:", typeof mixedArray[2]); // undefined

// 객체에 새로운 속성 추가하고 null 확인
// 새로운 속성 추가: 이메일 주소는 아직 없음(null)
profile.email = null;

// 이메일이 null인지 확인
if (profile.email === null) {
  console.log("📩 이메일 주소가 입력되지 않았습니다 (null 상태).");
}
