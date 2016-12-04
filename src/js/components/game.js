var GAME = {
    startScore: 0,
    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep;
    },
    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    scoreContainer: function() {
        return document.querySelector('.score');
    },
    updateScore: function(score) {
        this.scoreContainer().innerHTML = score;
    },
    renderDefaultScore: function() {
        this.updateScore(this.startScore);
    }
};

GAME.renderDefaultScore();