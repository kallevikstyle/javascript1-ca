// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function showSpecific(card) {
	const cardImageContainer = document.querySelector("#cardImage");
	const cardDetails = document.querySelector('#cardDetails');
	const cardImg = document.createElement('img');

	// Prepare and append card image
	if (card.imageUrl === undefined) {
		cardImg.src = 'https://via.placeholder.com/223x310';
	} else {
		cardImg.src = card.imageUrl;
	}
	cardImg.style.width = "100%";
	cardImageContainer.appendChild(cardImg);

	// Insert card details
	cardDetails.innerHTML = `
				<h2>${card.name}</h2>
                <div><b>About:  </b>${card.text}
                </div>
                <div><b>Rarity: </b>${card.rarity}</div>
                <div><b>Color: </b>${card.color}
            	</div>`;
}

(function() {
	// Check if a query string is present or not
	if (!window.location.search) {
		// Display error message
		const cardDetails = document.querySelector('#cardDetails');
		cardDetails.innerHTML = 'No card is selected. Please <a href="index.html">choose a card</a> to display details';
		
	} else {	
		// variable for the id
		var id = getQueryStringValue("id");

		// Get card info from API
		fetch('https://api.magicthegathering.io/v1/cards/' + id)
			.then(result => result.json())
			.then((res) => {
				showSpecific(res.card);
			})
			.catch(err => console.log(err));
	}
})();