// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
fetch('https://api.magicthegathering.io/v1/cards')
	.then(result => result.json())
	.then((res) => {
		createCards(res.cards);
	})
	.catch(err => console.log(err));

	//Function that creates cards for the web page
	function createCards(result) {
		const cardColContainer = document.querySelector('#cards');

		// Iterate through all card items
		for (let i = 0; i < result.length; i++) {
			const cardColumn = document.createElement('div');
			const newCard = document.createElement('div');
			const cardHeader = document.createElement('h4');
			const cardImg = document.createElement('img');
			const cardBtn = document.createElement('a');
			const cardName = document.createTextNode(result[i].name);

			// Prepare card header
			cardHeader.appendChild(cardName);
			// Prepare card image
			if (result[i].imageUrl === undefined) {
				cardImg.src = 'https://via.placeholder.com/223x310';
			} else {
				cardImg.src = result[i].imageUrl;
			}

			cardImg.style.width = "100%";
			// Prepare card button
			cardBtn.href = 'card-specific.html?id=' + result[i].id;
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
		// Event listener for seach button
		document.querySelector('#searchButton').addEventListener('click', function(e) {
			searchCards(result);
		});
	}

	function searchCards(cards) {
		const cardColContainer = document.querySelector('#cards');
		let searchText = document.querySelector('#search').value;
		let searchPattern = new RegExp(searchText, 'i');
		// Filter card names based on user input
		let searchResult = cards.filter(function(cards) {
			console.log(searchPattern.test(cards.name));
			return searchPattern.test(cards.name);
		});
		// Delete existing elements in card container
		cardColContainer.innerHTML = "";
		// Add search results to cards container
		createCards(searchResult);
	}

	

