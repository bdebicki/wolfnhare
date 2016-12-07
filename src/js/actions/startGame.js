GAME = (function (scope) {
    scope.startGame = function() {
        WOLFNAVIGATION.actionsAvailable = true;
        EGGS.addEgg();

        scope.eggsInterval = setInterval(function() {
                EGGS.addEgg()
            }, this.roundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);