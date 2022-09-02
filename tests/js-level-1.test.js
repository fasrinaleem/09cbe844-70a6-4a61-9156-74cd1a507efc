const fs = require("fs");
const markup = fs.readFileSync("index.html").toString();
const js = fs.readFileSync("script.js").toString();

beforeEach(() => {
  document.documentElement.innerHTML = markup;
  eval(js);
});

test("Task-3: Fix the JavaScript item count issue", () => {
  addListItem("New todo item 1");
  addListItem("New todo item 2");

  let count = document.getElementById("itemCount").innerHTML;
  expect(count).toBe("2");
});

test("Task-4: Disable button until Todo description is entered", () => {
  let button = document.getElementById("addTodo");
  expect(button.disabled).toBe(true);

  let text = document.getElementById("newTodo");
  text.value = "my todo item";
  text.dispatchEvent(new Event("keyup"));

  expect(button.disabled).toBe(false);
});

test("Task-5: Implement Todo items 'delete all' functionality", () => {

  var startCount = document.getElementsByClassName("todo").length;

  //add item
  addListItem("New todo item");

  //now todo count should be +1 from start count
  expect(document.getElementsByClassName("todo").length).toBe(startCount + 1);

  //remove the added item
  document.getElementById("deleteAllLink").click();

  //now element count should be as started
  expect(document.getElementsByClassName("todo").length).toBe(0);
});

test("Task-6: Implement 'sort' functionality", () => {
  addListItem("C");
  addListItem("B");
  addListItem("A");

  document.getElementById("sortLink").click();

  expect(document.getElementsByClassName("todo")[0].innerHTML).toBe("A");
  expect(document.getElementsByClassName("todo")[1].innerHTML).toBe("B");
  expect(document.getElementsByClassName("todo")[2].innerHTML).toBe("C");
  
});


function addListItem(name) {
  const newTodoInput = document.getElementById("newTodo");
  newTodoInput.value = name;
  newTodoInput.dispatchEvent(new Event("keyup"));
  const addTodoBtn = document.getElementById("addTodo");
  expect(addTodoBtn.disabled).toBe(false);
  addTodoBtn.click();
}