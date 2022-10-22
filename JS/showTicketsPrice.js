const btnDelete = document.getElementById('btn-delete');
const btnEstimate = document.getElementById('btn-estimate');

const totalPrice = document.getElementById('total-price');
const numberOfTickets = document.getElementById('number-of-tickets');
const categorySelected = document.getElementById('category-selected');

btnDelete.addEventListener('click', resetInputs);
btnEstimate.addEventListener('click', calculatePrice);

function calculatePrice() {
	let discount, price;
	const nTickets = Number(numberOfTickets.value);
	const cSelected = categorySelected.value;

	switch (cSelected.toLowerCase()) {
		case 'student':
			discount = 200 * 0.8;
			break;
		case 'trinee':
			discount = 200 * 0.5;
			break;
		case 'junior':
			discount = 200 * 0.15;
			break;
		default:
			discount = 200 * 0;
			break;
	}

	price = (200 - discount) * nTickets;
	totalPrice.innerText = String(price);
}

function resetInputs() {
	totalPrice.innerText = '';
	numberOfTickets.value = '';
	categorySelected.value = 'student';
}
