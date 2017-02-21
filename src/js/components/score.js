var SCORE = {
    scoreClass: 'score',
    startScore: 0,
    currentScore: null,
    doublePoints: false,
    pointsLimit: 999,
    bonusCriteria: {
        points: 500,
        lifes: 0
    },

    getScoreContainer: function () {
        return document.querySelector('.' + this.scoreClass);
    },

    renderScore: function() {
        var score = document.createElement('span');

        score.classList.add(this.scoreClass);
        score.innerHTML = this.startScore;
        GAME.getGameContainer().appendChild(score);
    },

    isBonusAvailable: function(boolen) {
      this.doublePoints = boolen;
    },

    updateScore: function(score) {
        if (this.currentScore !== this.pointsLimit) {
            var points = this.doublePoints ? 2 : 1,
                newScore = score + points;

            if (newScore === this.bonusCriteria.points && WOLF.usedLifes === this.bonusCriteria.lifes) {
              this.isBonusAvailable(true);
            }

            this.currentScore = newScore;
            this.getScoreContainer().innerHTML = newScore;

        } else {
            this.resetScore();
        }
    },

    resetScore: function () {
        this.startScore = 0;
        this.currentScore = null;
        this.isBonusAvailable(false);
        this.getScoreContainer().innerHTML = this.startScore;
    },

    removeScore: function () {
        var game = GAME.getGameContainer(),
            score = game.querySelector('.' + this.scoreClass);

        if(score) {
            game.removeChild(score);
        } else {
          return null;
        }
    }
};