// 변수 선언
const operators = ["+", "-", "*", "/"]; // const 사용
let currentInput = ""; // let 사용
let firstNumber = null;
let operator = null;
var result = null; // var 사용
const history = [];

// 숫자 입력 함수
function appendNumber(number) {
  if (!/^[0-9]$/.test(number)) {
    showError("유효한 숫자를 입력하세요.");
    return;
  }
  currentInput += number;
  updateDisplay(currentInput);
}

// 연산자 설정 함수
function setOperator(op) {
  if (!operators.includes(op)) {
    showError("유효한 연산자가 아닙니다.");
    return;
  }
  if (currentInput === "") {
    showError("숫자를 먼저 입력하세요.");
    return;
  }
  firstNumber = Number(currentInput);
  if (isNaN(firstNumber)) {
    showError("유효한 숫자가 아닙니다.");
    return;
  }
  operator = op;
  currentInput = "";
  updateDisplay("0");
}

// 계산 실행 함수
function calculate() {
  if (firstNumber === null || operator === null || currentInput === "") {
    showError("계산을 완료할 수 없습니다.");
    return;
  }

  const secondNumber = Number(currentInput);
  if (isNaN(secondNumber)) {
    showError("유효한 숫자가 아닙니다.");
    return;
  }

  if (operator === "/" && secondNumber === 0) {
    showError("0으로 나눌 수 없습니다.");
    return;
  }

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      showError("지원되지 않는 연산자입니다.");
      return;
  }

  updateDisplay(result);
  showResult(`결과: ${result}`);

  const record = {
    firstNumber,
    operator,
    secondNumber,
    result,
  };
  history.push(record);
  console.log(JSON.stringify(history));

  // 상태 초기화
  currentInput = result.toString();
  firstNumber = null;
  operator = null;
}

// 디스플레이 업데이트
function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

// 결과 출력
function showResult(message) {
  document.getElementById("result").innerText = message;
}

// 에러 출력
function showError(message) {
  document.getElementById("result").innerText = "에러: " + message;
}
function clearAll() {
  currentInput = "";
  firstNumber = null;
  operator = null;
  result = null;
  updateDisplay("0");
  showResult("결과: ");
}
