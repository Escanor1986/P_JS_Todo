import "./style.css";
import { todos } from "./data";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
  displayTodo();
});

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) /* (index) <== *** */ => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    // Grâce aux "closures" (cfr stack dans la phase de hoisting) JavaScript
    // nous avons accès au paramètre (index) *** de la fonction parente
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p class="${todo.done ? "done" : ""}">${todo.text}</p>
  `;
  li.addEventListener("click", (event) => {
    toggleToto(index);
  });
  li.appendChild(buttonDelete);
  return li;
};

const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  buttonSave.addEventListener("click", (event) => {
    editTodo(index, input);
  });
  li.append(input, buttonCancel, buttonSave);
  return li;
};

const addTodo = (text) => {
  // On pourrait également utiliser la méthode trim(); (text = text.trim() ==> if(text) ...)
  if (text !== "") {
    todos.push({
      text: `${text[0].toUpperCase()}${text.slice(1)}`,
      done: false,
    });
    displayTodo();
  } else {
    displayTodo();
  }
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

const toggleToto = (index) => {
  todos[index].done = !todos[index].done; // si on met !! ==> variable d'interpolation
  displayTodo();
};

const toggleEditMode = (index) => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const editTodo = (index, input) => {
  const value = input.value;
  todos[index].text = value;
  todos[index].editMode = false;
  displayTodo();
};

displayTodo();
