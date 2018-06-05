var hanSolo = { name: "Han Solo", health: 130, attackPower: 8, counterAttack: 30};
var lukeSkywalker = { name: "Luke Skywalker", health: 140, attackPower: 10, counterAttack: 25};
var bobaFett = { name: "Boba Fett", health: 100, attackPower: 6, counterAttack: 20};
var darthVader = { name: "Darth Vader", health: 150, attackPower: 12, counterAttack: 30};
var counterAttack;
var characterChosen = false;
var defenderChosen = false;
var gameOver = false;


  
  

$(document).ready(function() {

    $("#hansolochar").on("click", function() {
        $("#hansolochar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
       
     
    });

    $("#lukeskywalkerchar").on("click", function() {
        $("#lukeskywalkerchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
    });

    $("#darthvaderchar").on("click", function() {
        $("#darthvaderchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
    });

    $("#bobafettchar").on("click", function() {
        $("#bobafettchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
    });






});