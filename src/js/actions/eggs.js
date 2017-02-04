EGGS = (function (scope) {
    scope.updateStep = function(egg) {
        var nextStep = scope.initialStep,
            maxStep = scope.maxStep,
            time = GAME.selectetGameStepTime,
            update = function() {
                var i = nextStep++;

                if (i > maxStep) {
                    if (GAME.gameId === parseInt(egg.dataset.inGame)) {
                        if (!GAME.isGameOver) {
                          GAME.checkFall();
                        }
                        scope.removeEgg(egg);
                    }
                    return false;
                }

                setTimeout(function() {
                    if(!GAME.isGameOver) {
                        if (i <= maxStep) {
                            egg.dataset.eggStep = nextStep;
                        }
                        update();
                    }
                }, time);
            };

        return update();
    };

    return scope;
})(EGGS);