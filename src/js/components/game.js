var GAME = {
    startScore: 0,
    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep;
    },
    btn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    startBtn: function() {
        return this.btn('start')
    },
    pauseBtn: function() {
        return this.btn('pause')
    },
    restartBtn: function() {
        return this.btn('restart')
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