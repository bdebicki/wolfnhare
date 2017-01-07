WOLF = (function (scope) {
    var lifesLimit = document.querySelectorAll('.lifes li').length;

    scope.usedLifes = 0;

    scope.lifeType = function () {
        return HARE.isHareVisible ? 0 : 1;
    };

    scope.checkGameOver = function () {
        if (this.usedLifes === lifesLimit) {
            setTimeout(function () {
                GAME.gameOver();
            }, 10);
        }
    };

    scope.updateLives = function () {
        var lifeUnused = document.querySelector('.lifes li:not(.used)'),
            lifeUsedHalf = document.querySelector('.lifes li.half');

        this.usedLifes = this.usedLifes + this.lifeType();

        if (this.usedLifes !== GAME.bonusCriteria.lifes) {
            GAME.isBonusAvailable(false);
        }

        if(lifeUsedHalf) {
            lifeUsedHalf.classList.remove('half');
        } else if(lifeUnused) {
            if (HARE.isHareVisible) {
                lifeUnused.classList.add('used', 'half');
            } else if (!HARE.isHareVisible) {
                lifeUnused.classList.add('used');
            }
        }
        scope.checkGameOver();
    };

    return scope;
})(WOLF);