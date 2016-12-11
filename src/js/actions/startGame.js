GAME = (function (scope) {
    scope.startGame = function() {
        WOLFNAVIGATION.actionsAvailable = true;
        EGGS.addEgg();

        scope.eggsInterval = setInterval(function() {
                GAME.switchLvl();
                EGGS.addEgg()
            }, this.roundTime()
        );

        return scope.eggsInterval;
    };

    return scope;
})(GAME);