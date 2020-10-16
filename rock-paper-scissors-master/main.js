var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');
let scoreLabel = document.querySelector('.value');
let game = document.querySelector('.game');
let resultGame = document.querySelector('.result__game');
let newGame = document.querySelector('.play-again');
let userImg = document.getElementById('user-img');
let compImg = document.getElementById('machine');
let btns = document.querySelectorAll('.btn');
let player = document.getElementById('player');
let selection = document.getElementById('selection');
let resultBox = document.querySelector('.result-title');
let selectionHidden = document.querySelector('.selection__hidden');
let gameResult = document.getElementById('status');
let userelection, selectionelection;
let score = 0;
let winner;

const pMap = new Map();
pMap.set('paper', 0);
pMap.set('scissors', 1);
pMap.set('rock', 2);

function play() {
	let elections = ['paper', 'scissors', 'rock'];
	userelection = null;
	selectionelection = null;
	btns.forEach((curr) => {
		curr.addEventListener('click',
			() => {
				userelection = curr.id;
				elections.splice(elections.indexOf(userelection), 1);
				selectionelection = elections[randomElection()];
				console.log(userelection);
				console.log(selectionelection);
				console.log(elections)
				elections = ['paper', 'scissors', 'rock'];
				Winner();
				result(userelection, selectionelection);
			})
	})
}
//ocultar botones
function ocultar() {
	document.btns.style.display = 'none';
}
//random
function randomElection() {
	return Math.floor((Math.random()) * 2);
}
// actualizar
function updateScore(value) {
	score += value;
	scoreLabel.innerHTML = score;
}
// ganador
function Winner() {
	if (userelection === 'paper' && selectionelection === 'rock') {
		gameResult.innerText = "you win";
		winner = userelection;
		updateScore(1);
    } 
    else if (userelection === 'rock' && selectionelection === 'paper') {
		gameResult.innerText = "you lose";
		winner = selectionelection;
		updateScore(-1);
	} else if (pMap.get(userelection) > pMap.get(selectionelection)) {
		gameResult.innerText = "you win";
		winner = userelection;
		updateScore(1);

	} else {
		gameResult.innerText = "you lose";
		winner = selectionelection;
		updateScore(-1);
	}
	console.log(score)
}

//actualizar la vista
function result(userelection, selectionelection) {
	game.classList.add('active');
	resultGame.classList.add('active');
	player.classList.add(userelection);
	selection.classList.add(selectionelection);
	userImg.src = `images/icon-${userelection}.svg`;
	compImg.src = `images/icon-${selectionelection}.svg`;
}
function load() {
	resultGame.classList.add('load');
	resultBox.classList.add('active');
}
function ShowElection() {
	selectionHidden.classList.add('active');
}
function restar() {
	game.classList.remove('active');
	resultGame.classList.remove('active');;
	resultGame.classList.remove('load');
	resultBox.classList.remove('active');
	selectionHidden.classList.remove('active');
}
//volver a jugar
newGame.addEventListener('click', restar);
play();