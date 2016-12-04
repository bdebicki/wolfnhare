GAME = (function (scope) {
    scope.startGame = function() {
        EGGS.addEgg();

        scope.eggsInterval = setInterval(function() {
            EGGS.addEgg()}, this.roundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);