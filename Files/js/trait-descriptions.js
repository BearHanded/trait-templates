
//INIT TOOLTIPS
$( document ).tooltip({
    content: function() {
        return $(this).attr('title');
    }
});

/*
 * Generates the description as a tooltip
 *	Params: 
 * 		className   : 'WARRIOR'
 *		traitLine   : The number of the trait line 1-5
 *		traitNumber : The number of the trait 1-13
 *	Return: HTML to be inserted into object
 */
function generateTooltip(className, traitLine, traitNumber){
	return 'title="' + getDescription(className, traitLine, traitNumber) + '"';
}

/*
 * Expects the actual number of the trait and the actual number of the trait line
 */
function getDescription(className, traitLine, traitNumber) {
	if(traitLine >5 || traitLine<1 || traitNumber <1 || traitNumber >13) return "";
	traitLine--;
	traitNumber--;
	var trait="";
	if(className === 'WARRIOR') {
 		trait = warriorDescriptions[traitLine][traitNumber];
	} else if(className === 'GUARDIAN') {
 		trait = guardianDescriptions[traitLine][traitNumber];
	} else return 'title="Hello World"';
	/*
	if(className === 'GUARDIAN') {
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
	}*/
	return trait.name + "<br/>" + trait.description;
}

/*
 * Generates the description as a tooltip
 *	Params: 
 * 		className   : 'WARRIOR'
 *		traitLine   : The number of the trait line 1-5
 *		traitNumber : The number of the trait 1-13
 *	Return: HTML to be inserted 
 */
function generateMinorTooltip(className, traitLine, traitNumber){
	return 'title="' + getDescription(className, traitLine, traitNumber) + '"';
}

/*
 * Expects the actual number of the trait and the actual number of the trait line
 */
function getMinorDescription(className, traitLine, traitNumber) {
	if(traitLine >5 || traitLine<1 || traitNumber <1 || traitNumber >3) return "";
	traitLine--;
	traitNumber--;
	var trait="";
	if(className === 'WARRIOR') {
 		trait = warriorMinorDescriptions[traitLine][traitNumber];
	} else if(className === 'GUARDIAN') {
 		trait = guardianMinorDescriptions[traitLine][traitNumber];
	} else return 'title="Hello World"';
	/*
	if(className === 'GUARDIAN') {
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
	}*/
	return trait.name + "<br/>" + trait.description;
}

/******************************************************************************************
 * TRAIT LINES 
 * MAJOR:
 * 		2D arrays of objects
 *		5 lines, 13 options per line
 * MINOR:
 * 		3 per line
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
								{name:"Berserker's Power", description:"Increased damage based on how much adrenaline you have built."},
								{name:"Berserker's Might", description:"Gain adrenaline while in combat."},
								{name:"Burst Precision", description:"Burst skills have an increased chance to critically hit."}
							],
							[
								{name:"Deep Strike", description:"Gain precision for each unused signet you have equipped."},
								{name:"Furious Speed", description:"You have a chance to gain swiftness on critical hits"},
								{name:"Deep Cuts", description:"Bleeds you apply last longer."},
								{name:"Crack Shot", description:"Rifle and harpoon gun shots pierce. Reduced recharge on rifle and harpoon gun skills."},
								{name:"Rending Strikes", description:"You have a chance to cause vulnerability on critical hits."},
								{name:"Furious Reaction", description:"Gain fury and vigor when you take damage greater than a certain percentage of your maximum health in a single strike."},
								{name:"Unsuspecting Foe", description:"Increased critical-hit chance against stunned foes."},
								{name:"Blademaster", description:"Increases your critical-hit chance with a sword."},
								{name:"Opportunist", description:"Gain fury when you immobilize a target."},
								{name:"Forceful Greatsword", description:"Gain might on a critical hit with a greatsword or spear. Reduces recharge on greatsword and spear skills."},
								{name:"Furious", description:"Critical hits grant bonus adrenaline."},
								{name:"Last Chance", description:"Gain quickness when you strike a foe that is below the health threshold."},
								{name:"Dual Wield Agility", description:"Your attack speed is increased when wielding a sword, axe, or mace in your off hand."},
							],
							[
								{name:"Shield Master", description:"Gain toughness while using a shield. Reduces recharge on shield skills."},
								{name:"Dogged March", description:"Incoming movement-impeding conditions have their durations reduced. Gain regeneration when you are affected by one of these conditions."},
								{name:"Sure-Footed", description:"Increases stance durations."},
								{name:"Vigorous Return", description:"Health and endurance are increased when you rally."},
								{name:"Missile Deflection", description:"Reflect missiles whenever you are blocking."},
								{name:"Cull the Weak", description:"Increases damage to weakened foes."},
								{name:"Sundering Mace", description:"Mace damage is increased when a foe is weakened. Reduces recharge on mace skills."},
								{name:"Last Stand", description:"Activates Balanced Stance when you are dazed, knocked down, launched, pushed back, pulled, or stunned."},
								{name:"Cleansing Ire", description:"Gain adrenaline when hit. Remove a condition for every bar of adrenaline spent when you hit with a burst skill."},
								{name:"Merciless Hammer", description:"Hammer damage is increased when a foe is disabled. Reduces recharge on hammer skills."},
								{name:"Defy Pain", description:"Activate Endure Pain when you are struck while below the health threshold."},
								{name:"Spiked Armor", description:"Gain retaliation when struck by a critical hit."},
								{name:"Rousing Resilience", description:"Gain toughness when you break out of a stun."}
							],
							[
								{name:"Leg Specialist", description:"Immobilize a target when you cripple them with a skill."},
								{name:"Lung Capacity", description:"Reduces recharge on shouts."},
								{name:"Desperate Power", description:"You deal additional damage while below the health threshold."},
								{name:"Stronger Bowstrings", description:"Increases longbow range."},
								{name:"Inspiring Banners", description:"Banners apply their bonuses to a larger area. Reduces recharge on banners."},
								{name:"Empowered", description:"Increases damage for every boon on you."},
								{name:"Shrug It Off", description:"Use 'Shake It Off!' automatically when you have a number of conditions on you."},
								{name:"Empower Allies", description:"Increases power for nearby allies."},
								{name:"Quick Breathing", description:"Reduces recharge on warhorn skills. Warhorn skills convert conditions into boons."},
								{name:"Burning Arrows", description:"Longbow damage is increased against burning foes. Reduces recharge on longbow skills."},
								{name:"Inspiring Battle Standard", description:"Banners also grant regeneration to allies."},
								{name:"Vigorous Shouts", description:"Shouts heal."},
								{name:"Phalanx Strength", description:"When you grant yourself might, grant it to nearby allies as well."}
							],
							[
								{name:"Mighty Defenses", description:"You gain might when you block an attack."},
								{name:"Thrill of the Kill", description:"Gain extra adrenaline on a kill."},
								{name:"Warrior's Sprint", description:"Run faster while wielding melee weapons."},
								{name:"Inspiring Shouts", description:"Gain adrenaline when using a shout."},
								{name:"Vigorous Focus", description:"Gain vigor when using a Stance."},
								{name:"Signet Mastery", description:"Signets recharge faster."},
								{name:"Sweet Revenge", description:"Vengeance has an increased chance to rally."},
								{name:"Destruction of the Empowered", description:"Deal bonus damage per boon on your target."},
								{name:"Sharpened Axes", description:"Critical hits with axes grant extra adrenaline. Reduces recharge on axe skills."},
								{name:"Mobile Strikes", description:"Movement skills break immobilize."},
								{name:"Burst Mastery", description:"Burst skills deal more damage and restore adrenaline on use."},
								{name:"Heightened Focus", description:"Gain bonus critical-hit chance for each stage of adrenaline you have."},
								{name:"Brawler's Recovery", description:"Remove conditions when you swap weapons."}
							]];

var warriorMinorDescriptions = [[
							{name:"Reckless Dodge", description:"Damage foes at the end of a dodge roll."},
							{name:"Building Momentum", description:"Burst skills restore endurance on hit."},
							{name:"Stick and Move", description:"Get a damage bonus when endurance is not full."}
						],
						[
							{name:"Precise Strikes", description:"Chance to cause bleeding on critical hits."},
							{name:"Critical Burst", description:"Burst skills have an increased critical chance."},
							{name:"Attack of Opportunity", description:"Increases damage to bleeding foes."}
						],
						[
							{name:"Thick Skin", description:"Gain extra armor while your health is above the threshold."},
							{name:"Adrenal Health", description:"Regenerate health based on adrenaline level."},
							{name:"Armored Attack", description:"Gain power based on your toughness."}
						],
						[
							{name:"Determined Revival", description:"Gain extra toughness per level while reviving."},
							{name:"Fast Healer", description:"Increases revive speed."},
							{name:"Reviver's Might", description:"Grant might to nearby allies when you revive someone."}
						],
						[
							{name:"Versatile Rage", description:"Gain adrenaline on weapon swap."},
							{name:"Fast Hands", description:"Weapon-swapping recharges faster."},
							{name:"Versatile Power", description:"Gain might on weapon swap."}
						]];

var guardianDescriptions = [[
								{name:"Binding Jeopardy", description:"Immobilizing a foe also applies vulnerability to them."},
								{name:"Fiery Wrath", description:"Increases damage against burning foes."},
								{name:"Protector's Impact", description:"Create a Symbol of Protection when you take falling damage. You take less damage when falling."},
								{name:"Revenge of the Fallen", description:"Increased damage while downed."},
								{name:"Shattered Aegis", description:"When an aegis you applied is removed, it damages nearby foes."},
								{name:"Spirit-Weapon Mastery", description:"Reduces recharge on spirit-weapon skills."},
								{name:"Zealous Blade", description:"Attacks with your greatsword deal an extra 5% damage and heal you."},
								{name:"Focused Mastery", description:"Reduces recharge on focus skills."},
								{name:"Scepter Power", description:"Scepter damage is increased."},
								{name:"Expeditious Spirit", description:"Spirit weapon command skills have reduced recharge."},
								{name:"Wrathful Spirits", description:"Increases spirit weapon damage by 50%."},
								{name:"Kindled Zeal", description:"Gain condition damage based on your power."},
								{name:"Amplified Wrath", description:"Burning damage is increased."}
							],
							[
								{name:"Healer's Retribution", description:"Gain retaliation when using a heal skill."},
								{name:"Signet Mastery", description:"Reduces recharge on signets."},
								{name:"Shimmering Defense", description:"Burn nearby foes when you are struck while below the health threshold."},
								{name:"Inner Fire", description:"When you are set on fire, you gain fury."},
								{name:"Searing Flames", description:"When you apply burning to a foe, remove a boon."},
								{name:"Blind Exposure", description:"Applying blind also applies vulnerability."},
								{name:"Radiant Fire", description:"Reduces recharge on torch skills. All burning durations are increased"},
								{name:"A Fire Inside", description:"Spirit weapons cause burning."},
								{name:"Inscribed Removal", description:"Using a signet cures a condition on you."},
								{name:"Powerful Blades", description:"Sword and spear damage is increased."},
								{name:"Right-Hand Strength", description:"Critical-hit chance with one-handed weapons is increased."},
								{name:"Perfect Inscriptions", description:"Signet passive effects are improved."},
								{name:"Radiant Retaliation", description:"Retaliation damage scales from condition damage instead of power."}
							],
							[
								{name:"Meditation Mastery", description:"Reduces recharge on meditations."},
								{name:"Defender's Flame", description:"Gain a chance to burn attackers when blocking."},
								{name:"Strength of the Fallen", description:"Lose health slower while downed."},
								{name:"Strength in Numbers", description:"Nearby allies gain toughness based on your effective level."},
								{name:"Purity", description:"Lose conditions at a set time interval."},
								{name:"Retributive Armor", description:"Gain precision based on your toughness."},
								{name:"Mace of Justice", description:"Wielding a mace grants additional damage. Wielding a mace also grants healing power (based on level)."},
								{name:"Glacial Heart", description:"Critical hits with hammer chill enemies."},
								{name:"Honorable Shield", description:"Gain toughness when wielding a shield. Reduces recharge on shield skills."},
								{name:"Focused Mind", description:"Meditations grant fury."},
								{name:"Altruistic Healing", description:"Applying a boon to allies heals you."},
								{name:"Monk's Focus", description:"Using a meditation skill heals you."},
								{name:"Communal Defenses", description:"Grant aegis to allies when you block an attack."}
							],
							[
								{name:"Wrathful Spirit", description:"Aegis gives retaliation when it ends."},
								{name:"Superior Aria", description:"Reduces recharge on shouts."},
								{name:"Writ of Exaltation", description:"Symbols are larger."},
								{name:"Protective Reviver", description:"When you revive an ally, you both gain aegis, protection, and regeneration."},
								{name:"Resolute Healer", description:"Generates a Shield of Absorption when you start reviving an ally."},
								{name:"Pure of Heart", description:"Aegis heals you when it blocks an attack."},
								{name:"Writ of Persistence", description:"Symbols last longer."},
								{name:"Empowering Might", description:"You and nearby allies gain might when you land a critical hit."},
								{name:"Two-Handed Mastery", description:"Reduces recharge on two-handed weapon skills."},
								{name:"Writ of the Merciful", description:"All symbols heal allies with each pulse."},
								{name:"Pure of Voice", description:"Allies affected by shouts have conditions converted to boons."},
								{name:"Battle Presence", description:"Nearby allies gain Virtue of Resolve's passive effect."},
								{name:"Force of Will", description:"You have increased vitality, based on your level."}
							],
							[
								{name:"Unscathed Contender", description:"Deal more damage while under the effects of aegis."},
								{name:"Vengeful", description:"Retaliation lasts longer."},
								{name:"Consecrated Ground", description:"Consecration skills use ground targeting."},
								{name:"Retaliatory Subconscious", description:"Gain retaliation whenever you are disabled (stun, daze, knockback, pull, knockdown, sink, float, fear, pulled, or launch)."},
								{name:"Improved Spirit-Weapon Duration", description:"Spirit weapons last longer."},
								{name:"Master of Consecrations", description:"Reduces recharge on consecration skills and increases their durations."},
								{name:"Elite Focus", description:"Elite skills last longer and Tome skills gain stability."},
								{name:"Supreme Justice", description:"Virtue of Justice causes burning more frequently. When activating Virtue of Justice, the burn duration is increased."},
								{name:"Absolute Resolution", description:"Activating Virtue of Resolve removes conditions from nearby allies. Virtue of Resolve's passive effect is stronger."},
								{name:"Indomitable Courage", description:"Activating Virtue of Courage grants stability to nearby allies. Virtue of Courage's passive effect triggers more frequently."},
								{name:"Permeating Wrath", description:"	Virtue of Justice's passive effect no longer burns your target, but instead burns the area around you each time it activates."},
								{name:"Shielded Mind", description:"Activating Virtue of Courage also breaks stun for any ally affected by the ability."},
								{name:"Purity of Body", description:"Your Virtue of Resolve's passive effect also regenerates endurance."}
							]];


var guardianMinorDescriptions = [[
									{name:"Zealot's Speed", description:"Create a Symbol of Wrath when you are struck while below the health threshold."},
									{name:"Symbolic Exposure", description:"Symbols apply vulnerability to foes."},
									{name:"Symbolic Power", description:"Increases damage of symbols."}
								],
								[
									{name:"Justice is Blind", description:"When activating Virtue of Justice, nearby foes are blinded."},
									{name:"Renewed Justice", description:"Virtue of Justice is renewed when you kill a foe."},
									{name:"Radiant Power", description:"Deal more damage to foes inflicted with conditions."}
								],
								[
									{name:"Valorous Defense", description:"Gain aegis when you are struck while below the health threshold."},
									{name:"Courageous Return", description:"Virtue of Courage is recharged when you rally."},
									{name:"Might of the Protector", description:"Gain might when you block attacks."}
								],
								[
									{name:"Vigorous Precision", description:"Gain vigor when you deliver a critical hit."},
									{name:"Selfless Daring", description:"The end of your dodge roll heals nearby allies."},
									{name:"Elusive Power", description:"Deal more damage when your endurance is not full."}
								],
								[
									{name:"Inspired Virtue", description:"Virtues now also apply the following boons to allies when activated: Justice: might / Resolve: regeneration / Courage: protection)"},
									{name:"Virtue of Retribution", description:"Gain retaliation when you activate a virtue."},
									{name:"Power of the Virtuous", description:"Deal extra damage for each boon you have."}
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

var engineerMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
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

var rangerMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
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

var thiefMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
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

var elementalistMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
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

var necromancerMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
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

var mesmerMinorDescriptions = [[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								],
								[
									{name:"", description:""},
									{name:"", description:""},
									{name:"", description:""}
								]];