function showSpecific(card) {
	const cardImageContainer = document.querySelector("#cardImage");
	const cardImg = document.createElement('img');

	// Prepare and append card image
	cardImg.src = card.imageUrl;
	cardImg.style.width = "100%";
	cardImageContainer.appendChild(cardImg);


	console.log(card);

}

// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

fetch('https://api.magicthegathering.io/v1/cards/' + id)
	.then(result => result.json())
	.then((res) => {
		showSpecific(res.card);
	})
	.catch(err => console.log(err));

