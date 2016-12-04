GAME = (function (scope) {
    scope.getActionBtn('start').addEventListener('click', function () {
        scope.startGame();
    });

    return scope;
})(GAME);