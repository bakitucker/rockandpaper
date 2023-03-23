// create variables
const humScore = document.querySelector('#humanScore') 
const cpuScore = document.querySelector('#computerScore')
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const message = document.querySelector('#status')
let playerScore = 0 , botScore = 0

// create function that gets a random weapon
function getARandomWeapon(){
	const randomNumber = Math.random()
	let botWeapon = 'rock'
	if(randomNumber < .33){
		botWeapon = 'paper' 
	} else if(randomNumber < .66){
		botWeapon = 'scissors'
	} 
	return botWeapon

}
// create a function when the human picks rock
function humanPicksRock(){
	const botWeapon = getARandomWeapon()
	checkWhoWon(botWeapon,'rock')
}
// create a function when the human picks paper
function humanPicksPaper(){
	const botWeapon = getARandomWeapon()
	checkWhoWon(botWeapon, 'paper')
}
// create a function when the human picks scissors
function humanPicksScissors(){
	const botWeapon = getARandomWeapon()
	checkWhoWon(botWeapon, 'scissors')
}
// create a function that checks to see who won
function checkWhoWon(botWeapon,humWeapon){
	if(botWeapon === humWeapon){
		showMessage("It's a Tie")
	} else if(
		botWeapon == 'rock' && humWeapon == 'scissors' ||
		botWeapon == 'paper' && humWeapon == 'rock' ||
		botWeapon == 'scissors' && humWeapon == 'paper'
	){ 
		botScore += 1
		cpuScore.innerText = botScore
		showMessage("You're a loser!")
	} else{
		playerScore += 1
		humScore.innerText = playerScore
		showMessage('You finally Won! Great Job!')
	}

}
// create a fuction that gives a message 
function showMessage(msg){
	message.innerText = msg
}
// put the smurfs on them buttons 
rockBtn.addEventListener('click', humanPicksRock)
paperBtn.addEventListener('click', humanPicksPaper)
scissorsBtn.addEventListener('click', humanPicksScissors)