GAME = (function (scope) {
    scope.startBtn().addEventListener('click', function () {
        scope.startGame();
    });

    return scope;
})(GAME);