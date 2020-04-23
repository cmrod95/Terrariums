

let heyYall = function () {
    alert("Hi! I'm Rob!");
    let name = prompt("What's your name?");
    alert("Hi " + name + "!");
    document.getElementById("welcome").innerText = name;
}

document.getElementById("hey").addEventListener("click", heyYall);





