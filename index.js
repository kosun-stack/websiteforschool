var name = prompt("Ваше ім'я?", "");

alert("Прувет, " + name + "!");

net.style.display = "block";

if (name) {
    var title = document.getElementById("halo");
    title.textContent = name + "! ласкаво просимо на офіційний сайт нашого класу!";
}