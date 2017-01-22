GAME = (function (scope) {
    scope.startGame = function() {
        this.restartGame();
        HARE.startTogglingHare();
        EGGS.addEgg();
        this.runRound();
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