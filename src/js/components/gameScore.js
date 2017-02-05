GAME = (function (scope) {
    scope.startScore = 0;
    scope.currentScore = null;
    scope.temporaryScore = null;
    scope.doublePoints = false;
    scope.pointsLimit = 999;
    scope.bonusCriteria = {
        points: 500,
        lifes: 0
    };

    scope.getScoreContainer = function() {
        return document.querySelector('.score');
    };
    scope.updateScore = function(score, tempScore) {
        var points = this.doublePoints ? 2 : 1,
            newScore = score + points,
            newTempScore = tempScore + points;

        if (newScore === scope.bonusCriteria.points && WOLF.usedLifes === scope.bonusCriteria.lifes) {
            scope.isBonusAvailable(true);
        }

        scope.currentScore = newScore;
        scope.temporaryScore = newTempScore;
        scope.getScoreContainer().innerHTML = newScore;
    };
    scope.renderDefaultScore = function() {
        scope.getScoreContainer().innerHTML = scope.startScore;
    };
    scope.isBonusAvailable = function(boolen) {
        scope.doublePoints = boolen;
    };
    scope.resetScore = function () {
        this.startScore = 0;
        this.currentScore = null;
        this.temporaryScore = null;
        this.renderDefaultScore();
    };

    return scope;
})(GAME);