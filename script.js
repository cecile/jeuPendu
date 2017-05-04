  

var images = document.getElementsByClassName("p");
var perdu = document.querySelector(".perdu");              // var qui recupere la phrase lorsque l'on perd
var gagner = document.querySelector(".gagner");              // var qui recupere la phrase lorsque l'on perd
var afficheReponse = document.getElementById("solut");      // recup id solut html
var motMystere;                                            //var mots = new Array() remplacé par []
var mots = ["javascript", "bonjour", "decouverte", "youpi", "code", "lexomil", "desespoir", "absurde", "fastidieux", "malchanceux"];
var nombrecoup = 7;                                        //nombre de chances//
var coupjouer = 0;                                         //depart//
var clavier = document.querySelectorAll(".lettre");        //variable clavier qui selectionne toutes les lettres
var motMystere = mots[Math.floor(Math.random()*mots.length)];//choix d'un mot dans le tableau//   
var motMystereMaj = motMystere.toUpperCase();
var divBoite = document.querySelector(".reponse");

      //boucle

for(i=0; i<motMystereMaj.length; i++){                      //boucle qui calcul le nbr de lettre dans le mot mystere
    var input = document.createElement("input");            //creation des input par rapport a la longeur du mot
    divBoite.appendChild(input);                            //dans la divBoite tu cree la variable input
    var lettre = motMystereMaj.charAt(i);                   //ce qui permet de comparer les lettres du mot dans le input : charAt.
    input.classList.add("boite");                           //ajoute une classe css a chaque input creer par le js                                    
}
        
for(i=0; i<clavier.length; i++){
    clavier[i].addEventListener("click",verifier);          // boucle qui mets un evenement click a toutes les classes lettre 
}

// fonction qui vas recuperer le contenu html et l'attribut au click

function verifier(){                                        
    
    var boiteL = document.getElementsByClassName("boite");    // boite qui contient les lettres (input)
    var recup = this.innerText;                               // recupere la lettre au click du clavier
    var state = false;                                        // var etat = 
    var str = "";
    
    if(coupjouer < nombrecoup){
        var resultat ="";
        for(i=0; i < motMystereMaj.length; i++){
            
            if(motMystereMaj[i] == recup ){
                boiteL[i].value = recup;                //afficher et recuperer la valeur du clic dans l'input si correspond au mot
                state = true;  
            } 
            str += boiteL[i].value; 
          
        } 
        //console.log(str);
    
        // gagner
        
    if(str == motMystereMaj){
        gagner.classList.remove("cacher");
        afficheReponse.innerHTML = motMystereMaj;
        
   }
        
    //gagner.classList.remove("cacher");
        
    }else{                                             //PERDU
        perdu.classList.remove("cacher");              // enleve la classe cacher et affiche la phrase perdu
        afficheReponse.innerHTML = motMystereMaj;     // recupere la div reponse html et affiche le mot a trouver
        
    }
    
    if(state == false){
        if(coupjouer >= 0 && coupjouer <7){
        coupjouer++;
         //console.log(coupjouer);
        
        images[0].src = "image/pendu"+(coupjouer)+".png";
        }
    }
        //console.log(images[0].src = "image/pendu"+(coupjouer)+".png");
        
           
    }   
