const fs = require('fs') 

let markup = fs.readFileSync("index.html").toString();
document.body.innerHTML = markup;

test('Task-1: Change document title', () => {
  // browser title
  expect(document.title).toBe("My Todo List");
});

test("Task-1: Change display title", () => {
  //display title
  let title = document.getElementById("appTitle").innerHTML;
  expect(document.title).toBe("My Todo List");
});

test("Task-2: Change button background color", () => {
  const element = document.getElementById("addTodo");
  let compStyles = window.getComputedStyle(element);
  expect(compStyles.getPropertyValue("background-color")).toBe("red");
});