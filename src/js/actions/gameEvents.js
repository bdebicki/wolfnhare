GAME = (function (scope) {
    GAME.getActionBtn('game-a').addEventListener('click', function () {
        GAME.startGame('A');
    });

    GAME.getActionBtn('game-b').addEventListener('click', function () {
        GAME.startGame('B');
    });

    GAME.getActionBtn('demo').addEventListener('click', function () {
        GAME.startDemo();
    });

    return scope;
})(GAME);