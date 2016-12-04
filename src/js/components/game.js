var GAME = {
    startScore: 0,
    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep;
    },
    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    getScoreContainer: function() {
        return document.querySelector('.score');
    },
    updateScore: function(score) {
        this.getScoreContainer().innerHTML = score;
    },
    renderDefaultScore: function() {
        this.updateScore(this.startScore);
    }
};