const addTodo = () => {
  //create new todo item
  const newTodoInput = document.getElementById("newTodo");
  let currentTodoList = document.getElementById("todoList").innerHTML;
  currentTodoList += `<li class="todo">${newTodoInput.value}</li>`;
  document.getElementById("todoList").innerHTML = currentTodoList;
  newTodoInput.value = "";
  // update the displayed item count
  updateItemCount()
};

const updateItemCount = () => {
  let count = getItemCount();
  document.getElementById("itemCount").innerHTML = count;
}

const getItemCount = () => {
  let currentTodoList = document.getElementById("todoList");
  let count = currentTodoList.childNodes.length;
  return count;
}

//remove all elements from the to do list
const deleteDataValue = () => {
  let listValue = document.getElementById("todoList");
  listValue.innerHTML = "";
}

//sorting the list values
const sortListValues = () => {
  let run, shouldSwitch
  run = true;

  while(run){
    run = false;
    let listValues = document.getElementsByTagName("li");
    for (i=0; i<listValues.length-1; i++){
      shouldSwitch = false;
      //if the current value is higher than the next value in alphabatical order, mark it as true to shouldSwitch and break from the loop
      if(listValues[i].innerHTML.toLowerCase() > listValues[i+1].innerHTML.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch){
      listValues[i].parentNode.insertBefore(listValues[i+1], listValues[i]);
      run = true; 
    }
  }

}

document.getElementById("addTodo").addEventListener("click", addTodo);
document.getElementById("deleteAllLink").addEventListener("click", deleteDataValue);
document.getElementById("sortLink").addEventListener("click", sortListValues);

