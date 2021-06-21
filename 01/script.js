"use strict";

document.getElementById("patvirtinti").addEventListener("click", function() {
    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

    const skaiciuotuvas = {
        sk1: 10,
        sk2: 11,

        paleidimas: function(a,b) {
            this.sk1 = a;
            this.sk2 = b;
        },
    
        sudetis: function() {
            let suma;
            suma = this.sk1 + this.sk2;
            return suma;
        },

        atimtis: function() {
            let atimtis;
            atimtis = this.sk1 - this.sk2;
            return atimtis;
        },
    
        daugyba: function() {
            let daugyba;
            daugyba = this.sk1 * this.sk2;
            return daugyba;
        },
    
        dalyba: function() {
            let dalyba;
            dalyba = this.sk1 / this.sk2;
            return dalyba;
        },

        saknis: function() {
            let saknis;
            saknis = this.sk1 ** (1 / this.sk2);
            return saknis;
        },

        liekana: function() {
            let liekana;
            liekana = this.sk1 % this.sk2;
            return liekana;
        },
    
        rezultatas: function() {
            let rezultatas = [];
            rezultatas = [this.sudetis(), this.atimtis(), this.daugyba(),
            this.dalyba(), this.saknis(), this.liekana()];
            console.log(rezultatas);
        },

        rezultatoVidurkis: function() {
            let vidurkis;
            vidurkis = (this.sudetis() + this.atimtis() + this.daugyba() + 
            this.dalyba() + this.saknis() + this.liekana()) / 6;
            console.log(vidurkis);
        }
    };  
    skaiciuotuvas.paleidimas(sk1,sk2);
    skaiciuotuvas.rezultatas();
    skaiciuotuvas.rezultatoVidurkis();
});