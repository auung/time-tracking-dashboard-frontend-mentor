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
	changeData(element.dataset.time);
};

function changeData(time) {
	let timeSpent_p = document.getElementsByClassName("time-spent");
	let lastTime_span = document.getElementsByClassName("last-time");
	let previousTime_span = document.getElementsByClassName("previous-time-spent");

	for (let i = 0; i < timeSpent_p.length; i++) {
		timeSpent_p[i].innerHTML = timeSpent_p[i].dataset[time];
	}

	for (let i = 0; i < lastTime_span.length; i++) {
		let timeDisplay = "";
		if (time == "day") {
			timeDisplay = "yesterday";
		} else {
			timeDisplay = "last " + time;
		}
		lastTime_span[i].innerHTML = timeDisplay;
	}

	for (let i = 0; i < previousTime_span.length; i++) {
		previousTime_span[i].innerHTML = previousTime_span[i].dataset[time];
	}
};