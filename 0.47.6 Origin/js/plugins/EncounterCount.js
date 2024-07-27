//=============================================================================
// EncounterCount.js
//=============================================================================

/*:
* Changes EncounterCount function in rpg_objects.js to smooth high fluctuation in encounter rates
- E.g. Currently if map encounter steps is set to 20...
- Each encounter rate would be = (random: 0-20) + (random: 0-20) + 1;
- Players would have a chance to encounter monsters every 1-40 steps even though the encounter rate is set to 20
- This plugin eliminates risk of frustration by changing the formula to = (20 / 2) + (random: 0-20) + 1
- Therefore the new encounter range would be every 11-31 steps
* @plugindesc Eliminates risk of back-to-back encounters and makes map encounter rate feel more consistent.
*/
(function() {
Game_Player.prototype.makeEncounterCount = function() {
var n = $gameMap.encounterStep();
this._encounterCount = Math.ceil(n / 2) + Math.randomInt(n) + 1;
};
})(); 