/**
 *	Generates the html for each set of trait options. The trait line is given an id of line1/line2/etc and 
 *	each option is given a class of adeptTrait/masterTrait/grandMasterTrait
 */
function initTraits() {
	$('#buildName').val(window.currentBuild.buildName);
	$('#traitTable').empty();
	//add in appropriate build ids
	var html = '';

	var lineNames;
	//init specific trait data per class
	switch(window.className) {
		case 'WARRIOR':
			lineNames = ["Strength","Arms","Defence","Tactics","Disciple"];
			break;
		case 'GUARDIAN':
			lineNames = ["Zeal","Radiance","Valor","Honor","Virtues"];
			break;
		case 'ENGINEER':
			lineNames = ["Explosives","Firearms","Inventions","Alchemy","Tools"];
			break;
		case 'RANGER':
			lineNames = ["Marksmanship","Skirmishing","Wilderness Survival","Nature Magic","Beast Mastery"];
			break;
		case 'THIEF':
			lineNames = ["Deadly Arts","Critical Strikes","Shadow Arts","Acrobatics","Trickery"];
			break;
		case 'ELEMENTALIST':
			lineNames = ["Fire Magic","Air Magic","Earth Magic","Water Magic","Arcana"];
			break;
		case 'NECROMANCER':
			lineNames = ["Spite","Curses","Death Magic","Blood Magic","Soul Reaping"];
			break;
		case 'MESMER':
			lineNames = ["Domination","Dueling","Chaos","Inspiration","Illusions"];
			break;
		default:
	}


	for(var i = 0; i < 5; i++) {
		var trueNum = i+1;
		//Top Row 
		html += '<tr id="traitLine'+ trueNum +'"><td class="emphasis">' + lineNames[i] + '</td><td class="tinyText">' 
        	+ getLineBonus(i, 1) + '</td>';
		//Complete trait line
        html += '<td rowspan="2">' + getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(i, 0) + '</td><td rowspan="2">' 
        	+ getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(i, 1) + '</td><td rowspan="2">' 
        	+ getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(i, 2) + '</td></tr>';
        //Bottom Row
        html += '<tr><td>' + '<button class="lightBtn">-</button>'
        	+ '<button class="lightBtn">+</button>' 
        	+ '<span class="traitTotal">0</span>' + '</td><td class="tinyText">' 
        	+ getLineBonus(i, 2) + '</td></tr>';
    }
    $('#traitTable').append(html);

    //Appended: update selected values - 
    updateTraitSelections();
}

/**
 *	Generates the html for each set of trait options. The option is given a class of adeptTrait/masterTrait/grandMasterTrait
 */
function generateTraitOptions(traitLine, traitLevel) {
	var traitOptions = '';
	var traitHtmlClass = '';
	switch(traitLevel){	
		case 0:
			traitHtmlClass = 'class="adeptTrait inputSelection"';
			break;
		case 1:
			traitHtmlClass = 'class="masterTrait inputSelection"';
			break;
		case 2:
			traitHtmlClass = 'class="grandMasterTrait inputSelection"';
			break;
		default:
	}

	traitOptions += '<select ' + traitHtmlClass + '>'
		+'<option value="0" selected="selected"> </option>'
		+'<option value=1>I</option>'
		+'<option value=2>II</option>'
		+'<option value=3>III</option>'
		+'<option value=4>IV</option>'
		+'<option value=5>V</option>'
		+'<option value=6>VI</option>';
  	if(traitLevel>0) {
  		traitOptions += '<option value=7>VII</option>'
  			+'<option value=8>VIII</option>'
  			+'<option value=9>IX</option>'
  			+'<option value=10>X</option>';
  	}
  	if(traitLevel>1) {
  		traitOptions += '<option value=11>XI</option>'
  			+'<option value=12>XII</option>'
  			+'<option value=13>XIII</option>';
  	}
	traitOptions +='</select>';
	return traitOptions;
}

/**
 * Returns the generated icon for locked traits modifiable if locked
 */
function getMinorSymbol() {
	var symbolPath = '';
	return 'mnr';
	switch(window.className) {
		case 'WARRIOR':
			
			break;
		case 'GUARDIAN':

			break;
		case 'ENGINEER':

			break;
		case 'RANGER':

			break;
		case 'THIEF':

			break;
		case 'ELEMENTALIST':

			break;
		case 'NECROMANCER':

			break;
		case 'MESMER':

			break;
		default:
	}
	return symbolPath;
}

/**
 * Returns the line bonus image and a modifiable field for bonus
 */
function getLineBonus(lineNumber, bonusNumber) {
	var iconPath = '';
	switch(window.className) {
		case 'WARRIOR':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Condition Damage";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Healing Power";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Boon Duration";
				case 4:
					if(bonusNumber===1) return "Ferocity";
					return "Burst Recharge";
			}
		case 'GUARDIAN':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Condition Damage";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Ferocity";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Healing Power";
				case 4:
					if(bonusNumber===1) return "Boon Duration";
					return "Virtue Recharge";
			}
		case 'ENGINEER':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Condition Damage";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Healing Power";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Boon Duration";
				case 4:
					if(bonusNumber===1) return "Ferocity";
					return "Tool Belt Recharge";
			}
		case 'RANGER':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Ferocity";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Condition Damage";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Boon Duration";
				case 3:
					if(bonusNumber===1) return "Healing Power";
					return "Pet Attribute Bonus";
			}
		case 'THIEF':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Ferocity";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Healing Power";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Boon Duration";
				case 4:
					if(bonusNumber===1) return "Condition Damage";
					return "Steal Recharge";
			}
		case 'ELEMENTALIST':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Ferocity";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Condition Damage";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Healing Power";
				case 4:
					if(bonusNumber===1) return "Boon Duration";
					return "Attunement Recharge";

			}
		case 'NECROMANCER':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Condition Damage";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Boon Duration";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Healing Power";
				case 4:
					if(bonusNumber===1) return "Ferocity";
					return "Life Force Pool";
			}
		case 'MESMER':
			switch(lineNumber) {
				case 0:
					if(bonusNumber===1) return "Power";
					return "Condition Duration";
				case 1:
					if(bonusNumber===1) return "Precision";
					return "Ferocity";
				case 2:
					if(bonusNumber===1) return "Toughness";
					return "Boon Duration";
				case 3:
					if(bonusNumber===1) return "Vitality";
					return "Healing Power";
				case 4:
					if(bonusNumber===1) return "Condition Damage";
					return "Shatter Recharge";

			}
		default:
			if(bonusNumber===1) return "Bonus 1";
			return "Bonus 2";
	}
	return iconPath;
}

function updateTraitSelections() {
	if(currentBuild.traits.line1.adept) $("#traitLine1").find('.adeptTrait').val(currentBuild.traits.line1.adept);
	if(currentBuild.traits.line1.master) $("#traitLine1").find('.masterTrait').val(currentBuild.traits.line1.master);
	if(currentBuild.traits.line1.grandmaster) $("#traitLine1").find('.grandMasterTrait').val(currentBuild.traits.line1.grandmaster);

	if(currentBuild.traits.line2.adept) $("#traitLine2").find('.adeptTrait').val(currentBuild.traits.line2.adept);
	if(currentBuild.traits.line2.master) $("#traitLine2").find('.masterTrait').val(currentBuild.traits.line2.master);
	if(currentBuild.traits.line2.grandmaster) $("#traitLine2").find('.grandMasterTrait').val(currentBuild.traits.line2.grandmaster);

	if(currentBuild.traits.line3.adept) $("#traitLine3").find('.adeptTrait').val(currentBuild.traits.line3.adept);
	if(currentBuild.traits.line3.master) $("#traitLine3").find('.masterTrait').val(currentBuild.traits.line3.master);
	if(currentBuild.traits.line3.grandmaster) $("#traitLine3").find('.grandMasterTrait').val(currentBuild.traits.line3.grandmaster);

	if(currentBuild.traits.line4.adept) $("#traitLine4").find('.adeptTrait').val(currentBuild.traits.line4.adept);
	if(currentBuild.traits.line4.master) $("#traitLine4").find('.masterTrait').val(currentBuild.traits.line4.master);
	if(currentBuild.traits.line4.grandmaster) $("#traitLine4").find('.grandMasterTrait').val(currentBuild.traits.line4.grandmaster);

	if(currentBuild.traits.line5.adept) $("#traitLine5").find('.adeptTrait').val(currentBuild.traits.line5.adept);
	if(currentBuild.traits.line5.master) $("#traitLine5").find('.masterTrait').val(currentBuild.traits.line5.master);
	if(currentBuild.traits.line5.grandmaster) $("#traitLine5").find('.grandMasterTrait').val(currentBuild.traits.line5.grandmaster);
}

function saveBuild(){
	//Save build name
	window.currentBuild.buildName = $("#buildName").val();

	//Scrape together traitLines
	window.currentBuild.traits.line1.adept = $("#traitLine1").find('.adeptTrait').val();
	window.currentBuild.traits.line1.master = $("#traitLine1").find('.masterTrait').val();
	window.currentBuild.traits.line1.grandmaster = $("#traitLine1").find('.grandMasterTrait').val();

	window.currentBuild.traits.line2.adept = $("#traitLine2").find('.adeptTrait').val();
	window.currentBuild.traits.line2.master = $("#traitLine2").find('.masterTrait').val();
	window.currentBuild.traits.line2.grandmaster = $("#traitLine2").find('.grandMasterTrait').val();

	window.currentBuild.traits.line3.adept = $("#traitLine3").find('.adeptTrait').val();
	window.currentBuild.traits.line3.master = $("#traitLine3").find('.masterTrait').val();
	window.currentBuild.traits.line3.grandmaster = $("#traitLine3").find('.grandMasterTrait').val();

	window.currentBuild.traits.line4.adept = $("#traitLine4").find('.adeptTrait').val();
	window.currentBuild.traits.line4.master = $("#traitLine4").find('.masterTrait').val();
	window.currentBuild.traits.line4.grandmaster = $("#traitLine4").find('.grandMasterTrait').val();

	window.currentBuild.traits.line5.adept = $("#traitLine5").find('.adeptTrait').val();
	window.currentBuild.traits.line5.master = $("#traitLine5").find('.masterTrait').val();
	window.currentBuild.traits.line5.grandmaster = $("#traitLine5").find('.grandMasterTrait').val();

	saveAllTraits(window.currentBuild);
}

