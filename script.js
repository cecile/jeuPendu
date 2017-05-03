  

var image = new Image();                                   //image.src = "imgPendu.png";
var motMystere;                                            //var mots = new Array() remplacé par []
var mots = ["javascript", "bonjour", "decouverte", "youpi", "code", "lexomil", "desespoir", "absurde", "fastidieux", "malchanceux"];
var nombrecoup = 7;                                        //nombre de chances//
var coupjouer = 0;                                         //depart//
var clavier = document.querySelectorAll(".lettre");        //variable clavier qui selectionne toutes les lettres
var motMystere = mots[Math.floor(Math.random()*mots.length)];//choix d'un mot dans le tableau//   
var motMystereMaj = motMystere.toUpperCase();
var divBoite = document.querySelector(".reponse");
          
for(i=0; i<motMystereMaj.length; i++){                      //boucle qui calcul le nbr de lettre dans le mot mystere
    var input = document.createElement("input");            //creation des input par rapport a la longeur du mot
    divBoite.appendChild(input);                            //dans la divBoite tu cree la variable input
    var lettre = motMystereMaj.charAt(i);                   //ce qui permet de comparer les lettres du mot dans le input : charAt.
    input.classList.add("boite");                           //ajoute une classe css a chaque input creer par le js                                    
}
        
for(i=0; i<clavier.length; i++){
    clavier[i].addEventListener("click",verifier);          // boucle qui mets un evenement click a toutes les classes lettre 
}

function verifier(){                                        // fonction qui vas recuperer le contenu html et l'attribut au click
    coupjouer++
    var boiteL = document.getElementsByClassName("boite");    
    var recup = this.innerText;

    if(coupjouer < 8){
        
        for(i=0; i < motMystereMaj.length; i++){

            if(motMystereMaj[i] == recup ){
                boiteL[i].value = recup;                //afficher et recuperer la valeur du clic dans l'inout si correspond au mot
            }
        }    
    }else {
        alert("vous avez perdu!!!!!!!!")
    }
}