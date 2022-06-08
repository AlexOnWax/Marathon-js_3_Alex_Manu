const papier = document.querySelector('.paper')
const ciseaux = document.querySelector('.scissors')
const pierre = document.querySelector('.rock')
const lesMains = document.querySelectorAll('.option-container')

const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2')
const playerPick = document.querySelector('.player-pick')
const scoreValue= document.querySelector('.score-value')
const playAgainButton = document.querySelector('.play-again-btn')
const computerPick = document.querySelector('.computer-pick')






function randomComputer(x) {
    return Math.floor(Math.random() * x);
  }
 
lesMains.forEach(main => {
  
main.addEventListener('click', () => {
    
 
    step1.classList.add('step-1-minimize');
    step2.classList.add('step-2-minimizer');
    playerPick.appendChild(main)
    let x = randomComputer(3)
    return x
   
})
   
  //computerPick.appendChild(main[1])

playAgainButton.addEventListener('click', () => {
    step1.classList.remove('step-1-minimize');
    step2.classList.remove('step-2-minimizer');
    playerPick.removeChild(main)
    step1.appendChild(main)
  
  
    

  
})
});







//scoreValue.replaceChildren('1')
