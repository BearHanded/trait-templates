function initGear() {
	generateWeaponOptions();
	setWeaponStatOptions();
	setWeaponSigilOptions();
	//Only applied if window.gameMode === 1
	pvpSetup();
}



/**
 *	Sets the option fields for weapons in w
 **/

function generateWeaponOptions() {
	var className = window.className;

	var mainHand = [];
	var offHand = [];
	var multipleWeaponSets = true;			//Default true, set false on class by class basis

	//Clear current options
	$('.gearTable').find('option').remove();

	//Generate available options by class and multiple weapon sets
	switch (className) {
		case 'WARRIOR':
			mainHand = ["Axe","Mace","Sword","Greatsword","Hammer","Longbow","Rifle"];
			offHand = ["Axe","Mace","Sword","Shield","Warhorn"];
			break;
		case 'GUARDIAN':
			mainHand = ["Mace","Sword","Scepter","Greatsword","Hammer","Staff"];
			offHand = ["Focus","Shield","Torch"];
			break;
		case 'ENGINEER':
			multipleWeaponSets = false;
			mainHand = ["Pistol", "Rifle"];
			offHand = ["Pistol","Shield"];
			break;
		case 'RANGER':
			mainHand = ["Axe", "Sword", "Greatsword", "Longbow", "Shortbow"];
			offHand = ["Axe", "Dagger", "Warhorn"];
			break;
		case 'THIEF':
			mainHand = ["Dagger", "Pistol", "Sword", "Shortbow"];
			offHand = ["Dagger", "Pistol"];
			break;
		case 'ELEMENTALIST':
			multipleWeaponSets = false;
			mainHand = ["Dagger", "Scepter", "Staff"];
			offHand = ["Dagger", "Focus"];
			break;
		case 'NECROMANCER':
			mainHand = ["Axe", "Dagger", "Scepter", "Staff"];
			offHand = ["Dagger", "Focus", "Warhorn"];
			break;
		case 'MESMER':
			mainHand = ["Sword", "Scepter", "Greatsword", "Staff"];
			offHand = ["Pistol", "Sword", "Focus", "Torch"];
			break;
		default:
	}

	if(multipleWeaponSets === false) {
		//Disable select statements in weapon set 2 and din the option field
		$("#weaponSet2 .inputSelection").addClass("inputSelectionInactive");
	}


	var mainHandHTML = '<option value="0" selected>'+ " "+'</option>';
	var offHandHTML = '<option value="0" selected>'+ " "+'</option>';
	//Gen mainHands
	for (weapon of mainHand) {	
		mainHandHTML += '<option value="'+weapon+'">'+weapon+'</option>'; 
	}
	//Gen offhands
	for (weapon of offHand) {	
		offHandHTML += '<option value="'+weapon+'">'+weapon+'</option>'; 
	}

	//Append both
	$(".mainHand").append(mainHandHTML);
	$(".offHand").append(offHandHTML);
}

//Limits armor choices to amulet. Removes weapon stats. Should affect traits/skills
function pvpSetup() {
	if(window.gameType != 1) {
		return;
	}
	
	//TODO: Select defaults for stats

	//block weapon stats
	$(".mainHandStats").addClass("inputSelectionInactive");
	$(".offHandStats").addClass("inputSelectionInactive");
}

function setWeaponStatOptions() {
	var statOptionHtml = '<option value="0" selected>'+ " "+'</option>';

	var statArray = ["Berserker's", "Soldiers", "Celestial"];
	//Gen mainHands
	for (option of statArray) {	
		statOptionHtml += '<option value="'+option+'">'+option+'</option>'; 
	}

	//Append both
	$(".mainHandStats").append(statOptionHtml);
	$(".offHandStats").append(statOptionHtml);
}

function setWeaponSigilOptions() {
	var sigilOptionHtml = '<option value="0" selected>'+ " "+'</option>';

	var sigilArray = ["Berserker's", "Soldiers", "Celestial"];
	//Gen mainHands
	for (sigil of sigilArray) {	
		sigilOptionHtml += '<option value="'+sigil+'">'+sigil+'</option>'; 
	}

	//Append both
	$(".sigil1").append(sigilOptionHtml);
	$(".sigil2").append(sigilOptionHtml);
}