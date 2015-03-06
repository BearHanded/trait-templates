
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
 	} else if(className === 'ENGINEER') {
 		trait = engineerDescriptions[traitLine][traitNumber];
 	} else if(className === 'RANGER') {
 		trait = rangerDescriptions[traitLine][traitNumber];
	} else if(className === 'THIEF') {
 		trait = thiefDescriptions[traitLine][traitNumber];
	} else if(className === 'ELEMENTALIST') {
 		trait = elementalistDescriptions[traitLine][traitNumber];
	} else if(className === 'NECROMANCER') {
 		trait = necromancerDescriptions[traitLine][traitNumber];
	} else if(className === 'MESMER') {
 		trait = mesmerDescriptions[traitLine][traitNumber];
	} else return '';
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
	} else if(className === 'ENGINEER') {
 		trait = engineerMinorDescriptions[traitLine][traitNumber];
 	} else if(className === 'RANGER') {
 		trait = rangerMinorDescriptions[traitLine][traitNumber];
	} else if(className === 'THIEF') {
 		trait = thiefMinorDescriptions[traitLine][traitNumber];
	} else if(className === 'ELEMENTALIST') {
 		trait = elementalistMinorDescriptions[traitLine][traitNumber];
	} else if(className === 'NECROMANCER') {
 		trait = necromancerMinorDescriptions[traitLine][traitNumber];
	} else if(className === 'MESMER') {
 		trait = mesmerMinorDescriptions[traitLine][traitNumber];
	} else return '';
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
								{name:"Acidic Elixirs", description:"Thrown elixirs cause damage when they land and remove a boon."},
								{name:"Shrapnel", description:"Explosions have a chance to cause bleeding."},
								{name:"Forceful Explosives", description:"Bombs and mines have a larger explosion radius."},
								{name:"Empowering Adrenaline", description:"Get a damage bonus when endurance is not full."},
								{name:"Accelerant-Packed Turrets", description:"Turrets explode when killed. When your turrets explode, they push back foes."},
								{name:"Exploit Weakness", description:"Cripple foes you hit when they are below the health threshold."},
								{name:"Explosive Powder", description:"Improves damage from explosions."},
								{name:"Short Fuse", description:"Reduces recharge on bombs and grenades."},
								{name:"Incendiary Powder", description:"Critical hits inflict burning."},
								{name:"Enhance Performance", description:"Gain might when you use a heal skill."},
								{name:"Grenadier", description:"You throw grenades farther, and each grenade kit skill produces an extra grenade."},
								{name:"Autodefense Bomb Dispenser", description:"Drop a smoke bomb whenever you are disabled (stun, daze, knockdown, knockback, pull, launch, float, sink, or fear)."},
								{name:"Synaptic Overload", description:"Gain quickness when you knock back or launch a foe."}
							],
							[
								{name:"Fireforged Trigger", description:"Reduces recharge on flamethrower and elixir gun skills."},
								{name:"Sitting Duck", description:"Apply cripple and vulnerability to enemies when you immobilize."},
								{name:"Infused Precision", description:"You have a chance to gain swiftness on critical hits."},
								{name:"Rifled Barrels", description:"Improves rifle, pistol, harpoon gun, and elixir gun range."},
								{name:"Precise Sights", description:"You have a chance to cause vulnerability on critical hits"},
								{name:"Hair Trigger", description:"Reduces recharge on rifle, pistol, and harpoon gun skills."},
								{name:"Coated Bullets", description:"Pistol shots pierce."},
								{name:"Juggernaut", description:"You gain toughness while wielding a flamethrower. In addition, gain might at regular intervals while using this weapon kit."},
								{name:"Rifle Mod", description:"Improves damage for the rifle and the harpoon gun."},
								{name:"Go for the Eyes", description:"Critical hits with rifles have a chance to inflict blindness."},
								{name:"Modified Ammunition", description:"Increases damage for each condition on a foe."},
								{name:"Napalm Specialist", description:"Burns you apply last longer."},
								{name:"Bunker Down", description:"Create a proximity mine at your location when you critically hit with an attack."}
							],
							[
								{name:"Protective Shield", description:"Gain protection when you are critically hit."},
								{name:"Explosive Descent", description:"Release a barrage of grenades when you take falling damage. You take less damage from falling."},
								{name:"Metal Plating", description:"Reduces damage dealt to turrets."},
								{name:"Stabilized Armor", description:"You take less damage when you are knocked down or stunned."},
								{name:"Energized Armor", description:"Gain power based on your toughness."},
								{name:"Cloaking Device", description:"You become invisible when immobilized."},
								{name:"Reinforced Shield", description:"Gain toughness when wielding a shield.  Reduces recharge on shield skills."},
								{name:"Power Shoes", description:"Movement speed is increased."},
								{name:"Elite Supplies", description:"Supply Crate has extra supplies; Elixir X gives increased movement speed; and Mortar skills have increased range, reduced recharge, and bonus damage."},
								{name:"Autotool Installation", description:"Turrets are self-repairing."},
								{name:"Elixir-Infused Bombs", description:"Bomb explosions heal allies."},
								{name:"Rifled Turret Barrels", description:"Turrets deal more damage and have a longer attack range."},
								{name:"Fortified Turrets", description:"Your turrets are surrounded by a reflective shield when created."}
							],
							[
								{name:"Invigorating Speed", description:"When you gain swiftness, you also gain vigor."},
								{name:"Fast-Acting Elixirs", description:"Reduces recharge on elixir skills."},
								{name:"Acidic Coating", description:"You have a chance to inflict blindess on enemies that strike you with melee attacks."},
								{name:"Self-Regulating Defenses", description:"Drink an Elixir S when you are struck while below the health threshold."},
								{name:"Blood Injection", description:"Gain condition damage based on your vitality."},
								{name:"Protection Injection", description:"Gain protection whenever you are disabled. (stun, daze, knockdown, knockback, launch, float, sink, or fear)."},
								{name:"Deadly Mixture", description:"Deal extra damage with a flamethrower or elixir gun."},
								{name:"Potent Elixirs", description:"Increases elixir durations."},
								{name:"Backpack Regenerator", description:"Regenerate health every second when using a kit."},
								{name:"Cleaning Formula 409", description:"Throwing or consuming elixirs removes conditions from those affected."},
								{name:"HGH", description:"All elixirs give might."},
								{name:"Automated Response", description:"Condition durations are reduced by 50% while below the health threshold."},
								{name:"Experimental Turrets", description:"Turrets apply boons to allies around them."}
							],
							[
								{name:"Always Prepared", description:"Drop bandages and oil slicks when downed. Downed damage is increased."},
								{name:"Static Discharge", description:"Discharge a bolt of lightning whenever you use a tool belt skill."},
								{name:"Speedy Gadgets", description:"Reduces recharge on gadgets."},
								{name:"Kit Refinement", description:"Equipping a kit creates an attack or a spell."},
								{name:"Deployable Turrets", description:"Turret skills use ground targeting."},
								{name:"Speedy Kits", description:"Gain swiftness whenever you equip a kit."},
								{name:"Packaged Stimulants", description:"Med Kit skills can be thrown and are more effective."},
								{name:"Power Wrench", description:"Reduces recharge and improves damage for tool kit skills. Enhances turret-repairing skills."},
								{name:"Scope", description:"Gain critical-hit chance against targets farther away."},
								{name:"Leg Mods", description:"Cripple, chill, and immobilize durations are reduced."},
								{name:"Armor Mods", description:"Gain aegis when struck."},
								{name:"Adrenal Implant", description:"Endurance regeneration is increased."},
								{name:"Gadgeteer", description:"Gadgets grant additional boons upon use."}
							]];

var engineerMinorDescriptions = [[
									{name:"Evasive Powder Keg", description:"Creates a bomb when you dodge."},
									{name:"Reserve Mines", description:"Release a number of mines when you are struck while below the health threshold."},
									{name:"Steel-Packed Powder", description:"Explosions cause vulnerability."}
								],
								[
									{name:"Sharpshooter", description:"Critical hits have a chance to cause bleeding."},
									{name:"Target the Weak", description:"Critical-hit chance is increased against foes that are below the health threshold."},
									{name:"Target the Maimed", description:"Damage is increased against bleeding foes."}
								],
								[
									{name:"Low-Health Response System", description:"Gain regeneration when you are attacked while below the health threshold."},
									{name:"Automated Medical Response", description:"All heal skills recharge when struck while you are below the health threshold."},
									{name:"Performance Enhancement", description:"Gain power based on your healing attribute."}
								],
								[
									{name:"Hidden Flask", description:"Drink an Elixir B when struck while below the health threshold."},
									{name:"Transmute", description:"Incoming conditions have a chance to convert into boons."},
									{name:"Energy Conversion Matrix", description:"Deal extra damage for each boon on you."}
								],
								[
									{name:"Adrenaline Pump", description:"Using toolbelt skills partially restores endurance."},
									{name:"Inertial Converter", description:"Your tool belt skills recharge when you are struck while below the health threshold."},
									{name:"Enduring Damage", description:"Damage is increased when endurance is full."}
								]];

var rangerDescriptions = [[
								{name:"Steady Focus", description:"Damage is increased when endurance is full."},
								{name:"Malicious Training", description:"Increases duration for conditions applied by your pets."},
								{name:"Keen Edge", description:"Use Sharpening Stone when you strike a foe below the health threshold."},
								{name:"Signet Mastery", description:"Reduces recharge on signets."},
								{name:"Predator's Instinct", description:"Apply cripple to foes you hit while they are below the health threshold."},
								{name:"Beastmaster's Bond", description:"Gain fury and might when your pet's health reaches 50%."},
								{name:"Spotter", description:"Increases precision of nearby allies."},
								{name:"Piercing Arrows", description:"All arrow attacks pierce targets."},
								{name:"Beastmaster's Might", description:"Activating a signet grants might."},
								{name:"Eagle Eye", description:"Increases longbow and harpoon gun range. Longbow and harpoon gun damage is increased."},
								{name:"Predator's Onslaught", description:"You and your pet deal bonus damage to enemies suffering from movement-impeding conditions."},
								{name:"Remorseless", description:"Regain Opening Strike whenever you kill a foe or gain stealth."},
								{name:"Read the Wind", description:"Longbow and harpoon gun projectile velocity is increased. While wielding a longbow, your attack speed is increased."}
							],
							[
								{name:"Pet's Prowess", description:"Pet do more damage on critical hits."},
								{name:"Sharpened Edges", description:"Chance to cause bleeding on critical hits."},
								{name:"Trapper's Defense", description:"Create a Spike Trap while reviving an ally."},
								{name:"Primal Reflexes", description:"You gain vigor when you are struck by a critical hit."},
								{name:"Companion's Might", description:"Critical hits grant might to your pet."},
								{name:"Agility Training", description:"Pets move faster."},
								{name:"Carnivorous Appetite", description:"Pets gain health on critical hits."},
								{name:"Trapper's Expertise", description:"Trap skills use ground targeting and are larger."},
								{name:"Honed Axes", description:"Gain ferocity while wielding an axe in your main hand."},
								{name:"Quick Draw", description:"Reduces recharge on short bow and longbow skills."},
								{name:"Trap Potency", description:"Conditions caused by traps last longer. Reduces recharge on traps."},
								{name:"Moment of Clarity", description:"Gain an attack of opportunity for you and your pet on interrupting a foe. Daze and stun durations you inflict last longer."},
								{name:"Strider's Defense", description:"Chance to destroy projectiles while executing a melee attack."}
							],
							[
								{name:"Soften the Fall", description:"Create Muddy Terrain when you take falling damage. You take less damage from falling."},
								{name:"Healer's Celerity", description:"Grant swiftness to yourself and your ally when you revive them. Increases revive speed."},
								{name:"Shared Anguish", description:"Incoming disabling conditions (stun, daze, knockback, knockdown, sink, float, fear, or launch) are transferred to your pet instead."},
								{name:"Vigorous Renewal", description:"Gain vigor when using a heal skill. Healing Spring grants vigor to affected allies."},
								{name:"Expertise Training", description:"Pets deal extra condition damage."},
								{name:"Wilderness Knowledge", description:"Reduces recharge on survival skills."},
								{name:"Off-Hand Training", description:"Reduces recharge on off-hand skills. Off-hand skills have longer range."},
								{name:"Oakheart Salve", description:"Gain regeneration when you suffer from bleeding, poison or burning."},
								{name:"Hide in Plain Sight", description:"Applies camouflage when you are dazed, knocked down, launched, pushed back, pulled, or stunned."},
								{name:"Martial Mastery", description:"Reduces recharge on sword, greatsword, and spear skills."},
								{name:"Empathic Bond", description:"Pets periodically take conditions from you."},
								{name:"Bark Skin", description:"You and your pet take less damage while your health is below the threshold."},
								{name:"Poison Master", description:"After swapping pets, your pet's first attack will inflict poison. Your poison damage is increased."}
							],
							[
								{name:"Circle of Life", description:"Create a healing spring when you are downed."},
								{name:"Concentration Training", description:"Boons applied by your pets last longer."},
								{name:"Nature's Bounty", description:"Regeneration you apply lasts longer."},
								{name:"Vigorous Spirits", description:"Spirits have increased health and a greater chance to trigger their benefits."},
								{name:"Strength of Spirit", description:"Gain power based on your vitality."},
								{name:"Nature's Protection", description:"Receive protection when you take damage greater than a percentage of your maximum health."},
								{name:"Spirits Unbound", description:"Spirits can move and follow you."},
								{name:"Evasive Purity", description:"Dodging removes blindness and poison from you."},
								{name:"Two-Handed Training", description:"Greatsword and spear damage is increased. Greatsword and spear attacks have a chance to grant fury on hit."},
								{name:"Enlargement", description:"Use Signet of the Wild when your health drops below the threshold."},
								{name:"Nature's Vengeance", description:"Activated skills of spirits are larger and trigger when the spirit is killed."},
								{name:"Nature's Voice", description:"Shouts apply regeneration and swiftness to allies."},
								{name:"Survival of the Fittest", description:"Remove conditions and gain fury when using a Survival skill."}
							],
							[
								{name:"Speed Training", description:"Reduces recharge on pet skills."},
								{name:"Master's Bond", description:"Your pet has a bond with you that increases its attributes each time you kill a foe. When it is defeated or deactivated, the bond is reset."},
								{name:"Shout Master", description:"Reduces recharge on shouts."},
								{name:"Compassion Training", description:"Pet healing attributes are increased."},
								{name:"Commanding Voice", description:"Pet skills (F2) recharge faster."},
								{name:"Mighty Swap", description:"You and your pet gain might when they are activated."},
								{name:"Rending Attacks", description:"Pets inflict bleeding on critically hit with their basic attacks."},
								{name:"Stability Training", description:"Pets gain stability when disabled."},
								{name:"Intimidation Training", description:"Activated attack abilities (F2) for pets cause cripple. This effect will only occure once on each target affected by abilities"},
								{name:"Vigorous Training", description:"Pets grant vigor to nearby allies when activated."},
								{name:"Zephyr's Speed", description:"You and your pet gain 3 seconds of quickness when you swap pets."},
								{name:"Natural Healing", description:"Your pets have natural health regeneration."},
								{name:"Invigorating Bond", description:"Your pet heals allies in an area when executing a command [F2] ability."}
							]];

var rangerMinorDescriptions = [[
									{name:"Opening Strike", description:"Cause vulnerability with your first strike when entering combat."},
									{name:"Alpha Training", description:"Pets have Opening Strike."},
									{name:"Precise Strike", description:"Opening strike always critical hits."}
								],
								[
									{name:"Tail Wind", description:"Gain swiftness when swapping weapons in combat."},
									{name:"Furious Grip", description:"Gain fury when swapping weapons in combat."},
									{name:"Hunter's Tactics", description:"Deal more damage while flanking."}
								],
								[
									{name:"Natural Vigor", description:"Increases endurance regeneration."},
									{name:"Companion's Defense", description:"You and your pet gain protection when you dodge roll."},
									{name:"Peak Strength", description:"Deal extra damage while your health is above the threshold."}
								],
								[
									{name:"Rejuvenation", description:"Gain regeneration when your health drops below the threshold."},
									{name:"Fortifying Bond", description:"Any boon you get is shared with your pet."},
									{name:"Bountiful Hunter", description:"You and your pet deal more damage while you have a boon."}
								],
								[
									{name:"Instinctual Bond", description:"When you are downed, your pet gains quickness."},
									{name:"Loud Whistle", description:"Reduces recharge on pet swapping."},
									{name:"Nature's Wrath", description:"Gain power based on your healing."}
								]];

var thiefDescriptions = [[
								{name:"Back Fighting", description:"You deal bonus damage while downed."},
								{name:"Corrosive Traps", description:"Traps apply vulnerability when triggered."},
								{name:"Mug", description:"Deal damage and gain life when stealing. This attack cannot critically hit enemies."},
								{name:"Venomous Strength", description:"Venoms grant might when activated."},
								{name:"Potent Poison", description:"Increased poison duration."},
								{name:"Sundering Strikes", description:"Critical hits have a chance to cause vulnerability."},
								{name:"Improvisation", description:"Stealing recharges all skills of one type (venoms, signets, traps, tricks, or deceptions). Deal bonus damage when wielding a bundle."},
								{name:"Quick Venoms", description:"Reduces recharge on venom skills."},
								{name:"Dagger Training", description:"Dagger damage is increased."},
								{name:"Combined Training", description:"Dual skills deal more damage."},
								{name:"Panic Strike", description:"Striking a foe that is below the health threshold immobilizes them"},
								{name:"Residual Venom", description:"Applied venoms last an additional strike."},
								{name:"Revealed Training", description:"Gain extra power while you are revealed."}
							],
							[
								{name:"Furious Retaliation", description:"Gain fury when your target falls below the health threshold."},
								{name:"Signets of Power", description:"Gain might when activating a signet."},
								{name:"Side Strike", description:"Gain bonus critical-hit chance when hitting a foe from behind or the side."},
								{name:"Concealed Defeat", description:"Create a Smoke Screen when downed."},
								{name:"Pistol Mastery", description:"Deal additional damage with pistols."},
								{name:"Practiced Tolerance", description:"Gain vitality based on your precision."},
								{name:"Ankle Shots", description:"Critical hits with a pistol have a chance to cripple foes."},
								{name:"Signet Use", description:"Gain initiative when activating a signet. Reduces recharge on signets."},
								{name:"Combo Critical Chance", description:"Dual skills have increased critical-hit chance."},
								{name:"Critical Haste", description:"You have a chance to gain quickness on a critical hit."},
								{name:"Executioner", description:"Deal extra damage when your target is below the health threshold."},
								{name:"Hidden Killer", description:"Gain bonus critical-hit chance while in stealth."},
								{name:"Invigorating Precision", description:"You are healed for a percentage of outgoing critical hit damage."}
							],
							[
								{name:"Master of Deception", description:"Reduces recharge on deception skills."},
								{name:"Slowed Pulse", description:"Grant regeneration if you have two or more stacks of bleeding."},
								{name:"Shadow Protector", description:"When you grant stealth to an ally, they gain regeneration. This effect does not trigger if your ally already has regeneration."},
								{name:"Shadow's Embrace", description:"Remove conditions periodically while in stealth."},
								{name:"Infusion of Shadow", description:"Gain initiative when you enter stealth."},
								{name:"Cloaked in Shadow", description:"Gaining stealth blinds nearby foes."},
								{name:"Power Shots", description:"Short bow and harpoon gun damage is increased."},
								{name:"Hidden Thief", description:"Stealing grants you stealth."},
								{name:"Leeching Venoms", description:"Siphon life from your foe when triggering a venom. This can only occur once per strike."},
								{name:"Patience", description:"Regain initiative faster while in stealth."},
								{name:"Shadow's Rejuvenation", description:"Regenerate health while in stealth."},
								{name:"Venomous Aura", description:"When you use a venom skill, you apply the effects to all nearby allies as well."},
								{name:"Resilience of Shadows", description:"Stealth effects that you apply reduce incoming attack damage."}
							],
							[
								{name:"Descent of Shadows", description:"Release a blinding powder when you take falling damage. You take less damage from falling."},
								{name:"Power of Inertia", description:"Gain might whenever you dodge."},
								{name:"Vigorous Recovery", description:"Gain vigor when using a healing skill."},
								{name:"Assassin's Retreat", description:"Gain swiftness when you kill a foe."},
								{name:"Master Trapper", description:"Reduces recharge on traps."},
								{name:"Fleet Shadow", description:"Move faster while in stealth."},
								{name:"Fleet of Foot", description:"Dodging removes conditions from you."},
								{name:"Pain Response", description:"Gain regeneration and remove conditions when struck while your health is below the threshold."},
								{name:"Quick Recovery", description:"Gain bonus initiative over time."},
								{name:"Hard to Catch", description:"Shadowstep away and gain swiftness when you are disabled (stun, daze, float, knockdown, launch, knockback, sink, pulled, or fear)."},
								{name:"Assassin's Reward", description:"Heal yourself whenever you use a skill that uses initiative. Heal yourself for each point of initiative spent."},
								{name:"Quick Pockets", description:"Gain initiative on swapping weapons while in combat."},
								{name:"Assassin's Equilibrium", description:"Gain stability when striking an enemy from stealth."}
							],
							[
								{name:"Merciful Ambush", description:"Stealth yourself and your target when reviving an ally."},
								{name:"Instinctual Response", description:"If you take damage greater than the health threshold in a single strike, you release feathers to blind nearby enemies and gain stealth."},
								{name:"Uncatchable", description:"Leave behind Caltrops when you dodge."},
								{name:"Flanking Strikes", description:"Increases damage when attacking a foe from behind or the side."},
								{name:"Thrill of the Crime", description:"When you steal, you and all nearby allies gain fury, might, and swiftness for 10 seconds."},
								{name:"Long Reach", description:"Increases the range on stealing."},
								{name:"Bountiful Theft", description:"Stealing grants you and all nearby allies vigor.  You rip boons from your target and grant them to nearby allies."},
								{name:"Trickster", description:"Reduces recharge on tricks."},
								{name:"Initial Strike", description:"Attacks with the first weapon-skill slot have a chance to regain initiative."},
								{name:"Ricochet", description:"Pistol shots have a chance to bounce to an additional target. Pistol range is increased."},
								{name:"Hastened Replenishment", description:"You receive initiative when using a heal skill."},
								{name:"Sleight of Hand", description:"Stealing also dazes the target. Reduces the recharge of Steal."},
								{name:"Bewildering Ambush", description:"Stealing also applies confusion."}
							]];

var thiefMinorDescriptions = [[
									{name:"Serpent's Touch", description:"Stealing inflicts poison."},
									{name:"Lotus Poison", description:"Weaken targets when you poison them."},
									{name:"Exposed Weakness", description:"Deal more damage if your target has a condition."}
								],
								[
									{name:"Keen Observer", description:"Critical-hit chance is increased while your health is above the threshold."},
									{name:"Opportunist", description:"Critical hits have a bonus chance to restore initiative."},
									{name:"First Strikes", description:"Damage is increased while your current initiative is over the threshold."}
								],
								[
									{name:"Last Refuge", description:"Use Blinding Powder when your health reaches a certain threshold."},
									{name:"Meld with Shadows", description:"Stealth skills last longer."},
									{name:"Hidden Assassin", description:"Gain might when you gain stealth."}
								],
								[
									{name:"Expeditious Dodger", description:"Gain swiftness upon dodging."},
									{name:"Feline Grace", description:"Dodging returns some of the endurance used."},
									{name:"Fluid Strikes", description:"Damage is increased when endurance is not full."}
								],
								[
									{name:"Kleptomaniac", description:"Stealing gives you initiative."},
									{name:"Preparedness", description:"Increases maximum initiative by 3."},
									{name:"Lead Attacks", description:"Increases damage per initiative."}
								]];

var elementalistDescriptions = [[
								{name:"Lava Tomb", description:"Create a Lava Font when downed. Deal more damage while downed."},
								{name:"Conjurer", description:"Conjured weapons have more charges."},
								{name:"Ember's Might", description:"Burns you apply last longer."},
								{name:"Spell Slinger", description:"Cantrips grant you might when used."},
								{name:"Burning Precision", description:"Critical hits have a chance to cause burning."},
								{name:"Internal Fire", description:"Deal more damage while attuned to fire."},
								{name:"Pyromancer's Alacrity", description:"Reduces recharge on all fire weapon skills."},
								{name:"Burning Fire", description:"Use Cleansing Fire automatically when you have a number of conditions on you."},
								{name:"Fire's Embrace", description:"When you activate a signet, you gain a fire shield."},
								{name:"One with Fire", description:"Flame Barrier's chance to burn foes goes up the longer you are attuned to fire."},
								{name:"Persisting Flames", description:"Blast finishers you execute on fire fields give fury. Fire fields last longer."},
								{name:"Pyromancer's Puissance", description:"Each skill you use while attuned to fire grants you might."},
								{name:"Blinding Ashes", description:"Blind foes that you burn."}
							],
							[
								{name:"Zephyr's Boon", description:"Auras grant fury and swiftness when applied."},
								{name:"Zephyr's Focus", description:"Your endurance regenerates faster while channeling skills."},
								{name:"Quick Glyphs", description:"Reduces recharge on glyphs."},
								{name:"One with Air", description:"Gain superspeed when attuning to air."},
								{name:"Soothing Winds", description:"Gain healing based on your precision."},
								{name:"Bolt to the Heart", description:"Deal more damage when your foe's health drops below the threshold."},
								{name:"Arcane Lightning", description:"Gain more critical-hit damage for a short time when you use an arcane skill. Does not stack."},
								{name:"Inscription", description:"Grants a boon associated with your current attunement when you cast a glyph."},
								{name:"Aeromancer's Alacrity", description:"Reduces recharge on all your air weapon skills."},
								{name:"Air Training", description:"Deal more damage while attuned to air."},
								{name:"Tempest Defense", description:"Surround yourself with a Shocking Aura when disabled (fear, stun, daze, knockback, knockdown, launch, float, pulled, or sink). Deal more damage to stunned or knocked-down foes."},
								{name:"Fresh Air", description:"Recharge Air Attunement on a critical hit."},
								{name:"Lightning Rod", description:"Disabling an enemy causes them to be struck by a lightning bolt."}
							],
							[
								{name:"Obsidian Focus", description:"Gain toughness while using a channeled skill."},
								{name:"Signet Mastery", description:"Reduces recharge on signets."},
								{name:"Earth's Embrace", description:"Gain Armor of Earth whenever your health drops below the threshold."},
								{name:"Serrated Stones", description:"Bleeds you apply last longer; deal more damage to bleeding foes."},
								{name:"Elemental Shielding", description:"Gain protection when applying an aura to yourself or an ally."},
								{name:"Stone Splinters", description:"Deal more damage when you are within a range of 600 of your target."},
								{name:"Strength of Stone", description:"Gain condition damage based on your toughness."},
								{name:"Rock Solid", description:"Grant stability to nearby allies when attuning to earth."},
								{name:"Geomancer's Freedom", description:"You recover from crippled, immobilized, and chilled faster."},
								{name:"Geomancer's Alacrity", description:"Reduces recharge on all earth weapon skills."},
								{name:"Diamond Skin", description:"Conditions cannot be applied to you when your health is above the threshold."},
								{name:"Written in Stone", description:"Maintain the passive effects of signets when you activate them."},
								{name:"Stone Heart", description:"You cannot be critically hit while attuned to earth."}
							],
							[
								{name:"Arcane Abatement", description:"Take less damage from falling. Create a spell when you take falling damage, based on your attunement.Fire: Ring of FireWater: Cleansing WaveAir: Static FieldEarth: Earthquake"},
								{name:"Shard of Ice", description:"Arcane and signet skills cause vulnerability when activated."},
								{name:"Cantrip Mastery", description:"Reduces recharge on cantrips."},
								{name:"Piercing Shards", description:"While attuned to water, your spells deal more damage to vulnerable foes."},
								{name:"Soothing Wave", description:"Gain regeneration when critically hit."},
								{name:"Vital Striking", description:"Deal extra damage when your health is above the threshold."},
								{name:"Stop, Drop, and Roll", description:"Dodge rolling removes burning and chilled."},
								{name:"Aquamancer's Alacrity", description:"Reduces recharge on all water weapon skills."},
								{name:"Soothing Disruption", description:"Cantrips grant you regeneration and vigor."},
								{name:"Cleansing Wave", description:"Remove a condition from you and your allies when attuning to water."},
								{name:"Cleansing Water", description:"Remove a condition when granting regeneration to yourself or an ally."},
								{name:"Powerful Aura", description:"Auras you gain from weapon skills are also applied to nearby allies."},
								{name:"Aquatic Benevolence", description:"Healing done to allies is increased."}
							],
							[
								{name:"Arcane Mastery", description:"Reduces recharge on arcane skills."},
								{name:"Renewing Stamina", description:"Gain vigor when you deliver a critical hit."},
								{name:"Final Shielding", description:"Create an Arcane Shield when your health drops below the threshold."},
								{name:"Vigorous Scepter", description:"Endurance recharges faster while wielding a scepter."},
								{name:"Blasting Staff", description:"Area attacks with staff are larger."},
								{name:"Windborne Dagger", description:"Move faster for each dagger that you wield."},
								{name:"Arcane Retribution", description:"Gain Arcane Power when your health drops below the threshold."},
								{name:"Elemental Attunement", description:"When attuning to an element, you and all nearby allies gain a boon."},
								{name:"Arcane Resurrection", description:"You have increased revive speed.  When you revive an ally, you and the revived ally gain an aura based on your attunement."},
								{name:"Arcane Energy", description:"Arcane and signet skills restore endurance when used."},
								{name:"Evasive Arcana", description:"Create an attunement-based spell at the end of your dodge. Fire: Flame Burst. Water: Cleansing Wave. Air: Blinding Flash. Earth: Churning Earth."},
								{name:"Elemental Surge", description:"Based on your current attunement, arcane skills cause a condition to foes that they hit."},
								{name:"Elemental Contingency", description:"Gain a boon when you are struck, based on your current attunement."}
							]];

var elementalistMinorDescriptions = [[
									{name:"Flame Barrier", description:"You have a chance to cause burning whenever a foe attacks you in melee. Only triggers when attuned to fire."},
									{name:"Sunspot", description:"Inflict damage at your location when you attune to fire."},
									{name:"Burning Rage", description:"Deal more damage to burning foes."}								],
								[
									{name:"Zephyr's Speed", description:"Move faster while attuned to air."},
									{name:"Electric Discharge", description:"Strike your target with a bolt of lightning when attuning to air."},
									{name:"Weak Spot", description:"Chance to cause vulnerability on critical hits."}
								],
								[
									{name:"Stone Flesh", description:"Gain toughness while attuned to earth."},
									{name:"Earthen Blast", description:"Damage foes and cripple them for 3 seconds when attuning to earth."},
									{name:"Enduring Damage", description:"Deal more damage when your endurance is full."}
								],
								[
									{name:"Soothing Mist", description:"You and nearby allies regenerate health while you are attuned to water."},
									{name:"Healing Ripple", description:"Heal nearby allies when attuning to water."},
									{name:"Bountiful Power", description:"Deal more damage for each boon on you."}
								],
								[
									{name:"Arcane Fury", description:"Gain fury when you switch attunements."},
									{name:"Lingering Elements", description:"Attunement bonuses linger after leaving that attunement."},
									{name:"Arcane Precision", description:"Skills have a chance to apply a condition on critical hits."}
								]];

var necromancerDescriptions = [[
								{name:"Death's Embrace", description:"Deal more damage while downed."},
								{name:"Spiteful Talisman", description:"Reduces recharge on focus skills and increases their range."},
								{name:"Spiteful Removal", description:"When you kill a foe, you remove conditions."},
								{name:"Signet Mastery", description:"Reduces recharge on signets. Activating a signet grants might."},
								{name:"Spiteful Spirit", description:"Gain retaliation when entering death shroud."},
								{name:"Reaper's Might", description:"Life Blast and Plague Blast grant might."},
								{name:"Spiteful Marks", description:"Marks deal more damage."},
								{name:"Axe Training", description:"Reduces recharge on axe skills. Increases damage while wielding axes."},
								{name:"Training of the Master", description:"Increases minion damage."},
								{name:"Chill of Death", description:"Cast Spinal Shivers on a foe when attacking them while their health is below the threshold."},
								{name:"Dhuumfire", description:"Life Blast will inflict burning on your target."},
								{name:"Close to Death", description:"Increases damage to enemies below the health threshold."},
								{name:"Parasitic Contagion", description:"A percentage of your condition damage heals you."}
							],
							[
								{name:"Toxic Landing", description:"Creates a poison cloud when you take falling damage. Take less falling damage."},
								{name:"Hemophilia", description:"Increases inflicted bleed durations."},
								{name:"Chilling Darkness", description:"Blinding a target will also apply chill."},
								{name:"Weakening Shroud", description:"Cast Enfeeble when entering death shroud."},
								{name:"Reaper's Precision", description:"You have a chance to gain life force on critical hits."},
								{name:"Focused Rituals", description:"Well skills use ground targeting. Cannot be used under water."},
								{name:"Master of Corruption", description:"Reduces recharge on corruption skills."},
								{name:"Banshee's Wail", description:"Reduces recharge on warhorn skills and increases their effect durations."},
								{name:"Terror", description:"Fear deals damage; it deals additional damage if the target is afflicted with another condition."},
								{name:"Spectral Attunement", description:"Spectral skills have longer durations and grant life force on use."},
								{name:"Lingering Curse", description:"Conditions inflicted by scepter skills have increased durations."},
								{name:"Withering Precision", description:"Apply weakness on critical hits."},
								{name:"Path of Corruption", description:"Dark Path now additionally converts boons into conditions."}
							],
							[
								{name:"Dark Armor", description:"Gain toughness while channeling."},
								{name:"Spiteful Vigor", description:"Gain retaliation when you use a heal skill."},
								{name:"Minion Master", description:"Reduces recharge on minion skills."},
								{name:"Ritual of Protection", description:"Wells apply protection when cast."},
								{name:"Staff Mastery", description:"Reduces recharge on staff skills."},
								{name:"Shrouded Removal", description:"Lose a condition when you enter death shroud."},
								{name:"Greater Marks", description:"Increases area of marks and marks become unblockable."},
								{name:"Reaper's Protection", description:"When disabled (stun, daze, knockback, knockdown, sink, float, fear, pulled, or launch), inflict fear on nearby foes."},
								{name:"Death Shiver", description:"Constantly apply vulnerability to nearby foes while in death shroud."},
								{name:"Flesh of the Master", description:"Minions have increased health. Your minions are destroyed when this trait is reassigned. Gain bonus toughness for each minion you control."},
								{name:"Death Nova", description:"Minions explode in a cloud of poison when they die. This effect also triggers when you are downed. When you kill an enemy, summon a Jagged Horror minion to fight by your side."},
								{name:"Necromantic Corruption", description:"Minions have a chance to remove a boon when they attack."},
								{name:"Unholy Sanctuary", description:"Regenerate health while in death shroud. If your life force is above the threshold, your death shroud will activate if you take a lethal blow."}
							],
							[
								{name:"Dagger Mastery", description:"Reduces recharge on dagger skills."},
								{name:"Bloodthirst", description:"Siphoning health is more effective."},
								{name:"Mark of Evasion", description:"Leave a Mark of Blood when you dodge."},
								{name:"Ritual of Life", description:"Create a Well of Blood whenever you revive an ally."},
								{name:"Vampiric Precision", description:"Siphon health whenever you critical hit."},
								{name:"Transfusion", description:"Life Transfer heals nearby allies."},
								{name:"Vampiric Master", description:"Minions siphon health and transfer it to you."},
								{name:"Ritual Mastery", description:"Reduces recharge on wells."},
								{name:"Deathly Invigoration", description:"Heal in an area when you leave death shroud."},
								{name:"Quickening Thirst", description:"Increases movement speed for each dagger that you wield."},
								{name:"Fetid Consumption", description:"Each summoned minion draws conditions from their master."},
								{name:"Vampiric Rituals", description:"Wells also siphon health every time they pulse."},
								{name:"Unholy Martyr", description:"Draw conditions from allies while in death shroud, gaining life force each time a condition is drawn."}
							],
							[
								{name:"Fear of Death", description:"Inflict fear on foes when you are downed."},
								{name:"Vital Persistence", description:"Life force drains slower while in death shroud."},
								{name:"Path of Midnight", description:"Reduces recharge on death shroud skills."},
								{name:"Spectral Mastery", description:"Reduces recharge on spectral skills."},
								{name:"Speed of Shadows", description:"Increases movement speed while in death shroud."},
								{name:"Unyielding Blast", description:"Life Blast and Plague Blast pierce and cause vulnerability."},
								{name:"Mark of Revival", description:"Create a Reaper's Mark while reviving someone."},
								{name:"Near to Death", description:"Reduces recharge on Death Shroud."},
								{name:"Master of Terror", description:"Your fear effects have increased durations."},
								{name:"Soul Marks", description:"Marks generate life force when triggered."},
								{name:"Foot in the Grave", description:"Gain stability when you enter death shroud."},
								{name:"Death Perception", description:"Increases critical-hit chance while in death shroud."},
								{name:"Renewing Blast", description:"Life Blast heals allies that it passes through."}
							]];

var necromancerMinorDescriptions = [[
									{name:"Parasitic Bond", description:"Gain health when you kill a foe."},
									{name:"Death into Life", description:"Gain healing power based on your power."},
									{name:"Siphoned Power", description:"Gain might when struck while your health is below the threshold."}
								],
								[
									{name:"Barbed Precision", description:"Critical hits have a chance to cause bleeding."},
									{name:"Furious Demise", description:"Gain fury when entering Death Shroud."},
									{name:"Target the Weak", description:"Increases damage for each condition on a foe."}
								],
								[
									{name:"Armored Shroud", description:"Gain bonus toughness while in death shroud."},
									{name:"Soul Comprehension", description:"Your passive life-force generation from nearby deaths is increased."},
									{name:"Deadly Strength", description:"Gain power based on your toughness."}
								],
								[
									{name:"Full of Life", description:"Gain regeneration when your health drops below the threshold."},
									{name:"Vampiric", description:"Siphon health whenever you hit a foe."},
									{name:"Blood to Power", description:"Gain additional power when your health is above the threshold."}
								],
								[
									{name:"Gluttony", description:"Increases life force gain from skills."},
									{name:"Last Gasp", description:"Gain Spectral Armor when your health falls below the threshold."},
									{name:"Strength of Undeath", description:"You do more damage while above the life-force threshold."}
								]];

var mesmerDescriptions = [[
								{name:"Mental Torment", description:"Mind Wrack deals more damage."},
								{name:"Halting Strike", description:"Deal damage when interrupting a foe."},
								{name:"Empowered Illusions", description:"Illusions deal more damage."},
								{name:"Rending Shatter", description:"Shattering illusions inflicts vulnerability on nearby foes."},
								{name:"Crippling Dissipation", description:"Clones cripple nearby foes when they are killed."},
								{name:"Signet Mastery", description:"Reduces recharge on signets."},
								{name:"Shattered Concentration", description:"Shatter skills also remove a boon on hit."},
								{name:"Confusing Enchantments", description:"Glamour skills cause confusion to foes who enter or exit their areas."},
								{name:"Cleansing Conflagration", description:"Torch skills remove conditions. Reduces recharge on torch skills."},
								{name:"Greatsword Training", description:"Increased power while wielding a greatsword. Reduces recharge on greatsword skills."},
								{name:"Empowering Mantras", description:"Gain increased damage for each readied mantra."},
								{name:"Confounding Suggestions", description:"Chance to inflict stun whenever you daze a target. Increase daze duration"},
								{name:"Power Block", description:"Enemy skills that you interrupt have an increased cooldown."}
							],
							[
								{name:"Far-Reaching Manipulations", description:"The range of your manipulation skills is increased."},
								{name:"Phantasmal Fury", description:"Your phantasms have fury."},
								{name:"Retaliatory Shield", description:"Gain retaliation when you block an attack."},
								{name:"Blade Training", description:"Increased precision while wielding a one-handed sword or a spear. Reduces the recharge on sword and spear skills."},
								{name:"Desperate Decoy", description:"Cloak and leave a clone of yourself behind at 25% health."},
								{name:"Mantra Mastery", description:"Reduced recharge on mantras."},
								{name:"Protected Mantras", description:"Gain toughness while channeling mantras."},
								{name:"Blurred Inscriptions", description:"Activating a signet grants you distortion."},
								{name:"Duelist's Discipline", description:"Increases pistol attack range for you and your illusions. Reduces recharge on pistol skills."},
								{name:"Deceptive Evasion", description:"Create a clone at your current position when you dodge."},
								{name:"Harmonious Mantras", description:"Mantras can be activated three times before needing to be channeled again."},
								{name:"Furious Interruption", description:"Gain quickness when you interrupt a foe."},
								{name:"Triumphant Distortion", description:"Gain distortion upon killing an enemy. Your phantasms gain distortion briefly on creation."}
							],
							[
								{name:"Chaotic Revival", description:"Gain Chaos Armor when you rally."},
								{name:"Descent into Madness", description:"Create a chaos storm when you take falling damage. Take less damage from falling."},
								{name:"Master of Manipulation", description:"Reduces recharge on manipulation skills."},
								{name:"Illusionary Defense", description:"Take reduced damage for each illusion you have in the world."},
								{name:"Debilitating Dissipation", description:"Clones apply a random condition to nearby foes when they are killed."},
								{name:"Retaliatory Demise", description:"Gain retaliation when you are downed."},
								{name:"Mirror of Anguish", description:"When disabled (stun, daze, knockback, pull, knockdown, sink, float, fear, or launch), you mirror the disabling effect back to its source."},
								{name:"Bountiful Interruption", description:"Gain might when you interrupt a foe, then gain another boon randomly."},
								{name:"Cleansing Inscriptions", description:"Activating a signet removes a condition."},
								{name:"Chaotic Dampening", description:"Increased toughness while wielding a staff or trident. Reduces recharge on staff and trident skills."},
								{name:"Chaotic Interruption", description:"Immobilize your target when you interrupt them and randomly apply blind, cripple, or chill."},
								{name:"Prismatic Understanding", description:"Cloaking skills last longer, and you gain a random boon when you are cloaked."},
								{name:"Bountiful Disillusionment", description:"Gain boons each time a shatter skill is used."}
							],
							[
								{name:"Medic's Feedback", description:"Create a feedback bubble while reviving an ally."},
								{name:"Glamour Mastery", description:"Reduces recharge on glamour skills."},
								{name:"Vigorous Revelation", description:"Shattering illusions grants vigor to nearby allies."},
								{name:"Mender's Purity", description:"Remove a condition when you heal."},
								{name:"Persisting Images", description:"Phantasms have increased health."},
								{name:"Compounding Celerity", description:"Move faster for each active illusion."},
								{name:"Malicious Sorcery", description:"Increased condition damage while wielding a scepter. Reduces recharge on scepter skills."},
								{name:"Warden's Feedback", description:"Focus skills reflect projectiles. Reduces recharge on focus skills."},
								{name:"Temporal Enchanter", description:"Glamour skills last longer."},
								{name:"Restorative Mantras", description:"Heal allies when you cast a mantra."},
								{name:"Shattered Conditions", description:"Using a shatter skill removes a condition from you and allies around you."},
								{name:"Restorative Illusions", description:"Heal a small amount when you shatter illusions."},
								{name:"Disruptor's Sustainment", description:"Gain bonus healing power when interrupting a foe."}
							],
							[
								{name:"Precise Wrack", description:"Mind Wrack has an increased critical-hit chance."},
								{name:"Confusing Cry", description:"Cry of Frustration grants retaliation."},
								{name:"Compounding Power", description:"Gain increased damage for each of your active illusions."},
								{name:"Masterful Reflection", description:"Distortion grants reflection."},
								{name:"Master of Misdirection", description:"Confusion you inflict lasts longer."},
								{name:"Dazzling Glamours", description:"Glamour skills blind foes at target location."},
								{name:"Illusionary Elasticity", description:"Bouncing attacks have one additional bounce."},
								{name:"Illusionary Invigoration", description:"Recharge all of your shatter skills when your health drops below the threshold."},
								{name:"Blinding Befuddlement", description:"Cause confusion when you blind a foe."},
								{name:"Phantasmal Haste", description:"Reduces recharge on phantasm attack skills."},
								{name:"Illusionary Persona", description:"Shattering illusions creates the shatter effect on you as well."},
								{name:"Imbued Diversion", description:"Diversion hits multiple targets."},
								{name:"Maim the Disillusioned", description:"Enemies hit by shatter skills are inflicted with torment."}
							]];

var mesmerMinorDescriptions = [[
									{name:"Illusion of Vulnerability", description:"Inflict vulnerability when you interrupt a foe."},
									{name:"Dazzling", description:"Dazing a foe also applies vulnerability."},
									{name:"Wastrel's Punishment", description:"Increased damage to foes who are not using a skill."}
								],
								[
									{name:"Critical Infusion", description:"Gain vigor when delivering a critical hit."},
									{name:"Sharper Images", description:"Illusions inflict bleeding on critical hits."},
									{name:"Confusing Combatants", description:"Your illusions cause confusion to foes around them when they are killed."}
								],
								[
									{name:"Metaphysical Rejuvenation", description:"Gain regeneration when your health drops below the threshold."},
									{name:"Illusionary Membrane", description:"Gain protection when you gain regeneration."},
									{name:"Chaotic Transference", description:"Gain condition damage based on your toughness."}
								],
								[
									{name:"Vengeful Images", description:"Grants retaliation to Phantasms."},
									{name:"Phantasmal Healing", description:"Phantasms grant regeneration to nearby allies."},
									{name:"Phantasmal Strength", description:"Phantasms deal more damage."}
								],
								[
									{name:"Illusionary Retribution", description:"All Shatter skills inflict confusion."},
									{name:"Illusionists Celerity", description:"Reduces recharge on illusion-summoning skills."},
									{name:"Shattered Strength", description:"Shattering illusions grants you might per illusion."}
								]];