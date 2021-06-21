"use strict";

document.getElementById("patvirtinti").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    let kvadratas = {
        a: 0,
        b: 0,

        paleidimas: function(a, b) {
            this.a = a;
            this.b = b;
        },

        plotas: function() {
            return this.a * this.b;
        },

        perimetras: function() {
            return 2 * this.a + 2 * this.b;
        },

        istrizaine: function() {
            return (a ** 2 + b ** 2) ** 0.5;
        }
    }

    kvadratas.paleidimas(a, b);
    document.getElementById("rezultatas").innerHTML = "Plotas: " + kvadratas.plotas() +
    "<br>" + "Perimetras: " + kvadratas.perimetras() + "<br>" + "Įstrižainė: " + kvadratas.istrizaine();

    let div = document.getElementById("kvadratas");
    div.style.width = a + "px";
    div.style.height = b + "px";
    div.style.backgroundColor = "black";
});