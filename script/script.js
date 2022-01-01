let menuIcon_div = document.getElementsByClassName("menu-icon-wrap");

for (let i = 0; i < menuIcon_div.length; i++) {
	menuIcon_div[i].addEventListener("mouseover", function () {
		menuIcon_div[i].childNodes[1].src = "images/icon-ellipsis-hover.svg";
	});
	menuIcon_div[i].addEventListener("mouseout", function () {
		menuIcon_div[i].childNodes[1].src = "images/icon-ellipsis.svg";
	});
};

//=======================================================================

function addActive(element) {
	element.classList.add("active");
	let timelapse_p = document.getElementsByClassName("timelapse");
	for (let i = 0; i < timelapse_p.length; i++) {
		if (timelapse_p[i] != element) {
			timelapse_p[i].classList.remove("active");
		};
	};
	changeData(element.innerHTML);
};

let request = new XMLHttpRequest();
let data;
request.open("GET", "https://auung.github.io/auung-json/Data/data.json");
request.onload = function() {
	data = JSON.parse(request.responseText);
}
request.send();

let timeSpent_p = document.getElementsByClassName("time-spent");
let previousTimeSpent_p = document.getElementsByClassName("previous-time-spent");
let lastTime_span = document.getElementsByClassName("last-time");

function changeData(time) {
	time = time.toLowerCase();
	for (let i = 0; i < 6; i++) {
		timeSpent_p[i].innerHTML = data[i].timeframes[time].current + "hrs";
		previousTimeSpent_p[i].innerHTML = data[i].timeframes[time].previous + "hrs";
		switch(time) {
			case "daily":
				lastTime_span[i].innerHTML = "Yesterday";
				break;
			case "weekly":
				lastTime_span[i].innerHTML = "Last Week";
				break;
			case "monthly":
				lastTime_span[i].innerHTML = "Last Month";
				break;
		};
	};
};