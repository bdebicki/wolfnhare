GAME = (function (scope) {
    scope.startScore = 0;
    scope.currentScore = null;
    scope.doublePoints = false;
    scope.bonusCriteria = {
        points: 500,
        lifes: 0
    };

    scope.getScoreContainer = function() {
        return document.querySelector('.score');
    };
    scope.updateScore = function(score) {
        var points = this.doublePoints ? 2 : 1,
            newScore = score + points;

        if (newScore === scope.bonusCriteria.points && WOLF.usedLifes === scope.bonusCriteria.lifes) {
            scope.isBonusAvailable(true);
        }

        scope.currentScore = newScore;
        scope.getScoreContainer().innerHTML = newScore;
    };
    scope.renderDefaultScore = function() {
        scope.getScoreContainer().innerHTML = scope.startScore;
    };
    scope.isBonusAvailable = function(boolen) {
        scope.doublePoints = boolen;
    };

    return scope;
})(GAME);