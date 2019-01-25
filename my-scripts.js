//create the count in the DB
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update html to reflect the database
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();


//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Reset? Bitch please!")) {
    	localStorage.setItem("count",0);
		update();
	}
}