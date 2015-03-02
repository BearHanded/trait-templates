$(document).ready(function(){
	window.minimized = false;
	window.templates = [];
	window.displayContext='menu';
	loadAllTraits();
	$("#traitEditor").hide();
	$("#return").hide();
    $("#menu").show();

});


function switchToMenu() {
	window.displayContext='menu';
	populateClassBuilds(window.className);
	$("#traitEditor").hide();
	$("#return").hide();
	$("#menu").show();
}

function switchToTraits() {
	window.displayContext='traits';
	$("#menu").hide();
	$("#return").show();
	$("#traitEditor").show();
}

function minimizeToggle() {
		
	//resize bar
    if(!window.minimized){
    	//hide content
    	$("#content").hide();
    	$("#classNameTop").hide();
    	$("#return").hide();
    	//toggle min on
    	window.minimized = true;
        $("#topBar").animate({width:"150px"},{duration: 400, queue: false });
    } else {
    	window.minimized = false;
        $("#topBar").animate({width:"600px"},{duration: 400, queue: false });
        $("#content").show();
        $("#classNameTop").show();
        if(window.displayContext!=='menu') $("#return").show();
    };
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
function saveAllTraits(templateObject) {
	if(!templateObject.id) {
		templateObject.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
		});
		//Add new build
		if(!window.templates) {
			window.templates = [];
			window.templates[0] = templateObject;
		} else {
			var length = window.templates.length;
			window.templates[length] = templateObject;
		}
	} else {
	//ID is not new. Check to make sure to save over old copy
		for(i=0; i<window.templates.length; i++) {
			if(window.templates[i].id === templateObject.id) window.templates[i] = templateObject;
		}
	}
	//Save json object
	localStorage.setItem('gw2templates', JSON.stringify(window.templates));
}

function loadAllTraits() {
	window.templates = JSON.parse(localStorage.getItem('gw2templates'));
}

//Grabs a template from the window object
function loadById(id) {
	if(!window.templates) return;
	for(i=0; i<window.templates.length; i++) {
		//Matches, set as target and return
		if(window.templates[i].id === id)  window.currentBuild = window.templates[i];
		return;
	}
}

/**
 * Add a new build object to the window to manipulate
 */
function newBuildObject() {
	window.currentBuild = {
		className : window.className,
		buildName : 'Build Name',
		traits : {
			line1 : {
				adept : 0,
				master : 0,
				grandmaster : 0
			},
			line2 : {
				adept : 0,
				master : 0,
				grandmaster : 0
			},
			line3 : {
				adept : 0,
				master : 0,
				grandmaster : 0
			},
			line4 : {
				adept : 0,
				master : 0,
				grandmaster : 0
			},
			line5 : {
				adept : 0,
				master : 0,
				grandmaster : 0
			}
		}
	}
}