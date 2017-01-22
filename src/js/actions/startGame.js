GAME = (function (scope) {
    scope.startGame = function() {
        WOLFNAVIGATION.actionsAvailable = true;
        HARE.startTogglingHare();
        EGGS.addEgg();
        scope.setRoundTime(1);
        scope.runRound();
    };

    scope.runRound = function () {
        scope.eggsInterval = setInterval(function () {
                GAME.checkLvl();
                if(!GAME.isGameOver) {
                    EGGS.addEgg()
                }
            }, GAME.getRoundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);