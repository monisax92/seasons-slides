const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');

function showCard() {
	cards.forEach(card => {
		card.classList.remove('active');
	});
	this.classList.add('active');

	changeBg(this);
}

const changeBg = card => {
	let season = card.dataset.season;
	console.log(season);
	body.dataset.bg = season;
};

cards.forEach(card => {
	card.addEventListener('click', showCard);
});
