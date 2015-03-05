
/*
 * Init listener
 */
$(function() {
    $('.traitDescription').tipsy();
  });


/*
 * Generates the description as a tooltio
 */
function generateTooltip(className, traitLine, traitNumber){
	return "title='Hello World'";
}

/*
 * Expects the actual number of the trait and the actual number of the trait line
 */
function getDescription(className, traitLine, traitNumber) {
	traitLine--;
	traitNumber--;
	if(className === 'WARRIOR') {
		return warriorDescriptions[traitLine][traitNumber];
	} else if(className === 'GUARDIAN') {
		return guardianDescriptions[traitLine][traitNumber];
	} else if(className === 'ENGINEER') {
		return engineerDescriptions[traitLine][traitNumber];
	} else if(className === 'RANGER') {
		return rangerDescriptions[traitLine][traitNumber];
	} else if(className === 'THIEF') {
		return thiefDescriptions[traitLine][traitNumber];
	} else if(className === 'ELEMENTALIST') {
		return elementalistDescriptions[traitLine][traitNumber];
	} else if(className === 'NECROMANCER') {
		return necromancerDescriptions[traitLine][traitNumber];
	} else if(className === 'MESMER') {
		return mesmerDescriptions[traitLine][traitNumber];
	}
}


/******************************************************************************************
 * TRAIT LINES 
 * 		2D arrays of objects
 *		5 lines, 13 options per line
 *****************************************************************************************/
var warriorDescriptions = [[{name:"Death from Above", description:"Damage and launch foes when you take falling damage. Take less damage from falling."},
								{name:"Restorative Strength", description:"Using a heal skill removes conditions."},
								{name:"Great Fortitude", description:"A percentage of power is given as a bonus to vitality."},
								{name:"Short Temper", description:"Gain might and adrenaline each time you are blocked."},
								{name:"Dual Wielding", description:"Damage is increased when wielding an axe, mace, or sword in your off hand."},
								{name:"Powerful Banners", description:"Banners do damage when summoned."},
								{name:"Distracting Strikes", description:"Apply confusion when you interrupt a foe."},
								{name:"Physical Training", description:"Physical utility skills deal more damage. Reduces recharge on physical utility skills."},
								{name:"Slashing Power", description:"Greatsword and spear damage is increased."},
								{name:"Axe Mastery", description:"Gain ferocity while wielding an axe in your main hand."},
								{name:"Berserker's Power", description:"Increased damage based [sic] how much adrenaline you have built."},
								{name:"Berserker's Might", description:"Gain adrenaline while in combat."},
								{name:"Burst Precision", description:"Burst skills have an increased chance to critically hit."}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var guardianDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];

var engineerDescriptions =[[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var rangerDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var thiefDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var elementalistDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var necromancerDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];
var mesmerDescriptions = [[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							],
							[
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""},
								{name:"", description:""}
							]];