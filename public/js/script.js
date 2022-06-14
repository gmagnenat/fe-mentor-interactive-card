const ratingState = document.querySelector('.rating__state');
const thankyouState = document.querySelector('.thankyou__state');
const theForm = document.querySelector('#rating-form');
const theContent = document.querySelector('.container');
const ratingValue = '';
const thankyouResult = document.querySelector('.thankyou__sub span');

theForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let ratingValue = getRadioCheckedValue('rating');

	if (ratingValue === '') {
		alert('Please select a rating');
		return;
	}

	ratingState.style.display = 'none';
	thankyouState.style.display = 'block';

	thankyouResult.innerHTML = ratingValue;
});

// Get the value of the checked radio button
function getRadioCheckedValue(radio_name) {
	let oRadio = theForm.elements[radio_name];

	for (let i = 0; i < oRadio.length; i++) {
		if (oRadio[i].checked) {
			return oRadio[i].value;
		}
	}

	return '';
}
