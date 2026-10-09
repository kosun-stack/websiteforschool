var name = sessionStorage.getItem("userName");
if (!name) {
    name = prompt("Ваше ім'я?", "");
    if (name) {
        sessionStorage.setItem("userName", name);
        alert("Прувет, " + name + "!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var net = document.getElementById("net") || document.querySelector(".net");
    if (net) {
        net.style.display = "block";
    }
    if (name) {
        var title = document.getElementById("halo");
        if (title) {
            title.textContent = name + "! Ласкаво просимо на офіційний сайт нашого класу!";
        }
    }
});