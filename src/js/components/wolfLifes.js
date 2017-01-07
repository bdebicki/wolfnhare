WOLF = (function (scope) {
    scope.usedLifes = 0;

    var lifes = document.querySelectorAll('.lifes li'),
        lifesLimit = lifes.length;

    scope.updateLives = function () {
        this.usedLifes = this.usedLifes + 1;

        if (this.usedLifes === GAME.bonusCriteria.lifes + 1) {
            GAME.isBonusAvailable(false);
        }

        for (var i = 0, l = lifesLimit; i < l; i++) {
            if (!lifes[i].classList.contains('used')) {
                lifes[i].classList.add('used');

                if (this.usedLifes !== lifesLimit) {
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