GAME = (function (scope) {
    scope.getActionBtn('game-a').addEventListener('click', function () {
        scope.startGame();
    });

    return scope;
})(GAME);