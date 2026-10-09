function updateTitle(userName) {
    var title = document.getElementById("halo");
    if (title && userName) {
        title.textContent = userName + "! Ласкаво просимо на офіційний сайт нашого класу!";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var name = sessionStorage.getItem("userName");
    if (!name) {
        name = prompt("Ваше ім'я?", "");
        if (name) {
            sessionStorage.setItem("userName", name);
            alert("Прувет, " + name + "!");
        }
    }
    updateTitle(name);
    var net = document.getElementById("net") || document.querySelector(".net");
    if (net) {
        net.style.display = "block";
    }
});
function changeName() {
    var currentName = sessionStorage.getItem("userName") || "";
    var newName = prompt("Введіть нове ім'я:", currentName);
    
    if (newName) {
        sessionStorage.setItem("userName", newName);
        updateTitle(newName);
    }
}