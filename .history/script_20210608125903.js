        
        "use strict";
        //Kintamojo apibrezimas
        let x;
        let y;
        let z, g, p, i;

        let elementas;
        //Reiksmes kintamajam priskyrimas
        x = 16;
        y = 16.6;
        z = "Labas pasauli";
        g = 'Labas pasauli';
        p = "Imone 'Geri studentai'";
        i = ' Imone "Geri studentai" ';

        //Sudetis
        let suma, a, b;
        a = 5;
        b = 6;
        suma = a + b; // 11

        //Skirtumas
        let skirtumas;
        a = 11;
        b = 3;

        skirtumas = a - b;

        a = suma; //11

        //Daugyba
        let sandauga;
        sandauga = a * b; //33

        //Dalyba
        let rez;
        rez = sandauga / 2; // 33/2 = 16.5;

        //Liekanos skaiciavimas
        let liekana;
        liekana = 7 % 4; // 33/2 = 1

        //Kelimas laipsniu
        rez = 5 ** 2;

        sandauga++; //34
        sandauga = sandauga + 1; //35

        sandauga--;//34

        sandauga += 1;


        elementas = document.querySelector(".tekstas");
        
        //Kintamuju isvedimas
        console.log(suma);
        console.log(skirtumas);
        console.log(elementas);
        console.log(sandauga);
        console.log(rez);
        console.log(liekana);
        // console.log("Labas pasauli");
        // console.log(document.querySelector(".tekstas"));
        // console.log(document.querySelector(".tekstas").classList);
        // console.log(document.querySelector(".tekstas").textContent);


        // document.querySelector(".tekstas").classList.add('javascript-klase');
        // document.querySelector(".tekstas").classList.remove('negrazus-tekstas');

        // console.log(document.querySelector(".tekstas").classList);
