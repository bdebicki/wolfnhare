GAME = (function (scope) {
    scope.currentScore = null;
    scope.startScore = 0;

    scope.getScoreContainer = function() {
        return document.querySelector('.score');
    };
    scope.updateScore = function(score) {
        var newScore = score + 1;

        scope.currentScore = newScore;
        scope.getScoreContainer().innerHTML = newScore;
    };
    scope.renderDefaultScore = function() {
        scope.getScoreContainer().innerHTML = scope.startScore;
    };

    return scope;
})(GAME);