        
        
        //Kintamojo apibrezimas
        let x
        let y
        let z, g;
        //Reiksmes kintamajam priskyrimas
        x = 16;
        y = 16.6;
        z = "Labas pasauli";
        
        console.log("Labas pasauli");
        console.log(document.querySelector(".tekstas"));
        console.log(document.querySelector(".tekstas").classList);
        console.log(document.querySelector(".tekstas").textContent);


        document.querySelector(".tekstas").classList.add('javascript-klase');
        document.querySelector(".tekstas").classList.remove('negrazus-tekstas');

        console.log(document.querySelector(".tekstas").classList);