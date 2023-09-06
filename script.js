




function startGame(){
    controlContainers = document.getElementsByClassName('control-container');
    console.log(controlContainers);
    controlContainers[0].style.display = "flex";
    controlContainers[1].style.display = "flex";
    startButton = document.getElementById('start-button');
    startButton.style.display = "none";
}


function chooseClothing(choice, type){
    console.log(choice);
    console.log(type);

    //Highlight valgte knap og unhighlight den gamle
    for(var i=1; i<4; i++){
        if(choice==i){
            let chosenButtonId = type + "-button" + choice;
            console.log(chosenButtonId);
            chosenButton = document.getElementById(chosenButtonId);
            console.log(chosenButton);
            chosenButton.style.backgroundColor = "#BBBBBB";
        } else{
            let unchosenButtonId = type + "-button" + i;
            console.log(unchosenButtonId);
            unchosenButton = document.getElementById(unchosenButtonId);
            console.log(unchosenButton);
            unchosenButton.style.backgroundColor = "#EEEEEE";
        }
    }
}