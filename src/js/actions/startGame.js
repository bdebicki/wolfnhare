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
        if (!SCORE.getScoreContainer()) {
            SCORE.renderScore();
        }
        if (SCORE.currentScore !== null) {
            SCORE.resetScore();
        }
        if (!LIFES.getLifesContainer()) {
            LIFES.renderLifes();
        }
        if (LIFES.usedLifes !== 0) {
            LIFES.resetLifes();
        }
    };

    scope.demoSpecificSettings = function () {
        WOLFNAVIGATION.actionsAvailable = false;
        LIFES.removeLifes();
        SCORE.removeScore();
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