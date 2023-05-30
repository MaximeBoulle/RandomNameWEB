Dictionary_name_girl = ["Emma","Jade","Louise","Alice","Chloé","Lina","Léa","Rose","Anna","Mila","Mia","Léna","Camille","Julia","Ambre","Juliette","Lola","Léna","Inès","Zoé"];
Dictionary_name_boy = ["Gabriel","Raphaël","Léo","Louis","Lucas","Adam","Arthur","Jules","Hugo","Maël","Liam","Ethan","Paul","Nathan","Gabin","Noah","Aaron","Tom"];
Dictionary_name_neutral = ["Alix","Aloïs","André","Ange","Candide","Céleste","Charlie","Dominique","Claude","Elie","Kim","Maxence","Maxime","Nikita","Noa","Sacha","Sofiane"]
function generateName() {
    var genderSelect = document.getElementById("gender-select");
    var generatedNameDiv = document.getElementById("generated-name");
    if(genderSelect.value === "Fille"){
        var randomID_girl = Math.floor(Math.random() * Dictionary_name_girl.length);
        generatedNameDiv.textContent = "Prénom généré: "+ Dictionary_name_girl[randomID_girl];
    }else if(genderSelect.value === "Garçon") {
        var randomID_boy = Math.floor(Math.random() * Dictionary_name_boy.length);
        generatedNameDiv.textContent = "Prénom généré: "+Dictionary_name_boy[randomID_boy];
    }
    else{
        var randomID_mixte = Math.floor(Math.random() * Dictionary_name_neutral.length);
        generatedNameDiv.textContent = "Prénom généré: "+Dictionary_name_neutral[randomID_mixte];
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


var previousAngle = 0; //cette variable servira à stocker l'angle des différents prénoms pour éviter un bug :
// à chaque lancement de la roue, elle pointait directement sur le nom aléatoire, tournaient et ensuite pointait de nouveau sur le nom random

function spinRoulette() {
    var segments = document.querySelectorAll('.roulette-segment'); //on met dans segments tous les elements de : .roulette-segment de notre css
    var randomIndex = Math.floor(Math.random() * segments.length); //ensuite on crée un index aléatoire basé sur le nombre de segments
    var winningSegment = segments[randomIndex]; //ensuite on choisit un segment aléatoire "winner", c'est sur celui-ci que la roue va pointer

    var randomName = winningSegment.querySelector('.wheel-text').textContent; //on recupère le contenu du segment "winner"
    var name = document.getElementById('random-name'); //ensuite on récupère l'ancien random name
    name.textContent = "?";

    var rotationAngle = -randomIndex * (360 / segments.length); //on fait le calcul pour savoir de combien de degré il faut tourner pour acceder au "winner" grace au nombre total de segment et l'index aléatoire

    var rouletteWheel = document.querySelector('.roulette-wheel'); //d'abord on désactive la transition pour que la roue ne pointe pas directement sur le nouveau nom "winner" car il faut d'abord faire tourner la roue 1 à 5 fois
    rouletteWheel.style.transition = 'none'; //on désactive donc la transition pour que la roue ne tourne pas visuellement
    rouletteWheel.style.transform = `rotate(${previousAngle}deg)`; //on refait pointer la roue sur l'ancien nom

    void rouletteWheel.offsetWidth; //on demande au navigateur de redessiner la roue pour que les changement de styles soient pris en compte

    rouletteWheel.style.transition = 'transform 3s ease-in-out'; //on réactive la transition pour débuter le tour de la roue


    // Ajout de l'événement de transition pour détecter la fin de la rotation
    rouletteWheel.addEventListener('transitionend', function() {
        name.textContent = randomName; // Affichage du nom aléatoire une fois la roulette terminée
    }, { once: true }); // L'événement ne sera déclenché qu'une seule fois



    setTimeout(function() { //d'abord on attend 10 ms
        rouletteWheel.style.transform = `rotate(${rotationAngle + (360 * 6)}deg)`; //ensutie on fait pointer la roue vers le bon prénom "winner" en lui faisant faire 4 tours avant de pointer vers la bonne direction
        previousAngle = rotationAngle + (360 * completeRotations); //on met à jour previous angle pour la prochaine rotation
    }, 10);
}


var state = false;
function DarkMode() {
    var body = document.body;

    if (state === false) {
        body.classList.add('dark-mode');
        state = true;
        localStorage.setItem('darkMode', 'true');

    } else {
        body.classList.remove('dark-mode');
        state = false;
        localStorage.setItem('darkMode', 'false');
    }
}

function loadDarkMode() {
    var darkMode = localStorage.getItem('darkMode');
    var body = document.body;
    if (darkMode === 'true') {
        body.classList.add('dark-mode');
        state = true;
    } else {
        body.classList.remove('dark-mode');
        state = false;
    }
}

window.addEventListener('DOMContentLoaded', loadDarkMode);
