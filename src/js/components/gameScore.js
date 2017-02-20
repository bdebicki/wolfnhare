GAME = (function (scope) {
    scope.scoreClass = 'score';
    scope.startScore = 0;
    scope.currentScore = null;
    scope.doublePoints = false;
    scope.pointsLimit = 999;
    scope.bonusCriteria = {
        points: 500,
        lifes: 0
    };

    scope.getScoreContainer = function () {
        return document.querySelector('.' + scope.scoreClass);
    };

    scope.renderScore = function() {
        var score = document.createElement('span');

        score.classList.add(scope.scoreClass);
        score.innerHTML = scope.startScore;
        scope.getGameContainer().appendChild(score);
    };

    scope.isBonusAvailable = function(boolen) {
        scope.doublePoints = boolen;
    };

    scope.updateScore = function(score) {
        if (scope.currentScore !== scope.pointsLimit) {
            var points = this.doublePoints ? 2 : 1,
                newScore = score + points;

            if (newScore === scope.bonusCriteria.points && WOLF.usedLifes === scope.bonusCriteria.lifes) {
                scope.isBonusAvailable(true);
            }

            scope.currentScore = newScore;
            scope.getScoreContainer().innerHTML = newScore;

        } else {
            scope.resetScore();
        }
    };

    scope.resetScore = function () {
        this.startScore = 0;
        this.currentScore = null;
        this.isBonusAvailable(false);

        scope.getScoreContainer().innerHTML = this.startScore;
    };

    scope.removeScore = function () {
        var game = scope.getGameContainer(),
            score = game.querySelector('.' + score.getScoreContainer());

        if(score) {
            game.removeChild(score);
        } else {
          return null;
        }
    };

    return scope;
})(GAME);