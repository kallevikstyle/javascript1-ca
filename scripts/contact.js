// refer to question 4 before development starts for scope document
function formValidation() {
	const firstName = document.querySelector("#firstName").value,
		lastName = document.querySelector("#lastName").value,
		phone = document.querySelector("#phone").value,
		email = document.querySelector("#email").value,
		namePattern = /^[a-z -]+$/i,
		emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		phonePattern = /[0-9]{3}[\\s\\-\\.][0-9]{3}[\\s\\-\\.][0-9]{3}/;

		//TO DO
		// Test patterns
		// Return array of errors
	

}

(function() {
	formValidation();
	
})();