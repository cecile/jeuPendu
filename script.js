  

var images = document.getElementsByClassName("p");
// var qui recupere la phrase lorsque l'on perd et on gagne
var perdu = document.querySelector(".perdu");              
var gagner = document.querySelector(".gagner"); 
// recup id solut html
var afficheReponse = document.getElementById("solut");      
//var motMystere;  
//var mots = new Array() remplacé par []                                          
var mots = ["javascript", "bonjour", "decouverte", "youpi", "code", "lexomil", "desespoir", "absurde", "fastidieux", "malchanceux"];
 //nombre de chances//
var nombrecoup = 7; 
//depart//                                      
var coupjouer = 0;  
//variable clavier qui selectionne toutes les lettres                                       
var clavier = document.querySelectorAll(".lettre"); 
//choix d'un mot dans le tableau//        
var motMystere = mots[Math.floor(Math.random()*mots.length)]; 
// transforme en majuscule 
var motMystereMaj = motMystere.toUpperCase();
// recup clavier
var divBoite = document.querySelector(".reponse");

    
//boucle qui calcul le nbr de lettre dans le mot mystere

for(i=0; i<motMystereMaj.length; i++){ 
//creation des input par rapport a la longeur du mot                     
    var input = document.createElement("input"); 
//dans la divBoite tu cree la variable input           
    divBoite.appendChild(input); 
//ce qui permet de comparer les lettres du mot dans le input : charAt.                           
    var lettre = motMystereMaj.charAt(i); 
//ajoute une classe css a chaque input creer par le js                  
    input.classList.add("boite");                                                               
}
 
// boucle qui mets un evenement click a toutes les classes lettre 

for(i=0; i<clavier.length; i++){
    clavier[i].addEventListener("click",verifier);          
}

// fonction qui vas recuperer le contenu html et l'attribut au click

function verifier(){                                        
    
    // boite qui contient les lettres (input)
    var boiteL = document.getElementsByClassName("boite");
    // recupere la lettre au click du clavier    
    var recup = this.innerText;                               
    var state = false; 
    // var str vide qui permet de concatener avec les valeurs des input contenu dans boiteL                                      
    var str = "";
    
    if(coupjouer < nombrecoup){
        var resultat ="";
        for(i=0; i < motMystereMaj.length; i++){
            
            //afficher et recuperer la valeur du clic dans l'input si correspond au mot
            if(motMystereMaj[i] == recup ){
                boiteL[i].value = recup;                
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
        
    //PERDU
        
    }else{    
        // enleve la classe cacher et affiche la phrase perdu                                         
        perdu.classList.remove("cacher");  
        // recupere la div reponse html et affiche le mot a trouver            
        afficheReponse.innerHTML = motMystereMaj;     
        
    }
    
    if(state == false){
        if(coupjouer >= 0 && coupjouer <7){
            coupjouer++;
            //console.log(coupjouer);
            // changement d'images si on perd
            images[0].src = "image/pendu"+(coupjouer)+".png";
        }
    }        
}   
