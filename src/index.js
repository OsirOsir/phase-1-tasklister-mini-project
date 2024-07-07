document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskDesc = document.getElementById("new-task-description").value;
    handleToDo(taskDesc);
    taskForm.reset()
    });
});

function handleToDo(todo) {
  let li = document.createElement('li')
  // let btn = document.createElement('button')
  // btn.addEventListener("click",deletBtn)
  li.textContent = `${todo}  `
  // btn.textContent = 'X'
  // li.appendChild(btn)
  document.getElementById("tasks").appendChild(li)
}

function deletBtn(e) {
  e.target.parentNode.remove()
}
