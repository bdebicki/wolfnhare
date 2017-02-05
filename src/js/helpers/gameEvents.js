GAME = (function (scope) {
    scope.getActionBtn('game-a').addEventListener('click', function () {
        scope.startGameA();
    });
    scope.getActionBtn('game-b').addEventListener('click', function () {
        scope.startGameB();
    });
    scope.getActionBtn('demo').addEventListener('click', function () {
        scope.startDemo();
    });

    return scope;
})(GAME);