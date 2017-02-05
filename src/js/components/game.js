var GAME = {
    gameBodyId: 'gameBody',
    roundTime: null,
    roundTimeDelay: 30,
    gameId: 0,
    isGameOver: false,
    isDemoGame: true,

    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },
    getRoundTime: function () {
        return this.roundTime;
    },
    checkFall: function() {
        var basket = WOLF.basket.currentPosition ? WOLF.basket.currentPosition.toLowerCase().split('on')[1] : null;

        if (CHICKENS.getCurrentChicken()[0] === WOLF.getCurrentBasketPosition()) {
            this.updateScore(this.currentScore, this.cycleScore);
        } else {
            WOLF.updateLifes();
        }
        CHICKENS.removeCurrentChicken();
    },
    gameOver: function () {
        this.isGameOver = true;
        WOLFNAVIGATION.actionsAvailable = false;
        clearInterval(GAME.eggsInterval);
    },
    restartGame: function () {
        if(this.isGameOver) {
            this.isGameOver = false;
        }
        if(!this.isGameOver) {
            clearInterval(this.eggsInterval);
        }
        if(this.isDemoGame) {
            WOLFNAVIGATION.actionsAvailable = false;
        } else {
            WOLFNAVIGATION.actionsAvailable = true;
        }
        this.resetLvl();
        WOLF.resetLifes();
        this.resetScore();
        this.isBonusAvailable(false);
        WOLF.resetWolfPosition();
        HARE.setHareVisible(true);
        EGGS.resetEgg();
        CHICKENS.resetChickens();
    }
};