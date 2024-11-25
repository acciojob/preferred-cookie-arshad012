//your JS code here. If required.
document.querySelector('form').addEventListener('submit', () => {
	event.preventDefault();

	const size = document.getElementById('fontsize').value;
	const color = document.getElementById('fontcolor').value;

	localStorage.setItem('cookies', JSON.stringify({size,color}));
})

window.onload = () => {
	// const root = document.querySelector(':root');
	const styles = JSON.parse(localStorage.getItem('cookies'));
	const body = document.querySelector('body');
	body.style.color = styles.color;
	body.style.fontSize = styles.size + 'px';
}


