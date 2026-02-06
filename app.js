document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const addBtn = document.getElementById("todo-add-btn");
  if (!todoForm || !todoInput || !todoList) return;

  function addTask() {
    const text = todoInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = text;

const delBtn = document.createElement("button");
delBtn.textContent = "Sil";
delBtn.className = "btn danger";
//addEventListener arastır
delBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // li'ye tıklama olayını tetiklemesin
  li.remove();
});

li.addEventListener("click", () => {
  li.classList.toggle("completed");
});

li.appendChild(span);
li.appendChild(delBtn);
todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();//arastır
    addTask();
  });

  if (addBtn) {
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addTask();
    });
  }
});
