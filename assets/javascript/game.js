$(document).ready(function () {

    var hanSolo = [health = 130, attackPower = 8, counterAttack = 30];
    var lukeSkywalker = [health = 140, attackPower = 10, counterAttack = 25];
    var bobaFett = [health = 100, attackPower = 6, counterAttack = 20];
    var darthVader = [health = 150, attackPower = 12, counterAttack = 30];
    var characterChosen = false;
    var defenderChosen = false;
    var gameOver = false;
    var defenderBeat = false;



    //function to move enemies after user chooses character to play with.
    function moveToEnemies() {
        $(".character-play").removeClass("character-play").addClass("slice-enemies");
        $("#enemiestoattack").append($(".slice-enemies"));
    }



    //user picks their characters.
    $("#hansolochar").on("click", function () {
        if (characterChosen = true) {
            $("#hansolochar").removeClass("character-play").addClass("playerchoice");
            $("#playerchoice").append(this)
        };



        moveToEnemies();

        if ($("#hansolochar").hasClass("slice-enemies")) {
            $("#hansolochar").removeClass("slice-enemies").addClass("defender-character");
            $("#defendturf").append(this);
        };

    });
    $("#lukeskywalkerchar").on("click", function () {
        if (characterChosen = true) {
            $("#lukeskywalkerchar").removeClass("character-play").addClass("playerchoice");
            $("#playerchoice").append(this)
        };

        moveToEnemies();

        if ($("#lukeskywalkerchar").hasClass("slice-enemies")) {
            $("#lukeskywalkerchar").removeClass("slice-enemies").addClass("defender-character");
            $("#defendturf").append(this);
        };


    });


    $("#darthvaderchar").on("click", function () {
        if (characterChosen = true) {
            $("#darthvaderchar").removeClass("character-play").addClass("playerchoice");
            $("#playerchoice").append(this)
        };

        moveToEnemies();

        if ($("#darthvaderchar").hasClass("slice-enemies")) {
            $("#darthvaderchar").removeClass("slice-enemies").addClass("defender-character");
            $("#defendturf").append(this);
        };



    });

    $("#bobafettchar").on("click", function () {
        if (characterChosen = true) {
            $("#bobafettchar").removeClass("character-play").addClass("playerchoice");
            $("#playerchoice").append(this)
        };

        moveToEnemies();

        if ($("#bobafettchar").hasClass("slice-enemies")) {
            $("#bobafettchar").removeClass("slice-enemies").addClass("defender-character");
            $("#defendturf").append(this);
        };
    });

});

//Code for user attack did not get done correctly.  Needs to be done correctly to complete game.