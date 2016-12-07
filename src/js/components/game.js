var GAME = {
    roundTimeDelay: 30,

    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep + this.roundTimeDelay;
    },
    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    checkFall: function() {
        var basket = WOLF.basket.currentPosition ? WOLF.basket.currentPosition.toLowerCase().split('on')[1] : null;

        if (CHICKENS.getCurrentChicken() === WOLF.getCurrentBasketPosition()) {
            this.updateScore(this.currentScore);
        } else {
            console.log('fail');
        }
    }
};