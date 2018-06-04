
// Game Pig 
// Coded by Steven => Thinked by Ludovic Lafole

// Mes variables qui selectionne chacune un element html par le biais de sa classe CSS.

const $launch = document.querySelector(".launch");
const $dice1 = document.querySelector(".dice1");
const $dice2 = document.querySelector(".dice2");
const $total = document.querySelector(".total-value");
const $score = document.querySelector(".stock-container .stock");
const $stock = document.querySelector("button.stock");
const $joueur1 = document.querySelector(".player1-score .score");
const $joueur2 = document.querySelector(".player2-score .score");
const $playername = document.querySelector(".player-name");
const $win = document.querySelector(".winner");
const $restart = document.querySelector(".restart");


// Evenement déclenché par le click sur le bouton  "Lancer les dés" qui déclenche la fonction "Lancer les dés"

$launch.addEventListener("click",lancerLesDes);

// Ma fonction "Lancer les dés"

function lancerLesDes(event) {
  
  $dice1.innerHTML = Math.ceil(Math.random() * 6); // 6 car un dés a 6 points
  $dice2.innerHTML = Math.ceil(Math.random() * 6);
  $total.innerHTML = Number($dice1.innerHTML) + Number($dice2.innerHTML);
  $score.innerHTML = Number($score.innerHTML) + Number($total.innerHTML);
  
  
  // Structure conditionelle  qui définit que si le dés affiche 1,le joueur actuel a perdu et ,alors on passe au joueur suivant
  if ($dice1.innerHTML == 1 || $dice2.innerHTML == 1) {
      $score.innerHTML = 0;
        if ($playername.innerHTML === "Joueur 1") {
            $playername.innerHTML = "Joueur 2";
        }

    else if ($playername.innerHTML === "Joueur 2") {

      $playername.innerHTML = "Joueur 1";
     }
    }
 
  }

// Evenement déclenché par le click sur le bouton  "Stocker" qui déclenche la fonction "stocker les infos"

$stock.addEventListener("click",stockerLesDes);






// Ma fonction de stockage des infos utilisateurs

function stockerLesDes(event) {
  
  if ($playername.innerHTML === "Joueur 1") {
    $joueur1.innerHTML = Number($joueur1.innerHTML) + Number($score.innerHTML);
    $playername.innerHTML = "Joueur 2";
  }
  
  else {
    $joueur2.innerHTML = Number($joueur2.innerHTML) + Number($score.innerHTML);
    $playername.innerHTML = "Joueur 1";
  }
  $score.innerHTML = 0;
  leGagnant();
  
}

function leGagnant() {
  
  if ($joueur1.innerHTML >= 100) {
            $playername.innerHTML = "Joueur 1 a Gagnée";
            var sound = document.getElementById("beep");
            sound.play();
     }

    else if ($joueur2.innerHTML >= 100) {

      $playername.innerHTML = "Joueur 2 a Gagnée";
      var sound = document.getElementById("beep");
            sound.play();
     }
 }

$restart.addEventListener("click",redemarrer);

function redemarrer(event) {
  
  $playername.innerHTML = 'Joueur 1';
  $score.innerHTML = 0;
  $total.innerHTML = 0;
  $joueur1.innerHTML = 0;
  $joueur2.innerHTML = 0;
}