function showSpecific(card) {
	console.log(card.name);
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

