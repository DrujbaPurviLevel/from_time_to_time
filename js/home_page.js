var laTourDePamTimezone = 2;
var sofiaTimezone = 3;
var rejkjavikTimezone = 1;
var selectedCity = "dummy_button";
var timeContainer = null;

function onBodyLoad() {
	console.log("my body is ready");
	
	timeContainer = document.getElementById("time_container");
	var time = new Date();
	var utcTime = time.getTime() + (time.getTimezoneOffset() * 60000);
	
	timeContainer.innerHTML = getDateAndTime(new Date(utcTime));
}

function onSofiaButtonClicked() {
	console.log("displaying Sofia time");
	var buttonId = "sofia_timezone";
	
	document.getElementById(buttonId).disabled = true;
	document.getElementById(selectedCity).disabled = false;
	
	selectedCity = buttonId;
	
	var time = new Date();
    var utcTime = time.getTime() + (time.getTimezoneOffset() * 60000);
    var result = getDateAndTime(new Date(utcTime + (3600000 * sofiaTimezone)));
	
	timeContainer.innerHTML = result;
}

function onRejkjavikButtonClicked() {
	console.log("displaying Rejkjavik time");
	var buttonId = "rejkjavik_timezone";
	
	document.getElementById(buttonId).disabled = true;
	document.getElementById(selectedCity).disabled = false;
	
	selectedCity = buttonId;
	
	var time = new Date();
    var utcTime = time.getTime() + (time.getTimezoneOffset() * 60000);
    var result = getDateAndTime(new Date(utcTime + (3600000 * rejkjavikTimezone)));
	
	timeContainer.innerHTML = result;
}

function onLaTourDePamButtonClicked() {
	console.log("displaying La Tour de Pam time");
	var buttonId = "la_tour_de_pam_timezone";
	
	document.getElementById(buttonId).disabled = true;
	document.getElementById(selectedCity).disabled = false;
	
	selectedCity = buttonId;
	
	var time = new Date();
    var utcTime = time.getTime() + (time.getTimezoneOffset() * 60000);
    var result = getDateAndTime(new Date(utcTime + (3600000 * laTourDePamTimezone)));
	
	timeContainer.innerHTML = result;
}

function getDateAndTime(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	
	return hours + ":" + minutes + " " + (day / 10  < 1 ? "0" : "") + day + "." + (month / 10 < 1 ? "0" : "") + month + "." + year; 
}