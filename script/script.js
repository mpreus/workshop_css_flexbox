document.addEventListener("DOMContentLoaded", init);
function init() {
	
	let rentACar = document.querySelector("button#rent-a-car");
	rentACar.addEventListener("click", showRentACar)
	function showRentACar() {
		Swal.fire({
			title: "Cars",
			text: "Fleet of our cars satisfies all requirements, for short and long trips. They are furnished with top class equipment. Take into account you companions needs!",
			confirmButtonText: "Close the tab",
			footer: "Make your trip even smoother by adding other options",
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/off-road-car.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}
	let getInsurance = document.querySelector("button#secure-companions");
	getInsurance.addEventListener("click", showInsurance);
	function showInsurance() {
		Swal.fire({
			title: "Insurance",
			text: "We offer insurance policy that gives you and your companions hepling hand in case of any accident. If bought with other options, it covers road assistance along with hospital expenses.",
			confirmButtonText: 'Close the tab',
			footer: 'Make your trip even smoother by adding other options',
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/hospital.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}
	let unexpextedBreak = document.querySelector("button#unexpected-breaks");
	unexpextedBreak.addEventListener("click", showUnexpected);
	function showUnexpected() {
		Swal.fire({
			title: "Troubles?",
			text: "Get assistance in any unexpected conditions from canceling your flight through changing the trip plan to replacement of your car or any other equipment.",
			confirmButtonText: 'Close the tab',
			footer: 'Make your trip even smoother by adding other options',
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/trouble.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}
	let exploitTrip = document.querySelector("button#exploit-opportunities");
	exploitTrip.addEventListener("click", showOpportunities);
	function showOpportunities() {
		Swal.fire({
			title: "Want to see more?",
			text: "Delighted with what you ancountered during the trip? Do not hesitate to prolonge your stay. Make use of our concierge service. Get any tickets / entry allowances in mimutes.",
			confirmButtonText: 'Close the tab',
			footer: 'Make your trip even smoother by adding other options',
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/opportunities.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}
	let specialNeeds = document.querySelector("button#special-needs");
	specialNeeds.addEventListener("click", showNeeds);
	function showNeeds() {
		Swal.fire({
			title: "Special requirements?",
			text: "Your companion occured to be a diabetic or vegetarian? You need extra equipment? With our 'special needs' package you can get all you require within hours.",
			confirmButtonText: 'Close the tab',
			footer: 'Make your trip even smoother by adding other options',
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/camping.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}
	let bookAnyTime = document.querySelector("button#book-on-the-go");
	bookAnyTime.addEventListener("click", showBooking);
	function showBooking() {
		Swal.fire({
			title: "Packages & services 24/7",
			text: "Our services are available from any point in the world. We do not have office hours, so call us when you need!",
			confirmButtonText: 'Close the tab',
			footer: 'Make your trip even smoother by adding other options',
			width: "600px",
			background: "beige",
			confirmButtonColor: "#1f203a",
			imageUrl: "images/24-7.svg",
			imageWidth: "300px",
			imageHeight: "300px"
		});
	}

}










