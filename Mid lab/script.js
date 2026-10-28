let e = [];

function addEvent() {
    let box = document.getElementById("event");
    let name = box.value.trim();

    if (name === "") {
        alert("Please enter an event name.");
        return;
    }

    if (e.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    e.push(name);
    box.value = "";
    alert("Event Added");
    showEvents();
}

function showEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    for (let i = 0; i < e.length; i++) {
        let item = document.createElement("li");
        item.textContent = e[i];
        list.appendChild(item);
    }
}

function confirmRegistration() {
    let n = document.getElementById("studentName").value.trim();

    if (n === "" || e.length === 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }

    localStorage.setItem("studentName", n);
    localStorage.setItem("events", JSON.stringify(e));
    window.location.href = "confirm.html";
}