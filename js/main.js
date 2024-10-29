let griglia = document.querySelector(".riga");
let select = document.querySelector("#select");
let firstCont = document.querySelector('#first')
const btn = document.querySelector("#btn");
let bombs =[];
let mina = 1;
let punteggio = 0;
let win = (100 - 16);
let winMed = (81 - 16);
let winHard = (49 - 16);

// ************/AL CLICK DEL BOTTONE SI GENERANO LE GRIGLIE\*****************
btn.addEventListener("click", function(){
    griglia.innerHTML ="";
    punteggio = 0;
    bombs = [];
    console.log("il tuo punteggio è:",punteggio)
    if (select.value == "easy"){
        for (let i = 1; i <= 100; i++) {
            let casella = quadrato(i);
            griglia.append(casella);
            firstCont.classList.add('d-none');
        }
// ***********CREO LE BOMBE DA APPLICARE SULLE CASELLE AUTOMATICAMENTE AL CLICK DEL BOTTONE
  
      while (bombs.length < 16) {
        mina = Math.floor(Math.random() * 100) + 1;
        if (!bombs.includes(mina)){
            bombs.push(mina);
            console.log(mina);
        }
      }
    }
    

//*****************************/ PARTE DELLE DIFFICOLTA' \*******************
    else if(select.value == "medium"){
        for (let i = 1; i <= 81; i++) {
            let casella = quadrato(i)
            griglia.append(casella);
            casella.classList.add("squareMed")
            casella.classList.remove("square")
        }
        while (bombs.length < 16) {
        mina = Math.floor(Math.random() * 81) + 1;
        if (!bombs.includes(mina)){
            bombs.push(mina);
            console.log(mina);
        }
        }
    }

    else {
        for (let i = 1; i <= 49; i++) {
            let casella = quadrato(i)
            griglia.append(casella);
            casella.classList.add("squareHard");
            casella.classList.remove("square");
        }
        while (bombs.length < 16) {
        mina = Math.floor(Math.random() * 49) + 1;
        if (!bombs.includes(mina)){
            bombs.push(mina);
            console.log(mina);
        }
        }
    }
//  *********************************************************************\
    
// **********************/ FUNZIONE PER LA CREAZIONE DEL QUADRATO \*********************
    
    function quadrato(contenuto) {
        let square = document.createElement("div");
        square.classList.add("square", "red");
        btn.classList.add("full");

// *******************//AGGIUNGO UN EVENTO AL CLICK DEL QUADRATO\\**********************

        square.addEventListener("click", function(){
            if (square.classList.contains("red")){
                square.append(contenuto);
                square.classList.add("white");
                square.classList.remove("red");

// *****************//SE IL QUADRATO SU CUI CLICCO HA UN NUMERO NON CONTENUTO NELLE BOMBE DAI UN PUNTO\\***********************

                if (!bombs.includes(contenuto)) {
                    punteggio++;
                    console.log("il punteggio è:",punteggio);

// *****************//SE IL PUNTEGGIO ARRIVA A 84(VAR WIN)HAI VINTO\\***********************************

                    if (punteggio == win){
                        alert("U win");
                        alert("IL TUO PUNTEGGIO E':" + punteggio);
                        griglia.classList.add("noTuch");
                        }
                }
//*****************//SE IL NUMERO DEL QUADRATO CLICCATO HA UNA BOMBA ALLORA HAI PERSO\\****************************************

                else if (bombs.includes(contenuto)) {
                    square.classList.add("bomba");
                    alert("YOU LOOSE");
                    alert("IL TUO PUNTEGGIO E':" + punteggio);
                    griglia.classList.add("noTuch");
                }
            }

            else if (square.classList.contains("red", "squareMed")){
                square.append(contenuto);
                square.classList.remove("square");
                square.classList.add("white");
                square.classList.remove("red");
                if (!bombs.includes(contenuto)) {
                    punteggio++;
                    console.log("il punteggio è:",punteggio);
                    if (select.value("medium") && punteggio == winMed){
                        alert("U win");
                        alert("IL TUO PUNTEGGIO E':" + punteggio);
                        griglia.classList.add("noTuch");
                        }
                }
                else if (bombs.includes(contenuto)) {
                    square.classList.add("bomba");
                    alert("YOU LOOSE");
                    alert("IL TUO PUNTEGGIO E':" + punteggio);
                    griglia.classList.add("noTuch");
                }
               
            }

            else if (square.classList.contains("red", "squareHard")){
                square.append(contenuto);
                square.classList.remove("square");
                square.classList.add("white");
                square.classList.remove("red");
                if (!bombs.includes(contenuto)) {
                    punteggio++;
                    console.log("il punteggio è:",punteggio);
                    if (punteggio == winHard){
                        alert("U win");
                        alert("IL TUO PUNTEGGIO E':" + punteggio);
                        griglia.classList.add("noTuch");
                        }
                }
                else if (bombs.includes(contenuto)) {
                    square.classList.add("bomba");
                    alert("YOU LOOSE");
                    alert("IL TUO PUNTEGGIO E':" + punteggio);
                    griglia.classList.add("noTuch");
                }
            }
           
        } )
        return square;
    }
   
    // ************CHIUDO LA FUNZIONE**********************************
})



