const choice = ['rock','paper','scissor']
var score = [0,0]

function Game(e){
	if (score[0] === 0 && score[0] === 0)
		document.getElementById('series').innerHTML ="Score 5 Points to WIN Series"


	function playRound(playerSelection, computerSelection){
		let i = choice.indexOf(playerSelection)
		let j = choice.indexOf(computerSelection)
		let winningCombinations = [[0,1],[1,2],[2,0]]
		let losingCombinations = [[1,0],[2,1],[0,2]]

		if (i === j){
			score[0]+=1
			score[1]+=1
			return 'draw'
		}

		for (var idx = 0; idx < winningCombinations.length; idx++) {
			let win = winningCombinations[idx]
			if(win[0] === i && win[1] == j){
				score[0]+=1
				return 'win'
			}
		}

		for (var idx = 0; idx < losingCombinations.length; idx++){
			let lose = losingCombinations[idx]
			if(lose[0] === i && lose[1] === j){
				score[1]+=1
				return 'lose'
			}
		}
	}

	const playerSelection = e.target.value
	const computerSelection = choice[Math.floor(Math.random()*3)]
	let result = playRound(playerSelection,computerSelection)
	if (result === 'win'){
		document.getElementById('round').innerHTML=`You WON! ${playerSelection} beats ${computerSelection}`

	} else if ( result === 'lose'){
		document.getElementById('round').innerHTML=`You LOSE! ${computerSelection} beats ${playerSelection}`
	} else {
		document.getElementById('round').innerHTML="Drawn game"
	}

	document.getElementById('you').innerHTML = `Your Score: ${score[0]}`
	document.getElementById('bot').innerHTML = `Bot Score: ${score[1]}`


	if( score.includes(5)){
		if(score[0] > score[1]){
			document.getElementById('series').innerHTML = "You WON this Series"
			} else {
				document.getElementById('series').innerHTML = "You LOSE this Series"
			}
		score=[0,0]
	}
}


const buttons = document.querySelectorAll('button');
console.log(buttons)

buttons.forEach((btn)=>{
	btn.addEventListener('click',(e)=>{
		Game(e)
	})
})
