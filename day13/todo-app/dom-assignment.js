// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority");

// 할 일 개수 업데이트
function updateTaskCount() {
  const count = taskList.children.length;
  taskCount.textContent = `현재 할 일: ${count}개`;
}

// 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  // 입력값 유효성 검사
  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // li 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // span 생성 (텍스트 담기)
  const span = document.createElement("span");
  span.textContent = taskText;

  // 우선순위가 높음일 경우 스타일 적용
  if (priority === "high") {
    span.style.color = "red";
  }

  // 할 일 텍스트 클릭 시 완료 토글
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-button";

  // 삭제 기능
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // 입력 초기화
  taskInput.value = "";
  prioritySelect.value = "low";

  updateTaskCount();
}

// 전체 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = "";
  updateTaskCount();
}

// 이벤트 리스너 등록
addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearAllTasks);

// Enter 키로도 추가
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
