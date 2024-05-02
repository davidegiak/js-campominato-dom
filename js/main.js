let griglia = document.querySelector(".container");
let select = document.querySelector("#select");
const btn = document.querySelector("#btn");
let bombs =[];
let mina = 1;
let punteggio = 0;
let win = 84;
// ************/AL CLICK DEL BOTTONE SI GENERANO LE GRIGLIE\*****************
btn.addEventListener("click", function(){
    griglia.innerHTML ="";
    punteggio = 80;
    console.log("il tuo punteggio è:",punteggio)
    if (select.value == "easy"){
        for (let i = 1; i <= 100; i++) {
            let casella = quadrato(i)
            griglia.append(casella);
            
        }
// ***********CREO LE BOMBE DA APPLICARE SULLE CASELLE AUTOMATICAMENTE AL CLICK DEL BOTTONE
  
      while (bombs.length < 16) {
        mina = Math.floor(Math.random() * 100) + 1;
        if (mina.value != bombs.includes){
            bombs.push(mina);
            console.log(mina)
        }
      }
    }
    else if (punteggio == 84){
        alert("U WIN")
        alert("IL TUO PUNTEGGIO E':" + punteggio)
    }

//*****************************/ PARTE DELLE DIFFICOLTA' \*******************
    // else if(select.value == "medium"){
    //     for (let i = 1; i <= 81; i++) {
    //         let casella = quadrato(i)
    //         griglia.append(casella);
    //         casella.classList.add("squareMed")
    //         casella.classList.remove("square")
    // }
    // }

    // else {
    //     for (let i = 1; i <= 49; i++) {
    //         let casella = quadrato(i)
    //         griglia.append(casella);
    //         casella.classList.add("squareHard");
    //         casella.classList.remove("square");
    // }
    // }
//  *********************************************************************\
    
// **********************/ FUNZIONE PER LA CREAZIONE DEL QUADRATO \*********************
    
    function quadrato(contenuto) {
        let square = document.createElement("div");
        square.classList.add("square", "red");
        btn.classList.add("full");
        square.addEventListener("click", function(){
            if (square.classList.contains("red")){
                square.append(contenuto);
                square.classList.add("white");
                square.classList.remove("red");
                if (!bombs.includes(contenuto)) {

                    punteggio++
                    console.log("il punteggio è:",punteggio) 
                }
                else if (bombs.includes(contenuto)) {
                    square.classList.add("bomba")
                    alert("YOU LOOSE")
                    alert("IL TUO PUNTEGGIO E':" + punteggio)
                    griglia.innerHTML="";
                }
            }
            
            // else if (square.classList.contains("red", "squareMed")){
            //     square.append(contenuto);
            //     square.classList.remove("square");
            //     square.classList.add("white");
            //     square.classList.remove("red");
            // }
            // else if (square.classList.contains("red", "squareHard")){
            //     square.append(contenuto);
            //     square.classList.remove("square");
            //     square.classList.add("white");
            //     square.classList.remove("red");
            // }
           
        } )
        return square
    }
    
    
})



