const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

const resetTimerInput = () => {
  timerInput.value = "";
};

const resetTimerDisp = () => {
  timerDisplay.className = "";
  timerDisplay.textContent = "";
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  timerDisplay.textContent = `타이머: ${sec}초`;
};

const shoiwTimerComplete = () => {
  resetTimerDisp();
  timerDisplay.className = "success";
  timerDisplay.textContent = `타이머 종료!`;
};

const showTimerError = (message) => {
  timerDisplay.className = "error";
  timerDisplay.textContent = message;
};

const processTimer = (sec) => {
  showTimerSec(sec);
  const timer = setInterval(() => {
    sec -= 1;
    showTimerSec(sec);
    if (sec < 0) {
      clearInterval(timer);
      shoiwTimerComplete();
    }
  }, 1000);
};

// 타이머 시작
function handleClickTimer() {
  try {
    const timeStr = timerInput.value.trim();
    const time = Number(timeStr);
    if (isNaN(time)) throw new Error("숫자를 입력하십시오.");
    if (time < 1 || time > 10)
      throw new Error("1부터 10사이의 값을 입력해야 합니다.");
    processTimer(time);
  } catch (error) {
    // 오류 메세지 출력
    showTimerError(error.message);
    resetTimerInput();
  }
}
