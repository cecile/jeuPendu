var motMystere;
//var mots = new Array() remplacé par [];

   
   

var image = new Image();
//image.src = "imgPendu.png";

        var motMystere;
        var mots = ["javascript", "bonjour", "decouverte", "youpi", "code", "lexomil", "desespoir", "absurde", "fastidieux", "malchanceux"];
          


        var motMystere = mots[Math.floor(Math.random()*mots.length)];
        //choix d'un mot dans le tableau//
           
        
        // boucle qui calcul le nbr de lettre dans le mot mystere
        for(i=0; i<motMystere.length; i++){
    
        // creation des input par rapport a la longeur du mot
        var input = document.createElement("input");
            document.body.appendChild(input);
            
        // ce qui permet de comparer les lettres du mot dans le input : charAt.
        var lettre = motMystere.charAt(i); 
            
        }
        


var nombrecoup = 7; //nombre de chances//
var coupjouer = 0; //depart//

var clavier = document.querySelectorAll(".lettre");

    for(i=0; i<clavier.length; i++){
        clavier[i].addEventListener("click",verifier);
    }



function verifier(){
    
      var recup = this.innerText;
    console.log(recup);
    
    
}









