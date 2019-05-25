// refer to question 4 before development starts for scope document
function formValidation() {
	const valFirstName = document.querySelector("#firstName").value,
		valLastName = document.querySelector("#lastName").value,
		valPhone = document.querySelector("#phone").value,
		valEmail = document.querySelector("#email").value,
		namePattern = /^[a-z -]+$/i,
		emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		phonePattern = /[0-9]{3}[\s\-\.][0-9]{3}[\s\-\.][0-9]{4}/;
	// Create an object containing boolean values for valid or invalid input	
	let validForm = {
		firstName: namePattern.test(valFirstName),
		lastName : namePattern.test(valLastName),
		phone: phonePattern.test(valPhone),
		email: emailPattern.test(valEmail)
	},
	errors = [],
	errorId = "";

	// Check for any errors
	for (key in validForm) {
		errorId = key + "Error";
		if (!validForm[key]) {
			// Display the error message
			document.getElementById(errorId).style.display = "block";
			// Add error to array
			errors.push(key);
		} else {
			// Hide error message
			document.getElementById(errorId).style.display = "none";
		}
	}
	// Action for when all form inputs are valid
	if (errors.length === 0) {
		console.log("The form is perfectly valid!");
	}		
}


(function() {
	const submitButton = document.querySelector("#submitContact");

	submitButton.addEventListener('click', function() {
		formValidation();	
	});
	
	
})();