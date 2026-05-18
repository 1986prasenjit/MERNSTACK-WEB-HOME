const inputValueElem = document.getElementById("inputValue");
const addTodoButtonElem = document.getElementById("addTodoButton");
const todoListULElem = document.getElementById("todoListUL");

let todoArr = [];

addTodoButtonElem.addEventListener("click", function () {
  let inputText = inputValueElem.value.trim();

  if (inputValueElem.value.trim() === "") return;

  let todoObj = {
    id: Date.now().toString(),
    text: inputText,
    completed: false,
  };
  todoArr.push(todoObj);
  inputValueElem.value = "";
  renderTask(todoObj);
});

function renderTask(task) {
  let todoLI = document.createElement("li");

  todoLI.setAttribute("todoLIID", task.id);

  todoLI.innerHTML = `
        <p>${task.text}</p>
        <button>DELETE</button>
    `;

  todoListULElem.appendChild(todoLI);

  todoLI.querySelector("button").addEventListener("click", function () {
    todoArr = todoArr.filter((item) => item.id !== task.id);
    todoLI.remove();
  });
}
