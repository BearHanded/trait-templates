function initTraits() {
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
		//Top Row 
		html += '<tr><td>' + '<td>' + lineNames[i] + '</td><td>' 
        	+ getLineBonus(1) + '</td>';
		//Complete trait line
        html += '<td rowspan="2">' + getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(0) + '</td><td rowspan="2">' 
        	+ getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(1) + '</td><td rowspan="2">' 
        	+ getMinorSymbol() + '</td><td rowspan="2">' + generateTraitOptions(2) + '</td></tr>';
        //Bottom Row
        html += '<tr><td>' + '<td>' + '<span> - </span><span> + </span>' + '0' + '</td><td>' 
        	+ getLineBonus(2) + '</td></tr>';
    }
    $('#traitTable').append(html);
}

function generateTraitOptions(traitLevel) {
	var traitOptions = '';
	traitOptions += '<select><option value=1>I</option><option value=2>II</option><option value=3>III</option><option value=4>IV</option><option value=5>V</option><option value=6>VI</option>';
  	if(traitLevel>0) {
  		traitOptions += '<option value=7>VII</option><option value=8>VIII</option><option value=9>IX</option><option value=10>X</option>';
  	}
  	if(traitLevel>1) {
  		traitOptions += '<option value=11>XI</option><option value=12>XII</option><option value=12>XIII</option>';
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
function getLineBonus(lineNumber) {
	var iconPath = '';
	return 'bonus ' + lineNumber;
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
	return iconPath;
}

function saveBuild(){
	saveAllTraits(window.currentBuild);
}