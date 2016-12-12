GAME = (function (scope) {
    scope.currentScore = null;
    scope.doublePoints = false;
    scope.startScore = 0;

    scope.getScoreContainer = function() {
        return document.querySelector('.score');
    };
    scope.updateScore = function(score) {
        var points = this.doublePoints ? 2 : 1,
            newScore = score + points;

        scope.currentScore = newScore;
        scope.getScoreContainer().innerHTML = newScore;
    };
    scope.renderDefaultScore = function() {
        scope.getScoreContainer().innerHTML = scope.startScore;
    };

    return scope;
})(GAME);