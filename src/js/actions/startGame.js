GAME = (function (scope) {
    scope.startGame = function() {
        WOLFNAVIGATION.actionsAvailable = true;
        EGGS.addEgg();
        scope.setRoundTime(1);
        scope.runRound();
    };

    scope.runRound = function () {
        scope.eggsInterval = setInterval(function () {
                console.log('interval');
                GAME.checkLvl();
                EGGS.addEgg()
            }, GAME.getRoundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);