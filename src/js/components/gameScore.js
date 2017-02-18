GAME = (function (scope) {
    scope.startScore = 0;
    scope.currentScore = null;
    scope.cycleScore = null;
    scope.doublePoints = false;
    scope.pointsLimit = 999;
    scope.bonusCriteria = {
        points: 500,
        lifes: 0
    };

    scope.renderScore = function() {
        var score = document.createElement('span');

        score.classList.add('score');
        score.innerHTML = scope.startScore;
        document.getElementById(GAME.gameBodyId).appendChild(score);
    };

    scope.isBonusAvailable = function(boolen) {
        scope.doublePoints = boolen;
    };

    scope.updateScore = function(score, tempScore) {
        var points = this.doublePoints ? 2 : 1,
            newScore = score + points,
            newCycleScore = tempScore + points;

        if (newScore === scope.bonusCriteria.points && WOLF.usedLifes === scope.bonusCriteria.lifes) {
            scope.isBonusAvailable(true);
        }

        scope.currentScore = newScore;
        scope.cycleScore = newCycleScore;
        document.querySelector('.score').innerHTML = newScore;
    };

    scope.resetScore = function () {
        this.startScore = 0;
        this.currentScore = null;
        this.cycleScore = null;

        document.querySelector('.score').innerHTML = this.startScore;
    };

    scope.removeScore = function () {
        var game = document.getElementById(GAME.gameBodyId),
            score = game.querySelector('.score');
        if(score) {
            game.removeChild(score);
        } else {
          return null;
        }
    };

    return scope;
})(GAME);