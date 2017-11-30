console.log("ms1 review");

let dogContent = document.getElementById('dogs');
let rainbowContent = document.getElementById('rainbows');
let monkeyBtn = document.getElementById('monkify');
let horseBtn = document.getElementById('horsify');
let dogH1 = document.getElementById('dogH1')
let bowH1 = document.getElementById('rainbowH1')

let dogPics = {
    pics: [
        {url: "img/dog1.jpeg", title: "Happy Dog", cat: "dog"},
        {url: "img/dog2.jpeg", title: "Fuzzy Dog", cat: "dog"},
        {url: "img/dog3.jpeg", title: "Barking Dog", cat: "dog"},       
    ]
};

let bowPics = {
    pics: [
        {url: "img/rainbow1.jpeg", cat: "rainbow"},
        {url: "img/rainbow2.jpeg", cat: "rainbow"},
        {url: "img/rainbow3.jpeg", cat: "rainbow"},       
    ]
};

// dynamically create some elements to insert pics into 
// make n sections: n is based on number of imgs are available
// insert the pictures
// loop through the images

for (var i = 0; i < dogPics.pics.length; i++) {
    let section = document.createElement("section");
    section.setAttribute('class', 'dog-card card');
    section.style.backgroundImage = `url(${dogPics.pics[i].url})`;
    dogContent.appendChild(section);
};

for (var i = 0; i < bowPics.pics.length; i++) {
    let section = document.createElement("section");
    section.setAttribute('class', 'bow-card card');
    section.style.backgroundImage = `url(${bowPics.pics[i].url})`;
    rainbowContent.appendChild(section);
};

// Refactored Functions

function updateCard (cards, category) {
    // image change
    // border change
    for (let i = 0; i < cards.length; i++) {
        // image change
        // border change
        cards[i].classList.toggle(`fancy-border`);
        cards[i].classList.toggle(`${category}-fied`);        
    };
};

function updateText(btn, h1, cat1, cat2) {
    // h1 change
    // button text change
    btn.classList.toggle(cat1);
    if(btn.classList.contains(cat1)) {
        event.target.textContent = `${cat1}ify It!`;
        h1.textContent = cat1;
        } else {
        event.target.textContent = `${cat1}ify It!`;        
        h1.textContent = cat2;   
    }
};

// Click on a button and make the pictures swap out with another picture
// Event listener on each button

monkeyBtn.addEventListener('click', function() {
    let dogCards = document.getElementsByClassName('dog-card');
    updateCard(dogCards, "monkey");
    updateText(monkeyBtn, dogH1, "Monkey", "Dog");    
    });

horseBtn.addEventListener('click', function() {
    let horseCards = document.getElementsByClassName('bow-card');
    updateCard(horseCards, "horse");
    updateText(horseBtn, bowH1, "Rainbow", "Horse");    
    });