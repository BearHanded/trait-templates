$(document).ready(function(){

    $("#menu").show();
    $("#traitEditor").hide();
});



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
	localStorage.setItem('gw2templates', JSON.stringify(templatesObject));
}

function loadAllTraits() {
	var templates = JSON.parse(localStorage.getItem('gw2templates'));
}