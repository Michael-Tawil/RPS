let ComputerSelection = ["R", "P","S"];
let PlayerSelection ;
let Playerscore = 0;
let Computerscore = 0;
let i = 0;
let sarea = document.querySelector(".mainarea");
const content = document.createElement('p');
content.classList.add('p');
let restar = document.getElementById("ref");


function getselection (){

      let act = window.event ;
      PlayerSelection = act.target;
      return PlayerSelection.id
}
function ComputerPlay(){

      return ComputerSelection[Math.floor(Math.random()*ComputerSelection.length)];
} 

 function PlayRound(PlayerSelection,ComputerSelection){

      if (ComputerSelection == "R"){
            
            if (PlayerSelection == "rock"){

                  content.textContent = "Its a tie, computer picked Rock";
                  
            }
            else if(PlayerSelection == "paper"){

                  content.textContent = "You Win, computer picked Rock";
                  Playerscore++;
            }
            else if(PlayerSelection == "scissors"){

                  content.textContent ="You Lose, computer picked Rock";
                  Computerscore++;
            }
            else{
                  content.textContent ="Selection is invalid / try again";
            }
      }

      if (ComputerSelection == "P"){
            if (PlayerSelection == "paper"){

                  content.textContent ="Its a tie, computer picked Paper";
                  
            }
            else if(PlayerSelection == "scissors"){

                  content.textContent ="You WIN, computer picked Paper";
                  Playerscore++;
            }
            else if(PlayerSelection == "rock"){

                  content.textContent ="You Lose, computer picked Paper";
                  Computerscore++;
            }
            else{
                  content.textContent ="Selection is invalid / try again";
            }
      }

      if (ComputerSelection == "S"){
            if (PlayerSelection == "scissors"){

                  content.textContent ="Its a tie, computer picked Scissors";
                  
            }
            else if(PlayerSelection == "rock"){

                  content.textContent ="You Win, computer picked Scissors";
                  Playerscore++;
            }
            else if(PlayerSelection == "paper"){

                  content.textContent ="You Lose, computer picked Scissors";
                  Computerscore++;
            }
            else{
                  content.textContent ="Selection is invalid / try again";
            }
      }

      return {Playerscore,Computerscore};
}

function checkScore(){

      if ( Computerscore > Playerscore && i == 5){
            content.textContent = "Computer Won With " + Computerscore + " Points";
            return true;
      }
      else if(Playerscore > Computerscore && i == 5){
            content.textContent  = "You Won With " + Playerscore + " Points";
            return true;
      }
      else {
            return false;
      }
}

function regame(){
      
      i=0;
      Playerscore = 0;
      Computerscore = 0;
      content.remove();
}

function game(){

      let actr = window.event;
      let acter = actr.target;
      if (acter.id == "rock" || acter.id == "paper" || acter.id == "scissors"){
      
      let cScore = checkScore();

            if (cScore == true){

            return;
}  
else{
            i++;
            PlayRound(getselection(),ComputerPlay());
            sarea.append(content);
            console.log(i);
            
}
}
}
window.addEventListener('click', game);
window.addEventListener('click', checkScore);
restar.addEventListener('click', regame);