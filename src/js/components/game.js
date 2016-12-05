var GAME = {
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
        this.getScoreContainer().innerHTML = score;
    },
    renderDefaultScore: function() {
        this.updateScore(this.startScore);
    },
    checkFall: function() {
        var chicken = CHICKENS.currentChicken.toLowerCase(),
            basket = WOLF.basket.currentPosition.toLowerCase().split('on')[1];

        console.log('chicken:' + chicken + ', basket: ' + basket);
    }
};