const InputBox = document.getElementById("inputBox");
const taskContainer = document.getElementById("task-container");
const messageBox = document.getElementById("message-section");
const messageText = document.getElementById("msg-text");


function addTask() {
    if(InputBox.value == "") {
        messageText.innerHTML = "Please enter a task!";
        messageBox.style.backgroundColor = "#ff5945";
        messageBox.style.display = "block";
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = InputBox.value;
        taskContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        InputBox.value = "";
         // showing green message box for success
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "green";
        messageText.innerHTML = "New task added Successfully!";
    }
    saveData();
}

taskContainer.addEventListener("click", doSomething);

function doSomething(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // showing green message box for success
        messageBox.style.display = "block";
        messageBox.style.backgroundColor = "#ff5945";
        messageText.innerHTML = "Task Deleted!";
        saveData();
    }
}

// local storage in javascript

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}
function showData() {
    taskContainer.innerHTML = localStorage.getItem("data");
}

// hide message 
function hideMessage() {
    messageBox.style.display = "none";
}

// displaying saved data each time
showData();