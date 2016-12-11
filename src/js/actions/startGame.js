GAME = (function (scope) {
    scope.startGame = function() {
        WOLFNAVIGATION.actionsAvailable = true;
        EGGS.addEgg();
        scope.setRoundTime(1);
        scope.runRound();
    };

    scope.runRound = function () {
        scope.eggsInterval = setInterval(function () {
                GAME.checkLvl();
                EGGS.addEgg()
            }, GAME.getRoundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);