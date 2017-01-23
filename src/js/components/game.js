var GAME = {
    gameId: 'gameBody',
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
        this.isGameOver = true;
        clearInterval(GAME.eggsInterval);
    },
    restartGame: function () {
        this.isGameOver = false;
        WOLFNAVIGATION.actionsAvailable = true;
        this.resetLvl();
        WOLF.resetLifes(); // no interface reset
        this.resetScore();
        this.isBonusAvailable(false);
        WOLF.resetWolfPosition();
        HARE.setHareVisible(true);
        EGGS.resetEgg();
    }
};