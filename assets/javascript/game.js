var hanSolo = { name: "Han Solo", health: 130, attackPower: 8, counterAttack: 30};
var lukeSkywalker = { name: "Luke Skywalker", health: 140, attackPower: 10, counterAttack: 25};
var bobaFett = { name: "Boba Fett", health: 100, attackPower: 6, counterAttack: 20};
var darthVader = { name: "Darth Vader", health: 150, attackPower: 12, counterAttack: 30};
var counterAttack;
var chosenChar = {};
var enemiesAvailChar;
var defendChar = {};
var endGame = false;
var characterChosen = false;
var defenderChosen = false;
var gameOver = false;



$(document).ready(function() {

    $("#hansolo").on("click", function() {
        alert("Han shot first");
    });

    $("#lukeskywalker").on("click", function() {
        alert("Look at the size of that thing");
    });

    $("#darthvader").on("click", function() {
        alert("That's what she said");
    });

    $("#bobafett").on("click", function() {
        alert("Darth, what are you, 15?");
    });






});