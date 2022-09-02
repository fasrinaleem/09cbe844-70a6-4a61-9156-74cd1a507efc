# Overview

This template has a simple TODO application using JavaScript, HTML and CSS.

## Running the tests

Install [jestjs](https://jestjs.io/docs/en/getting-started) CLI as its used for running tests in this template.

Install project dependencies:

```npm install```

Run tests:

```jest```

## Running the app

You can open the `index.html` in a browser directly from the directory itself.

## Tasks to complete

### Task-1: Change the name of the application

- Title should be changed to 'My Todo List' from the current title 'Todo App'
- The change should be done at both of below places:
  - document title in the browser
  - Display title on the web page

### Task-2: Change the button color

- Change the background color of 'Add todo' button to 'red' by changing its CSS class.

### Task-3: Fix the JavaScript item count bug

- You will notice that the Todo item count displayed at the top of the UI is showing a wrong count (a count 1 more than actual) when the 'Add todo' button is clicked.
- Go through the 'scripts.js' code and fix this issue, so that the correct count is displayed.

### Task-4: Disable button until Todo description is entered

- Currently it is possible to add Todo items without entering any description text in the text box
- Implement validation to keep the Add todo button disabled until user adds non empty text into the text box
- Write and JavaScript logic required in 'scripts.js'
- HINT: Use 'keyup' event of the textbox to trigger the validation

### Task-5: Implement Todo items 'delete all' functionality

- When 'delete all' link is clicked, nothing happens currently
- Implement this feature to remove all the list items from the DOM when 'delete all' is clicked

### Task-6: Implement 'sort' functionality

- When 'sort' is clicked, nothing happens currently
- Implement 'sort' feature to sort the todo items a-z alphabetically
