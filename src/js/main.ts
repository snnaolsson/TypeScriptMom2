import { TodoList } from "./todo";
import { ITodo } from "./ITodo";

const todoList = new TodoList();
//Eventlyssnare som hindrar formuläret att hanteras som "vanligt" och vid klick på knappen så körs funktionen addTodo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todoForm")! as HTMLFormElement;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
  });
});
//Lägger till ny todo med input från DOM till todoList och kör funktionen printTodos
function addTodo(): void {
  const todoInput = document.getElementById("task") as HTMLInputElement;
  const prioInput = document.getElementById("prio") as HTMLInputElement;

  const t = todoInput.value;
  const p = Number(prioInput.value);

  todoList.addTodo(t, p);
  printTodos();
}

//Skriver ut todos till DOM, sorterade på prio samt om de är avklarade eller ej.
function printTodos() {
  const theTodos = todoList.getTodos();
  const listOfTodos = document.getElementById(
    "todoUlElement"
  ) as HTMLUListElement;
  theTodos.sort(function (a, b) {
    return a.priority - b.priority;
  });
  theTodos.sort(function (a, b) {
    return Number(a.completed) - Number(b.completed);
  });
  if (listOfTodos) {
    listOfTodos.innerHTML = "";
    theTodos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.id = `li${index}`;
      const prio = document.createElement("h2") as HTMLHeadElement;
      prio.innerHTML = `${todo.priority}`;
      if (todo.priority == 1) {
        prio.className = "prioOne";
      } else if (todo.priority == 2) {
        prio.className = "prioTwo";
      } else {
        prio.className = "prioThree";
      }

      const taskInpu = document.createElement("p") as HTMLParagraphElement;
      taskInpu.innerHTML = `${todo.task}`;
      taskInpu.className = "taskClass";

      const deleteSpan = document.createElement("span");
      deleteSpan.textContent = "Radera";
      deleteSpan.className = "deleteBtn";
      deleteSpan.addEventListener("click", () => deleteTodo(index));

      const check = document.createElement("span");
      check.textContent = "Klar";
      check.className = "deleteBtn";
      check.addEventListener("click", () => {
        todoList.markTodoCompleted(index);
        printTodos();
        ani();
      });
      li.appendChild(prio);
      li.appendChild(taskInpu);
      li.appendChild(check);
      li.appendChild(deleteSpan);

      listOfTodos.appendChild(li);
      if (todo.completed == true) {
        li.className = "overlined";
      }
    });
  }
}
//raderar todo
function deleteTodo(index: number): void {
  todoList.deleteTodo(index);
  printTodos();
}
printTodos();

//rensar localstorage samt DOM
const clearList = document.getElementById("deleteAllBtn") as HTMLButtonElement;
clearList.addEventListener("click", () => clearStorage());

function clearStorage(): void {
  todoList.clearStorage();
  const listOfTodos = document.getElementById(
    "todoUlElement"
  ) as HTMLUListElement;
  listOfTodos.innerHTML = "";
}
