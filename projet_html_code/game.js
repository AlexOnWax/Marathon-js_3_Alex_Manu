const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const lesMains = document.querySelectorAll(".option-container");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const playAgainButton = document.querySelector(".play-again-btn");
const replaces = document.querySelectorAll(".replace");
scissors2 = scissors.cloneNode(true);
paper2 = paper.cloneNode(true);
rock2 = rock.cloneNode(true);
const tabReplace = [replaces[0], replaces[1]];
const playerPickReplace = document.querySelector(".player-pick > .replace");
const compPickReplace = document.querySelector(".computer-pick > .replace");
const tabPfp = [scissors, rock, paper];
const tab = [scissors2, rock2, paper2];
const scoreValue = document.querySelector(".score-value");
const imgScissors = document.querySelector(".scissors > option > img ");
const WinnerLooserText = document.querySelector(".annouce-winner-text");
let resultat = 0;


function randomComputer(x) {
  return Math.floor(Math.random() * x);
}

lesMains.forEach((main) => {
  main.addEventListener("click", () => {
    y = randomComputer(3);
    step1.classList.add("step-1-minimize");
    step2.classList.add("step-2-minimizer");

    const div1 = document.createElement("DIV");
    div1.setAttribute("class", "option");
    classListDesMains = main.classList[1];
    let img = document.createElement("IMG");
    img.setAttribute("alt", "option");
    img.setAttribute("src", "icon-" + classListDesMains + ".svg");
    replaces[0].append(div1);
    replaces[0].classList.remove("replace");
    replaces[0].classList.add(classListDesMains);
    div1.append(img);

    let replaceElement = tab[y];
    const div2 = document.createElement("DIV");
    div2.setAttribute("class", "option");
    classListDesMainsComputer = tab[y].classList[1];
    let img2 = document.createElement("IMG");
    img2.setAttribute("alt", "option");
    img2.setAttribute("src", "icon-" + classListDesMainsComputer + ".svg");
    replaces[1].append(div2);
    replaces[1].classList.remove("replace");
    replaces[1].classList.add(classListDesMainsComputer);
    div2.append(img2);

    playAgainButton.addEventListener("click", () => {
      step1.classList.remove("step-1-minimize");
      step2.classList.remove("step-2-minimizer");
      replaces[0].classList.remove(classListDesMains);
      replaces[0].removeChild(div1);
      replaces[1].classList.remove(classListDesMainsComputer);
      replaces[1].removeChild(div2);
    });

    let fonctionText = comptageDesPoints(
      classListDesMains,
      classListDesMainsComputer
    );
    
    WinnerLooserText.textContent = fonctionText;

    if (fonctionText == "You win") {
      resultat = resultat + 1;
    } else if (fonctionText == "You Lose") {
      resultat = resultat - 1;
    }
    
    localStorage.setItem("resultatValue", resultat);
    scoreValue.textContent = localStorage.getItem("resultatValue");
  });

  
});

function comptageDesPoints(a, b) {
  if (a == "rock" && b == "scissors") {
    return "You win";
  } else if (a == "scissors" && b == "paper") {
    return "You win";
  } else if (a == "paper" && b == "rock") {
    return "You win";
  } else if (a == b) {
    return "Equality";
  } else {
    return "You Lose";
  }
}
