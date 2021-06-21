"use strict";

let objektai = [];

for (let i = 0; i < 100; i++) {
    let vardas = "vardas" + (i + 1);
    let objektas = {
        vardas: vardas,
        id: i + 1
    }
    objektai[i] = objektas;
}

console.log(objektai);

for (let i in objektai) {
    let div = document.createElement("div");
    div.innerHTML = "id: " + objektai[i].id + ", vardas: " + objektai[i].vardas;
    if (i % 2 == 1) {
        div.style.backgroundColor = "blue";
    }
    document.getElementById("container").appendChild(div);
}