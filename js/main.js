let griglia = document.querySelector(".container");
let select = document.querySelector("#select");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    griglia.innerHTML ="";
    if (select.value == "easy"){
        for (let i = 1; i <= 100; i++) {
            let casella = quadrato(i)
            griglia.append(casella);
    }
    }

//*****************************/ PARTE DEL SELECT \*******************
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
    
    
    function quadrato(contenuto) {
        let square = document.createElement("div");
        square.classList.add("square", "red");
        btn.classList.add("full");
        square.addEventListener("click", function(){
            if (square.classList.contains("red")){
                square.append(contenuto);
                square.classList.add("white");
                square.classList.remove("red");
            }
            else if (square.classList.contains("red", "squareMed")){
                square.append(contenuto);
                square.classList.remove("square");
                square.classList.add("white");
                square.classList.remove("red");
            }
            else if (square.classList.contains("red", "squareHard")){
                square.append(contenuto);
                square.classList.remove("square");
                square.classList.add("white");
                square.classList.remove("red");
            }
        } )
        return square
    }
    
})


