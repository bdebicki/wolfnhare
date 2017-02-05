GAME = (function (scope) {
    scope.currentLvl = 1;
    scope.selectetGameStepTime = null;

    scope.checkLvl = function () {
        var nextLvl = scope.currentLvl + 1;

        if (scope.cycleScore === scope.lvls[nextLvl].startPoints) {
            scope.switchLvl();
            scope.setRoundTime(nextLvl);
            clearInterval(GAME.eggsInterval);
            scope.runRound();
        } else if (scope.cycleScore === scope.pointsLimit) {
            scope.resetLvl();
            scope.cycleScore = 0;
            clearInterval(GAME.eggsInterval);
            scope.runRound();
        }
    };
    scope.switchLvl = function () {
        return scope.currentLvl = scope.currentLvl + 1;
    };
    scope.setGameTypeStepTime = function (type) {
        if (type === 'A') {
            GAME.selectetGameStepTime = EGGS.stepTime.gameA;
        } else if (type === 'B') {
            GAME.selectetGameStepTime = EGGS.stepTime.gameB;
        }
    };
    scope.setRoundTime = function (lvl) {
        scope.roundTime = (GAME.selectetGameStepTime * EGGS.maxStep) / GAME.lvls[lvl].eggsAtOnce + this.roundTimeDelay;
    };
    scope.resetLvl = function () {
        this.currentLvl = 1;
        this.setRoundTime(this.currentLvl);
    };

    return scope;
})(GAME);