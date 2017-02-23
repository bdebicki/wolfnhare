GAME.initialize();

GAME.getActionBtn('game-a').addEventListener('click', function () {
    GAME.startGameA();
});
GAME.getActionBtn('game-b').addEventListener('click', function () {
    GAME.startGameB();
});
GAME.getActionBtn('demo').addEventListener('click', function () {
    GAME.startDemo();
});