function cardGame(cards) {
	createCards(cards);

	// Event listener 'enter' key in for search field
	document.querySelector('#search').addEventListener('keypress', function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			searchCards(cards);
		}
	});
	// Event listener for search field live search
	document.querySelector('#search').addEventListener('input', function() {
		searchCards(cards);
	});

	// Event listener for search button
	document.querySelector('#searchButton').addEventListener('click', function() {
		searchCards(cards);
	});
}

// Function that creates cards for the web page
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
}

// Search function
function searchCards(cards) {
	const cardColContainer = document.querySelector('#cards');
	let searchText = document.querySelector('#search').value;
	let searchPattern = new RegExp(searchText, 'i');
	let noResultMessage = "Sorry, no cards matched your search";
	// Filter card names based on user input
	let searchResult = cards.filter(function(cards) {
		return searchPattern.test(cards.name);
	});

	// Delete existing elements in card container
	cardColContainer.innerHTML = "";
	// Check if there are any results
	if (searchResult.length > 0) {
		// Add search results to cards container
		createCards(searchResult);
	} else {
		// Display error message
		cardColContainer.innerHTML = noResultMessage;
	}
}

// Fetch data from API
(function() {
	fetch('https://api.magicthegathering.io/v1/cards')
	.then(result => result.json())
	.then((res) => {
		cardGame(res.cards);
	})
	.catch(err => console.log(err));
})();



