let ComputerSelection = ["R", "P","S"];
let PlayerSelection ;

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
            }
            else if(PlayerSelection == "S" || PlayerSelection == "s"){

                  alert("You Lose, computer picked Rock");
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
            }
            else if(PlayerSelection == "R" || PlayerSelection == "r"){

                  alert("You Lose, computer picked Paper");
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
            }
            else if(PlayerSelection == "P" || PlayerSelection == "p"){

                  alert("You Lose, computer picked Scissors");
            }
            else{
                  alert("Selection is invalid");
            }
      }
}

function game(){

      for (let i = 0; i < 5; i++){

      ComputerSelection = ComputerPlay();
      PlayerSelection = prompt("Enter R,P or S");
      PlayRound(PlayerSelection,ComputerSelection)



      }
}

game()