const maxStars = 10;
let input;
var stars = "";

while (true) {
  input = prompt("1~10 사이 숫자를 입력해 주세요 (1-10):");
  input = Number(input);

  if (isNaN(input) || input < 1 || input > maxStars) {
    console.log("1~10사이의 숫자가 아니라면 다시입력해주세요.");
    continue;
  }

  break;
}

function printStars(count = 1) {
  stars = "";
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(stars);
}

printStars(input);
