GAME = (function (scope) {
    scope.currentLvl = 1;

    scope.switchLvl = function () {
        var nextLvl = scope.currentLvl + 1;

        if (GAME.currentScore === GAME.lvls[nextLvl].startPoints) {
            return true;
        }
    };

    return scope;
})(GAME);