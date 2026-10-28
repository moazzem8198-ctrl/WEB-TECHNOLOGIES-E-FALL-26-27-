let name = localStorage.getItem("studentName");
let

 events = JSON.parse(localStorage.getItem("events")) || [];
let summary = document.getElementById("summary");

let output = "Name: " + (name || "") + "<br>Events:<br>";

for (let i = 0; i < events.length; i++) {
    output += events[i] + "<br>";
}

output += "Total Fee: " + (events.length * 150) + " Taka";
summary.innerHTML = output;

function goBack() {
    window.location.href = "index.html";
}
