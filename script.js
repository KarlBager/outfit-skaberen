




function startGame(){
    controlContainers = document.getElementsByClassName('control-container');
    console.log(controlContainers);
    controlContainers[0].style.display = "flex";
    controlContainers[1].style.display = "flex";
    startButton = document.getElementById('start-button');
    startButton.style.display = "none";
}








function chooseClothing(choice, type){
     //Highlight valgte knap og unhighlight den gamle
    for(var i=1; i<4; i++){
        if(choice==i){
            let chosenButtonId = type + "-button" + choice;
            chosenButton = document.getElementById(chosenButtonId);
            chosenButton.style.backgroundColor = "#BBBBBB";
        } else{
            let unchosenButtonId = type + "-button" + i;
            unchosenButton = document.getElementById(unchosenButtonId);
            unchosenButton.style.backgroundColor = "#EEEEEE";
        }
    }
}