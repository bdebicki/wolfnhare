WOLF = (function (scope) {
    scope.lifesClass = 'lifes';
    scope.usedLifeClass = 'used';
    scope.halfLifeClass = 'half';
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
        lifesContainer.classList.add(scope.lifesClass);

        for (var i=1; i <= this.lifesLimit; i++) {
            fragment.appendChild(renderSimpleLife(i));
        }

        lifesContainer.appendChild(fragment);
        GAME.getGameContainer().appendChild(lifesContainer);
    };

    updateUsedLifes = function (value) {
        scope.usedLifes = scope.usedLifes + value;
    };

    scope.updateLifes = function () {
        var lifeUnused = document.querySelector('.' + scope.lifesClass + ' li:not(.' + scope.usedLifeClass + ')'),
            lifeUsedHalf = document.querySelector('.' + scope.lifesClass + ' li.' + scope.halfLifeClass);

        if (this.usedLifes !== GAME.bonusCriteria.lifes) {
            GAME.isBonusAvailable(false);
        }

        if (lifeUsedHalf) {
            updateUsedLifes(0.5);
            lifeUsedHalf.classList.remove(scope.halfLifeClass);
        } else if (lifeUnused && HARE.isHareVisible) {
            updateUsedLifes(0.5);
            lifeUnused.classList.add(scope.usedLifeClass, scope.halfLifeClass);
        } else if (lifeUnused && !HARE.isHareVisible) {
            updateUsedLifes(1);
            lifeUnused.classList.add(scope.usedLifeClass);
        }

        if (this.usedLifes === this.lifesLimit) {
            setTimeout(function () {
                GAME.gameOver();
            }, 10);
        }
    };

    scope.resetLifes = function () {
        var lifes = document.querySelectorAll('.' + scope.lifesClass + ' li');
        this.usedLifes = 0;

        for (var i = 0, l = lifes.length; i < l; i++) {
            lifes[i].classList.remove(scope.usedLifeClass);
        }
    };

    scope.removeLifes = function () {
        var game = GAME.getGameContainer(),
            lifes = game.querySelector('.' + scope.lifesClass);

        if(lifes) {
           game.removeChild(lifes);
        } else {
           return null;
        }
    };

    return scope;
})(WOLF);