GAME = (function (scope) {
    scope.currentLvl = 1;

    scope.checkLvl = function () {
        var nextLvl = scope.currentLvl + 1;

        if (scope.currentScore === scope.lvls[nextLvl].startPoints) {
            scope.switchLvl();
            scope.setRoundTime(nextLvl);
            clearInterval(GAME.eggsInterval);
            scope.runRound();
        }
    };
    scope.switchLvl = function () {
        return scope.currentLvl = scope.currentLvl + 1;
    };
    scope.setRoundTime = function (lvl) {
        scope.roundTime = (EGGS.stepTime * EGGS.maxStep) / GAME.lvls[lvl].eggsAtOnce + this.roundTimeDelay;
    };

    return scope;
})(GAME);