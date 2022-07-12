let ComputerSelection = ["R", "P","S"];
let PlayerSelection ;
let Playerscore = 0;
let Computerscore= 0;

function ComputerPlay(){

      return ComputerSelection[Math.floor(Math.random()*ComputerSelection.length)];
}

function PlayRound(PlayerSelection,ComputerSelection){

      if (ComputerSelection == "R"){
            
            if (PlayerSelection == "R" || PlayerSelection == "r"){

                  alert("Its a tie, computer picked Rock");
            }
            else if(PlayerSelection == "P" || PlayerSelection == "p"){

                  alert("You Win, computer picked Rock");
                  Playerscore++;
            }
            else if(PlayerSelection == "S" || PlayerSelection == "s"){

                  alert("You Lose, computer picked Rock");
                  Computerscore++;
            }
            else{
                  alert("Selection is invalid");
            }
      }

      if (ComputerSelection == "P"){
            if (PlayerSelection == "P" || PlayerSelection == "p"){

                  alert("Its a tie, computer picked Paper");
            }
            else if(PlayerSelection == "S" || PlayerSelection == "s"){

                  alert("You WIN, computer picked Paper");
                  Playerscore++;
            }
            else if(PlayerSelection == "R" || PlayerSelection == "r"){

                  alert("You Lose, computer picked Paper");
                  Computerscore++;
            }
            else{
                  alert("Selection is invalid");
            }
      }

      if (ComputerSelection == "S"){
            if (PlayerSelection == "S" || PlayerSelection == "s"){

                  alert("Its a tie, computer picked Scissors");
            }
            else if(PlayerSelection == "R" || PlayerSelection == "r"){

                  alert("You Win, computer picked Scissors");
                  Playerscore++;
            }
            else if(PlayerSelection == "P" || PlayerSelection == "p"){

                  alert("You Lose, computer picked Scissors");
                  Computerscore++;
            }
            else{
                  alert("Selection is invalid");
            }
      }

      return Playerscore;
      return Computerscore;
}

function game(){

      for (let i = 0; i < 5; i++){

      ComputerSelection = ComputerPlay();
      PlayerSelection = prompt("Enter R,P or S");
      PlayRound(PlayerSelection,ComputerSelection)

      }

      if ( Computerscore > Playerscore){
            alert("Computer Won With " + Computerscore + " Points");
      }
      else if(Playerscore > Computerscore){
            alert("You Won With " + Playerscore + " Points");
      }
      else{
            alert("Invalid Score");
      }
}

game()