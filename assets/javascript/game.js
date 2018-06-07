$(document).ready(function() {

    var hanSolo = [ health = 130, attackPower = 8, counterAttack = 30];
    var lukeSkywalker = [ health = 140, attackPower = 10, counterAttack = 25];
    var bobaFett = [ health = 100, attackPower = 6, counterAttack = 20];
    var darthVader = [ health = 150, attackPower = 12, counterAttack = 30];
    var characterChosen = false;
    var defenderChosen = false;
    var gameOver = false;
    var defenderBeat = false;
    


    function moveToEnemies() {
        $(".character-play").removeClass("character-play").addClass("slice-enemies");
        $("#enemiestoattack").append($(".slice-enemies"));
      }

      $("#hansolochar").on("click", function () {
        $("#hansolochar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
      
    moveToEnemies();
    });

    $("#lukeskywalkerchar").on("click", function () {
        $("#lukeskywalkerchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
      
    moveToEnemies();
    });


 $("#darthvaderchar").on("click", function () {
        $("#darthvaderchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
      
    moveToEnemies();
    });

    $("#bobafettchar").on("click", function () {
        $("#bobafettchar").removeClass("character-play").addClass("playerchoice");
        $("#playerchoice").append(this);
      
    moveToEnemies();
    });
      

    
  

        
   










});