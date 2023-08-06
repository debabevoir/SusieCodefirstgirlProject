document.addEventListener("DOMContentLoaded", () => { 
// script.js
const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");
// get the users name
const yourName = document.getElementById('yourName');
let storyContainer = document.getElementById("storyContainer")

startButton.addEventListener("click", () => {
    // Reveal the first part of the story
    intro.style.display = "block";
    startButton.style.display = "none";

    // Display the first choice
    const choice1Button = document.createElement("button");
    choice1Button.textContent = "Explore the forest";
    choice1Button.addEventListener("click", () => {
        revealForestStory();
        choice1Button.remove();
        choice2Button.remove();
    });

    const choice2Button = document.createElement("button");
    choice2Button.textContent = "Climb the mountain";
    choice2Button.addEventListener("click", () => {
        revealMountainStory();
        choice2Button.remove();
        choice1Button.remove();
    });

    storyContainer.appendChild(choice1Button);
storyContainer.appendChild(choice2Button);
});

function revealForestStory() {
    // Display the forest story based on the user's choice
    alert("inside of revealForest fxn");
    console.log()
    const storyPart2 = document.createElement("p");
    storyPart2.textContent = yourName.value + " has encountered a magical creature... ";
    
    //document.getElementById("storyContainer").appendChild(storyPart2);
    const introParagraph = document.getElementById("intro");
    introParagraph.textContent = storyPart2.textContent;

    // Offer a new choice
    const choice3Button = document.createElement("button");
    choice3Button.textContent = "Befriend the creature";
    choice3Button.addEventListener("click", () => {
        revealBefriendCreatureStory();
        choice3Button.remove();
    });

storyContainer.appendChild(choice3Button);

}

function revealMountainStory() {
    // Display the mountain story based on the user's choice
    const storyPart2 = document.createElement("p");
    storyPart2.textContent = "You start your journey up the steep mountain path...";
    storyContainer.appendChild(storyPart2);

    // Offer a new choice
    const choice4Button = document.createElement("button");
    choice4Button.textContent = "Find a hidden cave";
    choice4Button.addEventListener("click", () => {
        revealHiddenCaveStory();
        choice4Button.remove()
    });

document.getElementById("storyContainer").appendChild(choice4Button);
}

function revealBefriendCreatureStory() {
    // Display the story of befriending the creature
    const storyPart3 = document.createElement("p");
    storyPart3.textContent = "You and the creature become great friends and embark on a magical journey...";
    storyContainer.appendChild(storyPart3);
}

function revealHiddenCaveStory() {
    // Display the story of finding the hidden cave
    const storyPart3 = document.createElement("p");
    storyPart3.textContent = "Inside the cave, you discover a treasure chest filled with ancient artifacts...";
    storyContainer.appendChild(storyPart3);

    // Offer a new choice
    const choice5Button = document.createElement("button");
    choice5Button.textContent = "You see a strange Monster, you try to back away but it's seen you! (Eeek!)";
    choice5Button.addEventListener("click", () => {
        //FightMonster();
         // Call the function to get the compatibility result
       
         getFightMonster = fightMonster();
         const finalStory = document.createElement("p");
         finalStory.textContent = getFightMonster;
         
    
        // Display the result
        choice5Button.remove();
        storyContainer.appendChild(finalStory)
        //const resultElement = document.getElementById("storyContainer");
        //resultElement.textContent = getFightMonster;
    });

    document.getElementById("storyContainer").appendChild(choice5Button);
}

function fightMonster () {
    const randomNumber = Math.floor(Math.random()*3); // this will generate a random (whole) number 
    console.log("your random number is",randomNumber)
    //this will create results based on randomly generated numbers
      if (randomNumber === 0) {
        return yourName.value + "manages to escape the cave. It's over! THE END";
      } else if (randomNumber === 1) {
        return `you pull out your sword, you battle and slay the monster!`;
      } else {
        return "you're exhausted from the quest, you try and fight off the monster but don't manage it - the monster slays you as you stare at the treasure you'll never possess";
      }
    
  };
 
})
