const fs = require("fs");

let markup = fs.readFileSync("index.html").toString();
document.documentElement.innerHTML = markup;

const script = require("../script.js");

test("View Todo Items as Bullet points", () => {
  const todoList = document.getElementById("todoList");
  expect(todoList.tagName).toBe("UL");
});

test("The font size of title of the app should be 40px", () => {
  const element = document.getElementById("appTitle");
  let compStyles = window.getComputedStyle(element);
  expect(compStyles.getPropertyValue("font-size")).toBe("40px");
});

test("Can add an item to the todo list", () => {

  const todoList = document.getElementById("todoList");
  let startCount = todoList.childNodes.length;

  //add item
  const newTodoInput = document.getElementById("newTodo");
  newTodoInput.value = "New todo item";
  newTodoInput.dispatchEvent(new Event("keyup"));
  const addTodoBtn = document.getElementById("addTodo");
  expect(addTodoBtn.disabled).toBe(false);
  addTodoBtn.click();

  expect(todoList.childNodes.length).toBe(startCount + 1);
});
