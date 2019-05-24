// refer to question 3 before development starts for scope document
(function() {
	const aboutText = document.querySelector('#aboutText');
	const moreInfoTrigger = document.querySelector('#moreInfoTrigger');
	const moreInfoContent = document.querySelector('#moreInfoContent');
	const replacedWord = /Magic/g;
	let newWord = "Something";

	// Replace 'Magic' with 'Something'
	aboutText.innerHTML = aboutText.innerHTML.replace(replacedWord, newWord);

	// Show and hide content when user clicks the heading
	moreInfoTrigger.addEventListener('click', function() {
		if (moreInfoContent.style.display === 'block') {
			moreInfoContent.style.display = 'none';
		} else {
			moreInfoContent.style.display = 'block';
		}
	});
})();

