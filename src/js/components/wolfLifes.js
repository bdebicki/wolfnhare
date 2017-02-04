WOLF = (function (scope) {
    scope.usedLifes = 0;
    scope.lifesLimit = 3;

    renderSimpleLife = function (counter) {
        var life = document.createElement('li');
        life.innerHTML = counter;

        return life;
    };

    scope.renderLifes = function () {
        var fragment = document.createDocumentFragment();

        var lifesContainer = document.createElement('ul');
        lifesContainer.classList.add('lifes');

        for (var i=1; i <= this.lifesLimit; i++) {
            fragment.appendChild(renderSimpleLife(i));
        }

        lifesContainer.appendChild(fragment);
        document.getElementById(GAME.gameBodyId).appendChild(lifesContainer);
    };

    updateUsedLifes = function (value) {
        scope.usedLifes = scope.usedLifes + value;
    };

    scope.updateLifes = function () {
        var lifeUnused = document.querySelector('.lifes li:not(.used)'),
            lifeUsedHalf = document.querySelector('.lifes li.half');

        if (this.usedLifes !== GAME.bonusCriteria.lifes) {
            GAME.isBonusAvailable(false);
        }

        if (lifeUsedHalf) {
            updateUsedLifes(0.5);
            lifeUsedHalf.classList.remove('half');
        } else if (lifeUnused && HARE.isHareVisible) {
            updateUsedLifes(0.5);
            lifeUnused.classList.add('used', 'half');
        } else if (lifeUnused && !HARE.isHareVisible) {
            updateUsedLifes(1);
            lifeUnused.classList.add('used');
        }

        if (this.usedLifes === this.lifesLimit) {
            setTimeout(function () {
                GAME.gameOver();
            }, 10);
        }
    };

    scope.resetLifes = function () {
        var lifes = document.querySelectorAll('.lifes li');
        this.usedLifes = 0;

        for (var i = 0, l = lifes.length; i < l; i++) {
            lifes[i].classList.remove('used');
        }
    };

    return scope;
})(WOLF);