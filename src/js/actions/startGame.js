GAME = (function (scope) {
    scope.startGame = function() {
        this.gameId = this.gameId + 1;
        this.restartGame();
        HARE.startTogglingHare();
        EGGS.addEgg();
        this.runRound();
    };

    scope.gameSpecificSettings = function () {
        WOLFNAVIGATION.actionsAvailable = true;
        CLOCK.removeClock();
        scope.renderScore();
        WOLF.renderLifes();
        WOLF.resetLifes();
        this.resetScore();
    };

    scope.demoSpecificSettings = function () {
        WOLFNAVIGATION.actionsAvailable = false;
        WOLF.removeLifes();
        this.removeScore();
        CLOCK.renderClock();
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
        this.gameSpecificSettings();
        this.setGameTypeStepTime('A');
        this.startGame();
    };

    scope.startGameB = function () {
        this.isDemoGame = false;
        this.gameSpecificSettings();
        this.setGameTypeStepTime('B');
        this.startGame();
    };

    scope.startDemo = function () {
        scope.isDemoGame = true;
        this.demoSpecificSettings();
        this.setGameTypeStepTime('A');
        this.startGame();
        this.autoSetWolfPose();
    };

    return scope;
})(GAME);