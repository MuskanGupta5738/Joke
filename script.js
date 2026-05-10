// Button text change
function changeText() 
{
    document.getElementById("demo").innerHTML = "You clicked the button!";
}

// Form validation
function validateForm() 
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }
    alert("Form submitted successfully ✅");

    return false;
}

function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskInput").value = "";
    displayTasks();
    
}


function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerHTML =
                data.setup + " 🤔 <br>" + data.punchline;
        });
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        li.onclick = function () {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        };

        list.appendChild(li);
    });
}


let products = [
    { name: "Phone", price: 1000 },
    { name: "Shoes", price: 300 },
    { name: "Watch", price: 700 }
];

function displayProducts(list) {
    let ul = document.getElementById("productList");
    ul.innerHTML = "";

    list.forEach(p => {
        let li = document.createElement("li");
        li.innerText = p.name + " - ₹" + p.price;
        ul.appendChild(li);
    });
}

function filterProducts(type) {
    if (type === "low") {
        displayProducts(products.filter(p => p.price < 500));
    } else if (type === "high") {
        displayProducts(products.filter(p => p.price > 500));
    } else {
        displayProducts(products);
    }
}

window.onload = function () {
    displayTasks();
    displayProducts(products);
};

