var GAME = {
    roundTime: null,
    roundTimeDelay: 30,
    isGameOver: false,

    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    getRoundTime: function () {
        return this.roundTime;
    },
    checkFall: function() {
        var basket = WOLF.basket.currentPosition ? WOLF.basket.currentPosition.toLowerCase().split('on')[1] : null;

        if (CHICKENS.getCurrentChicken()[0] === WOLF.getCurrentBasketPosition()) {
            this.updateScore(this.currentScore);
        } else {
            WOLF.updateLifes();
        }
        CHICKENS.removeCurrentChicken();
    },
    gameOver: function () {
        console.log('game over');
        this.isGameOver = true;
        clearInterval(GAME.eggsInterval);
    }
};