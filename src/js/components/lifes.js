var LIFES = {
    lifesClass: 'lifes',
    usedLifeClass: 'used',
    halfLifeClass: 'half',
    usedLifes: 0,
    lifesLimit: 3,

    getLifesContainer: function () {
      return document.querySelector('.' + this.lifesClass);
    },

    renderSimpleLife: function (counter) {
        var life = document.createElement('li');

        life.innerHTML = counter;

        return life;
    },

    renderLifes: function () {
        var fragment = document.createDocumentFragment(),
            lifesContainer = document.createElement('ul');

        lifesContainer.classList.add(this.lifesClass);

        for (var i=1; i <= this.lifesLimit; i++) {
            fragment.appendChild(this.renderSimpleLife(i));
        }

        lifesContainer.appendChild(fragment);
        GAME.getGameContainer().appendChild(lifesContainer);
    },

    updateUsedLifes: function (value) {
        this.usedLifes = this.usedLifes + value;
    },

    updateLifes: function () {
        var lifeUnused = document.querySelector('.' + this.lifesClass + ' li:not(.' + this.usedLifeClass + ')'),
            lifeUsedHalf = document.querySelector('.' + this.lifesClass + ' li.' + this.halfLifeClass);

        if (this.usedLifes !== SCORE.bonusCriteria.lifes) {
            SCORE.isBonusAvailable(false);
        }

        if (lifeUsedHalf) {
            this.updateUsedLifes(0.5);
            lifeUsedHalf.classList.remove(this.halfLifeClass);
        } else if (lifeUnused && HARE.isHareVisible) {
            this.updateUsedLifes(0.5);
            lifeUnused.classList.add(this.usedLifeClass, this.halfLifeClass);
        } else if (lifeUnused && !HARE.isHareVisible) {
            this.updateUsedLifes(1);
            lifeUnused.classList.add(this.usedLifeClass);
        }

        if (this.usedLifes === this.lifesLimit) {
            setTimeout(function () {
                GAME.gameOver();
            }, 10);
        }
    },

    resetLifes: function () {
        var lifes = document.querySelectorAll('.' + this.lifesClass + ' li');

        this.usedLifes = 0;

        for (var i = 0, l = lifes.length; i < l; i++) {
            lifes[i].classList.remove(this.usedLifeClass);
        }
    },

    removeLifes: function () {
        var game = GAME.getGameContainer(),
            lifes = game.querySelector('.' + this.lifesClass);

        if(lifes) {
           game.removeChild(lifes);
        } else {
           return null;
        }
    }
};