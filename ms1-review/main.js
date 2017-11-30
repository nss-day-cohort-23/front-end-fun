console.log("ms1 review");

let dogContent = document.getElementById('dogs');
let rainbowContent = document.getElementById('rainbows');
let monkeyBtn = document.getElementById('monkify');
let horseBtn = document.getElementById('horsify');
let dogH1 = document.getElementById('dogH1')
let bowH1 = document.getElementById('rainbowH1')

let dogPics = {
    pics: [
        {url: "img/dog1.jpeg", title: "Happy Dog"},
        {url: "img/dog2.jpeg", title: "Fuzzy Dog"},
        {url: "img/dog3.jpeg", title: "Barking Dog"},       
    ]
};

let bowPics = {
    pics: [
        {url: "img/rainbow1.jpeg"},
        {url: "img/rainbow2.jpeg"},
        {url: "img/rainbow3.jpeg"},       
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

// Click on a button and make the pictures swap out with another picture
// Event listener on each button

monkeyBtn.addEventListener('click', function() {
    let dogCards = document.getElementsByClassName('dog-card');
    this.classList.toggle('monkey')
    for (let i = 0; i < dogCards.length; i++) {
      if ( this.classList.contains('monkey')) { 
        // Image change
        dogCards[i].style.backgroundImage = 'url(img/dog-monkey.jpeg)';
        // Border change
    } else {
        dogCards[i].style.backgroundImage = `url(${dogPics.pics[i].url})`;
    } 
    dogCards[i].classList.toggle('fancy-border');
    };
    // Button text change
    // H1 text change
    if ( this.classList.contains('monkey')) {
        this.textContent = "Dogify It!";
        dogH1.textContent = "Monkey";
    } else {
        this.textContent = "Monkify It!";        
        dogH1.textContent = "Dog";        
    };
});

horseBtn.addEventListener('click', function() {
    let horseCards = document.getElementsByClassName('bow-card');
    this.classList.toggle('horse')
    for (let i = 0; i < horseCards.length; i++) {
      if ( this.classList.contains('horse')) { 
        // Image change
        horseCards[i].style.backgroundImage = 'url(img/horse-rainbow.jpeg)';
        // Border change
      } else {
          horseCards[i].style.backgroundImage = `url(${bowPics.pics[i].url})`;
      }
    horseCards[i].classList.toggle('fancy-border');  
    };
    // Button text change
    // H1 text change
    if ( this.classList.contains('horse')) {
        this.textContent = "Rainbowify It!";
        bowH1.textContent = "Horse";
    } else {
        this.textContent = "Horsify It!";        
        bowH1.textContent = "Rainbow";        
    };
});