console.log("ms1 review");
const dogsContent = document.getElementById("dogs");
const rainbowContent = document.getElementById("rainbows");

let dogPics = {
    pics: [
        { url: "img/dog1.jpeg", title: "Happy dog", cat: "rainbow" },
        { url: "img/dog2.jpeg", title: "Fuzzy dog", cat: "rainbow"},
        { url: "img/dog3.jpeg", title: "Barking dog", cat: "rainbow" }
    ]
}
let bowPics= {
    pics: [
        { url: "img/rainbow1.jpeg", title: "Happy rainbow", cat: "dog" },
        { url: "img/rainbow2.jpeg", title: "Fuzzy rainbow", cat: "dog" },
        { url: "img/rainbow3.jpeg", title: "Barking rainbow", cat: "dog" }
    ]
}
// We want to dynamically create picture elements and give them pics and classes
// make n sections: n is based on the amount of images
// insert pictures

//loop through the images and create sections one at a time

for (let i = 0; i <dogPics.pics.length; i++){
    let section = document.createElement("section");
    section.setAttribute("class", "dog-card card");
    section.style.backgroundImage = `url(${dogPics.pics[i].url})`;
    dogsContent.appendChild(section);
}

for (let i = 0; i < bowPics.pics.length; i++) {
    let section = document.createElement("section");
    section.setAttribute("class", "rainbow-card card");
    section.style.backgroundImage = `url(${bowPics.pics[i].url})`;
    rainbowContent.appendChild(section);
}

// click on a button and make the pics swap out for something else
const monkeyfyButton = document.getElementById("monkeyfy");
const allDogCards = document.getElementsByClassName("dog-card");
const dogH1 = document.getElementById("dogH1");

monkeyfyButton.addEventListener("click", function(){
    updateCard(allDogCards, "monkey");
    updateText(monkeyfyButton, dogH1, "Monkey", "Dog");
});
const horsefyButton = document.getElementById("horsefy");
const allHorseCards = document.getElementsByClassName("rainbow-card");
const rainbowH1 = document.getElementById("rainbowH1");
horsefyButton.addEventListener("click", function () {
        updateCard(allHorseCards, "horse");
        updateText(horsefyButton, rainbowH1, "Rambow", "Rainbow");
});
function updateCard(cards, category){
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle(`fancy-border`); // border change
        cards[i].classList.toggle(`${category}-fied`); //image change
    }
}
function updateText(btn, h1, cat1, cat2){
    btn.classList.toggle(cat1);
    if (btn.classList.contains(cat1)) {
        event.target.innerHTML = `${cat2}ify It!`; // button text change
        h1.innerHTML = cat1; // h1 text change
    } else {
        this.innerHTML = `${cat1}ify It!`; // button text change
        h1.innerHTML = cat2;// h1 text change
    }
}