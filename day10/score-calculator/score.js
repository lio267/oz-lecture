alert("점수별 등급체크 페이지입니다. 점수를 입력해주세요");
// 사용자 입력
let input = prompt("점수를 입력하세요 (0~100):");
let score = Number(input);
const maxScore = 105;

if (isNaN(score) || score < 0 || score >= 105) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  score++;
  score += 5;

  if (score > maxScore) {
    score = maxScore;
  }

  var grade;

  if (score >= 105) {
    grade = "S";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  let status = score >= 60 ? "Pass" : "Fail";

  let message;

  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      if (score === 105) {
        message = "Perfect Score!";
      } else {
        message = "Excellent work!";
      }
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
    default:
      message = "Unknown grade.";
  }

  console.log("Final Score:", score);
  console.log("Grade:", grade);
  console.log("Status:", status);
  console.log("Message:", message);
}

// 최종점수 계산 (5점 추가)

// 등급 결정 (if문)

// 합격/불합격 여부 결정 (삼항연산자)

// 등급에 따른 console.log() 출력 (switch문)

// 문자열을 숫자로 바꾸기
