




function startGame(){
    controlContainers = document.getElementsByClassName('control-container');
    console.log(controlContainers);
    controlContainers[0].style.display = "flex";
    controlContainers[1].style.display = "flex";
    startButton = document.getElementById('start-button');
    startButton.style.display = "none";
}