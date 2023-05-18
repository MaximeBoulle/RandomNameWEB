Dictionary_name_girl = ["Emma","Jade","Louise","Alice","Chloé","Lina","Léa","Rose","Anna","Mila","Mia","Léna","Camille","Julia","Ambre","Juliette","Lola","Léna","Inès","Zoé"];
Dictionary_name_boy = ["Gabriel","Raphaël","Léo","Louis","Lucas","Adam","Arthur","Jules","Hugo","Maël","Liam","Ethan","Paul","Nathan","Gabin","Noah","Aaron","Tom"];
function generateName() {
    var genderSelect = document.getElementById("gender-select");
    var generatedNameDiv = document.getElementById("generated-name");
    if(genderSelect.value === "Fille"){
        var randomID_girl = Math.floor(Math.random() * Dictionary_name_girl.length);
        generatedNameDiv.textContent = "Prénom généré: "+ Dictionary_name_girl[randomID_girl];
    }else{
        var randomID_boy = Math.floor(Math.random() * Dictionary_name_boy.length);
        generatedNameDiv.textContent = "Prénom généré: "+Dictionary_name_boy[randomID_boy];
    }
}


var names = [];
function addName() {
    var name = document.getElementById("name-input").value;
    names.push(name);

    const rouletteWheel = document.querySelector('.roulette-wheel');

    var segmentCount = document.querySelectorAll(".roulette-segment").length;

    const newSegment = document.createElement('div');
    newSegment.classList.add('roulette-segment');


    const TextSegment = document.createElement('div');
    TextSegment.classList.add('wheel-text');
    TextSegment.textContent = name;

    newSegment.appendChild(TextSegment);

    rouletteWheel.appendChild(newSegment);

    const Allsegments = document.querySelectorAll('.roulette-segment');
    Allsegments.forEach((segment, nb) => {
        segment.style.transform = `rotate(${(360 / (segmentCount + 1)) * nb}deg)`;
    });

}


function spinRoulette() {
    var segments = document.querySelectorAll('.roulette-segment');
    var randomIndex = Math.floor(Math.random() * segments.length);
    var winningSegment = segments[randomIndex];

    var randomName = winningSegment.querySelector('.wheel-text').textContent;
    var name = document.getElementById('random-name');

    name.textContent = randomName;

    var rotationAngle = -randomIndex * (360 / segments.length);

    // Appliquer la rotation à la roulette
    var rouletteWheel = document.querySelector('.roulette-wheel');
    rouletteWheel.style.transform = `rotate(${rotationAngle}deg)`;

    // Ajouter une transition pour créer l'effet de rotation
    rouletteWheel.style.transition = 'transform 3s ease-in-out';

}

