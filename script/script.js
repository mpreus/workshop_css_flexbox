document.addEventListener("DOMContentLoaded", init);
function init() {

	document.querySelector("button#submit").addEventListener("click", validateName);
	let customerName = document.querySelector("input#customer_name");
	function validateName() {
		if (customerName.value.length <= 4 || typeof customerName.value != "string") {
			customerName.style.borderColor = "red";
			customerName.value = "";
		}
	}

	document.querySelector("button#submit").addEventListener("click", validateNumber);
	let phoneNumber = document.querySelector("input#phone_number");
	function validateNumber() {
		if (phoneNumber.value.length <= 11 || typeof phoneNumber.value === "NaN") {
			customerNumber.style.borderColor = "red";
			customerNumber.value = "";
		}
	}

	document.querySelector("button#submit").addEventListener("click", validateEmail);
	let customerEmail = document.querySelector("input#email_address");
	function validateEmail() {
		if (customerEmail.value.indexOf("@") < 0 || customerEmail.value.indexOf("@") === (customerEmail.value.length - 1) || customerEmail.value.length <= 4 || customerEmail.value.includes(" ")) {
			customerEmail.style.borderColor="red";
			customerEmail.value = "";
		}
	}
}
















