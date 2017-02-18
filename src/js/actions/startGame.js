GAME = (function (scope) {
    scope.startGame = function() {
        this.gameId = this.gameId + 1;
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
        this.isDemoGame = false;
        this.setGameTypeStepTime('A');
        this.startGame();
    };

    scope.startGameB = function () {
        this.isDemoGame = false;
        this.setGameTypeStepTime('B');
        this.startGame();
    };

    scope.startDemo = function () {
        scope.isDemoGame = true;
        this.setGameTypeStepTime('A');
        this.startGame();
        this.autoSetWolfPose();
    };

    return scope;
})(GAME);