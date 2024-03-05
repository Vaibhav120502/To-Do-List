document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.getElementById("list-container");
    showTask();

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
});

function fun() {
    const input = document.getElementById("input-area");
    const listContainer = document.getElementById("list-container");

    if (input.value === '') {
        alert("Please enter something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7'; 
        li.appendChild(span);
    }
    input.value = ''; 
    saveData(); // Call saveData() here
}

function saveData(){
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("data" , listContainer.innerHTML);
}
