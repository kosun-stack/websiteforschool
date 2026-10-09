var name = sessionStorage.getItem("userName");

if (!name) {
    name = prompt("Ваше ім'я?", "");
    if (name) {
        sessionStorage.setItem("userName", name);
    }
}

if (name) {
    alert("Прувет, " + name + "!");
} else {
    alert("Прувет!");
}
document.addEventListener("DOMContentLoaded", function() {
    var net = document.querySelector(".net") || document.getElementById("net");
    if (net) {
        net.style.display = "block";
    }
    if (name) {
        var title = document.getElementById("halo");
        if (title) {
            title.textContent = name + "! ласкаво просимо на офіційний сайт нашого класу!";
        }
    }
});