//your JS code here. If required.
document.querySelector('form').addEventListener('submit', () => {
	event.preventDefault();

	const size = document.getElementById('fontsize').value;
	const color = document.getElementById('fontcolor').value;

	localStorage.setItem('cookies', JSON.stringify({size,color}));
})


const styles = JSON.parse(localStorage.getItem('cookies'));
if(styles) {
	const body = document.querySelector('body');
	body.style.color = styles.color;
	body.style.fontSize = styles.size + 'px';

	const size = document.getElementById('fontsize');
	size.value = styles.size;
}
