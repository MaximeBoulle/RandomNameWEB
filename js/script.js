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
    var rouletteContainer = document.getElementById("roulette-container");
    var line = document.createElement("td");
    line.textContent = name;
    rouletteContainer.appendChild(line);

}

function spinRoulette() {
    var randomNameElement = document.getElementById("random-name");
    var randomID = Math.floor(Math.random() * names.length);
    var randomName = names[randomID];
    randomNameElement.textContent = randomName;
}

