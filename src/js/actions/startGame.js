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

    scope.startGameA = function () {
        this.setGameTypeStepTime('A');
        this.startGame();
    };

    scope.startGameB = function () {
        this.setGameTypeStepTime('B');
        this.startGame();
    };

    return scope;
})(GAME);