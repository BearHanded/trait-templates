$(document).ready(function(){
	loadAllTraits();
	$("#traitEditor").hide();
	$("#return").hide();
    $("#menu").show();
});


function switchToMenu() {
	populateClassBuilds(window.className);
	$("#traitEditor").hide();
	$("#return").hide();
	$("#menu").show();
}

function switchToTraits() {
	$("#menu").hide();
	$("#return").show();
	$("#traitEditor").show();
}

function minimizeToggle() {
	$("#content").toggle();
}
//Prettify template data
function traitValueToRomanNumeral(value) {
	//if 0, considered empty
	if(!value || value === 0) return "";
	switch (value) {
		case 0:
			return "";
		case 1:
			return "I";
		case 2:
			return "II";
		case 3:
			return "III";
		case 4:
			return "IV";
		case 5:
			return "V";
		case 6:
			return "VI";
		case 7:
			return "VII";
		case 8:
			return "VIII";
		case 9:
			return "IX";
		case 10:
			return "X";
		case 11:
			return "XI";
		case 12:
			return "XII";
		case 13:
			return "XIII";
		default:
			return "";
	}
}



//Template Save management
function saveAllTraits(templatesObject) {
	if(!templatesObject.id) {
		templatesObject.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
		});
		//Add new build
		window.templates.push(templatesObject);
	} else {
	//ID is not new. Check to make sure to save over old copy
		for(i=0; i<window.templates.length; i++) {
			if(window.templates[i].id === id) window.templates[i] = templatesObject;
		}
	}
	//Save json object
	localStorage.setItem('gw2templates', JSON.stringify(templatesObject));
}

function loadAllTraits() {
	window.templates = JSON.parse(localStorage.getItem('gw2templates'));
}

//Grabs a template from the window object
function loadById(id) {
	if(!window.templates) return;
	for(i=0; i<window.templates.length; i++) {
		if(window.templates[i].id === id) return window.templates[i];
	}
}
