import { ITodo } from "./ITodo";

export class TodoList implements ITodo {
  task: string;
  priority: number;
  completed: boolean;

  todos: ITodo[];

  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  }

  //metod för att lägga till nya todos
  public addTodo(task: string, priority: number): boolean {
    if (
      (task && priority == 1) ||
      (task && priority == 2) ||
      (task && priority == 3)
    ) {
      const newTodo: ITodo = { task, completed: false, priority };
      this.todos.push(newTodo);

      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    }
  }
  //metod för att markera todo som klar
  public markTodoCompleted(todoIndex: number): void {
    this.todos[todoIndex].completed = true;

    this.saveToLocalStorage();
  }
  //metod för att hämta lista med todos
  public getTodos(): ITodo[] {
    return this.todos;
  }
  //metod för att spara till local storage
  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  //metod för att hämta todos från localstorage
  public loadfromLocalStorage(): void {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
  }
  //metod för att radera enskilda todos
  public deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.saveToLocalStorage();
  }
}
