let ComputerSelection = ["R", "P","S"];
let PlayerSelection ;

function ComputerPlay(){

      return ComputerSelection[Math.floor(Math.random()*ComputerSelection.length)];
}

function PlayRound(PlayerSelection,ComputerSelection){

      if (PlayerSelection == "R"){
            
            if (ComputerSelection == "R"){

                  alert("Its a tie, computer picked Rock");
            }
            else if(ComputerSelection == "P"){

                  alert("You Lose, computer picked Paper");
            }
            else if(ComputerSelection == "S"){

                  alert("You Win, computer picked Scissors");
            }
            else{
                  alert("Selection is invalid");
            }
      }

      if (PlayerSelection == "P"){
            if (ComputerSelection == "P"){

                  alert("Its a tie, computer picked Paper");
            }
            else if(ComputerSelection == "S"){

                  alert("You Lose, computer picked Scissors");
            }
            else if(ComputerSelection == "R"){

                  alert("You Win, computer picked Rock");
            }
            else{
                  alert("Selection is invalid");
            }
      }

      if (PlayerSelection == "S"){
            if (ComputerSelection == "S"){

                  alert("Its a tie, computer picked Scissors");
            }
            else if(ComputerSelection == "R"){

                  alert("You Lose, computer picked Rock");
            }
            else if(ComputerSelection == "P"){

                  alert("You Win, computer picked Paper");
            }
            else{
                  alert("Selection is invalid");
            }
      }
}

function game(){

      ComputerSelection = ComputerPlay();
      PlayerSelection = prompt("Enter R,P or S");
      PlayRound(PlayerSelection,ComputerSelection)
}

game()