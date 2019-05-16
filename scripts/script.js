// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
fetch('https://api.magicthegathering.io/v1/cards')
	.then(result => result.json())
	.then((res) => {
		createCards(res);
	})
	.catch(err => console.log(err));

	//Function that creates cards for the web page
	function createCards(result) {
		const cardColContainer = document.querySelector('#cards');
		
		for (let i = 0; i < result.cards.length; i++) {
			const cardColumn = document.createElement('div');
			const newCard = document.createElement('div');
			const cardHeader = document.createElement('h4');
			const cardImg = document.createElement('img');
			const cardBtn = document.createElement('a');
			const cardName = document.createTextNode(result.cards[i].name);

			// Prepare card header
			cardHeader.appendChild(cardName);
			// Prepare card image
			if (result.cards[i].imageUrl === undefined) {
				cardImg.src = 'https://via.placeholder.com/223x310';
			} else {
				cardImg.src = result.cards[i].imageUrl;
			}
			cardImg.style.width = "100%";
			// Prepare card button
			cardBtn.href = 'card-specific.html?id=' + result.cards[i].id;
			cardBtn.className = 'btn btn-success';
			cardBtn.innerHTML = 'View More';
			// Append card details to card container
			newCard.className = 'card-container';
			newCard.appendChild(cardHeader);
			newCard.appendChild(cardImg);
			newCard.appendChild(cardBtn);
			// Append card to Bootstrap columns
			cardColumn.className = 'col-sm-4';
			cardColumn.appendChild(newCard);
			// Append the card to parent container
			cardColContainer.appendChild(cardColumn);

		}


		// console.log(result.cards[0]);
		// console.log(typeof(result.cards[0].id));
		// console.log(cardBtn);

	}