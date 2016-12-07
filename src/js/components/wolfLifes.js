WOLF = (function (scope) {
    var usedLifes = 0,
        lifes = document.querySelectorAll('.lifes li'),
        lifesLimit = lifes.length;

    scope.updateLives = function () {
        usedLifes++;

        for (var i = 0, l = lifesLimit; i < l; i++) {
            if (!lifes[i].classList.contains('used')) {
                lifes[i].classList.add('used');

                if (usedLifes !== lifesLimit) {
                    return false;
                } else {
                    setTimeout(function () {
                        GAME.gameOver();
                    }, 10);
                }
            }
        }
    };

    return scope;
})(WOLF);