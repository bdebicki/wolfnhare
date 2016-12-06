var GAME = {
    currentScore: null,
    startScore: 0,
    roundTimeDelay: 30,

    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep + this.roundTimeDelay;
    },
    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    getScoreContainer: function() {
        return document.querySelector('.score');
    },
    updateScore: function(score) {
        var newScore = score + 1;

        this.currentScore = newScore;
        this.getScoreContainer().innerHTML = newScore;
    },
    renderDefaultScore: function() {
        this.getScoreContainer().innerHTML = this.startScore;
    },
    checkFall: function() {
        var basket = WOLF.basket.currentPosition ? WOLF.basket.currentPosition.toLowerCase().split('on')[1] : null;

        if (CHICKENS.getCurrentChicken() === basket) {
            this.updateScore(this.currentScore);
        } else {
            console.log('fail');
        }
    }
};