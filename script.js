



let savedOutfits = [];
let currentOutfit = {currentShirt:0, shirtColorHue:0, currentPants:0, pantsColorHue:0};


function renderClothing(){
    //Pålæg currentOutfit på dukken
    shirtEl = document.getElementById('doll-shirt');
    pantsEl = document.getElementById('doll-pants');

    shirtEl.src = "assets/clothing-shirt-0" + currentOutfit.currentShirt + ".png";
    pantsEl.src = "assets/clothing-pants-0" + currentOutfit.currentPants + ".png";

    shirtEl.style.display = "block";
    pantsEl.style.display = "block";

    //Fjern censur hvis der er bukser på
    if(currentOutfit.currentPants == [1] || currentOutfit.currentPants == [2]){
        document.getElementById('doll-bottom').src = "assets/doll-no-clothes-bottom.png"
    } else{
        document.getElementById('doll-bottom').src = "assets/doll-no-clothes.png"
    };


    //Læg arme på
    if(currentOutfit.currentShirt == [1]){
        document.getElementById('doll-arms').style.display = "block";
    } else{
        document.getElementById('doll-arms').style.display = "none";
    };


    //Påfør farvevalg
        shirtEl.style.filter = "hue-rotate(" + currentOutfit.shirtColorHue + "deg)";
        pantsEl.style.filter = "hue-rotate(" + currentOutfit.pantsColorHue + "deg)";

}
renderClothing();





function startGame(){
    controlContainers = document.getElementsByClassName('control-container');
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

    //Opdatér objectet currentOutfit
    if(type=="shirt"){
        currentOutfit.currentShirt = choice;
    }
    if(type=="pants"){
        currentOutfit.currentPants = choice;
    }


    renderClothing();
}





shirtColorSlider = document.getElementById('shirt-color-hue');
pantsColorSlider = document.getElementById('pants-color-hue');

function updateColor(){
    currentOutfit.shirtColorHue = shirtColorSlider.value;
    currentOutfit.pantsColorHue = pantsColorSlider.value;
    renderClothing();
}

shirtColorSlider.addEventListener("input", updateColor);
pantsColorSlider.addEventListener("input", updateColor);




function saveCurrentOutfit(){
savedOutfits.push({...currentOutfit});
console.log(savedOutfits);
loadSavedOutfits();
}


savedOutfitListEl = document.getElementById('saved-outfit-list');

function loadSavedOutfits(){
    savedOutfitListEl.innerHTML = "";


    for(i=0;i<savedOutfits.length;i++){
    savedOutfitButtonEl = savedOutfitListEl.appendChild(document.createElement("div"));
    savedOutfitButtonEl.Id = "saved-outfit-button"+i;
    savedOutfitButtonEl.className = "saved-outfit-button";
    savedOutfitButtonEl.addEventListener("click", recallOutfit);


    thumbnailDollContainer = savedOutfitButtonEl.appendChild(document.createElement("div"));
    thumbnailDollContainer.className = "thumbnail-doll-containers";

    img = [];

    for(j=0;j<4;j++){
    img.push(thumbnailDollContainer.appendChild(document.createElement("img")));
        if(j<3){
        img[j].className = "thumbnail-doll-clothing";
        } if (j==3) {
        img[j].className = "doll-image"
        img[j].src="assets/doll-no-clothes.png"
        }
    }
    
    img[0].id = "thumbnail-doll-shirt"+i;
    img[1].id = "thumbnail-doll-pants"+i;
    img[2].id = "thumbnail-doll-arms"+i;
    img[3].id = "thumbnail-doll-bottom"+i;
    

    outfitLabel = savedOutfitButtonEl.appendChild(document.createElement("p"));
    outfitLabel.className = "saved-outfit-label";
    outfitLabel.innerHTML = "Outfit " + (i+1);

    deleteButton = savedOutfitListEl.appendChild(document.createElement("p"));
    deleteButton.id = "delete-outfit-button"+i;
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "X"
    deleteButton.addEventListener("click", deleteOutfit);

    // console.log(savedOutfits[i])
    renderThumbnailClothing(i);
    }

}
loadSavedOutfits();


/* <div onclick="#" id="1" class="saved-outfit-button">
                        <div class="thumbnail-doll-containers">
                            <img id="thumnail-doll-shirt1" class="thumbnail-doll-clothing" src="assets/clothing-shirt-01.png">
                            <img id="thumbnail-doll-pants1" class="thumbnail-doll-clothing" src="assets/clothing-pants-01.png">
                            <img id="thumbnail-doll-arms1" class="thumbnail-doll-clothing" src="assets/doll-arms.png" alt="">
                            <img id="thumbnail-doll-bottom1" class="doll-image" src="assets/doll-no-clothes.png" alt="">
                        </div>
                        <p class="saved-outfit-label">Outfit 1</p>
                        <button id="delete-outfit-button1" class="delete-button">-</button>
                    </div> */





    function renderThumbnailClothing(outfitNumber){
       //Pålæg currentOutfit på dukken
       thumbnailShirtEl = document.getElementById('thumbnail-doll-shirt'+outfitNumber);
       thumbnailPantsEl = document.getElementById('thumbnail-doll-pants'+outfitNumber);

       thumbnailShirtEl.src = "assets/clothing-shirt-0" + savedOutfits[outfitNumber].currentShirt + ".png";
       thumbnailPantsEl.src = "assets/clothing-pants-0" + savedOutfits[outfitNumber].currentPants + ".png";

       //Fjern censur hvis der er bukser på
       if(savedOutfits[outfitNumber].currentPants == [1]){
           document.getElementById('thumbnail-doll-bottom'+outfitNumber).src = "assets/doll-no-clothes-bottom.png"
       } else{
           document.getElementById('thumbnail-doll-bottom'+outfitNumber).src = "assets/doll-no-clothes.png"
       };

       if(savedOutfits[outfitNumber].currentShirt == [1]){
           document.getElementById('thumbnail-doll-arms'+outfitNumber).style.display = "block";
       } else{
           document.getElementById('thumbnail-doll-arms'+outfitNumber).style.display = "none";
       };

        thumbnailShirtEl.style.display = "block";
        thumbnailPantsEl.style.display = "block";




       //Påfør farvevalg
           thumbnailShirtEl.style.filter = "hue-rotate(" + savedOutfits[outfitNumber].shirtColorHue + "deg)";
           thumbnailPantsEl.style.filter = "hue-rotate(" + savedOutfits[outfitNumber].pantsColorHue + "deg)";
    }



    function recallOutfit(e){
        outfitNumber = e.srcElement.Id.replace(/\D/g, '');
        currentOutfit = savedOutfits[outfitNumber];
        renderClothing();
    }

    function deleteOutfit(e){
        outfitNumber = e.srcElement.id.replace(/\D/g, '');
        savedOutfits.splice(outfitNumber,1);
        loadSavedOutfits();
        console.log(savedOutfits);
    }


    allImages = document.getElementsByTagName('img');
    for(i=0;i<allImages.length;i++){
        allImages[i].addEventListener('error', hideIfNotLoaded);
    }
    
    function hideIfNotLoaded(e){
        idToHide = e.srcElement.id;
        document.getElementById(idToHide).style.display = "none";
    }

//commit