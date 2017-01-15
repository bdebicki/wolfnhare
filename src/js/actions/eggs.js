EGGS = (function (scope) {
    scope.updateStep = function(egg) {
        var nextStep = scope.initialStep,
            maxStep = scope.maxStep,
            time = scope.stepTime,
            update = function() {
                var i = nextStep++;

                if (i > maxStep) {
                    if(!GAME.isGameOver) {
                       GAME.checkFall();
                    }
                    scope.removeEgg(egg);
                    return false;
                }

                setTimeout(function() {
                    if (i <= maxStep) {
                        egg.dataset.eggStep = nextStep;
                    }
                    update();
                }, time);
            };

        return update();
    };

    return scope;
})(EGGS);