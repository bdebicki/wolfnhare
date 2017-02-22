var GAME = {
    gameBodyId: 'gameBody',
    roundTime: null,
    roundTimeDelay: 30,
    gameId: 0,
    isGameOver: false,
    isDemoGame: true,

    getGameContainer: function () {
        return document.getElementById(GAME.gameBodyId);
    },

    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },

    getRoundTime: function () {
        return this.roundTime;
    },

    checkFall: function() {
        if(!this.isDemoGame) {
            if (CHICKENS.getCurrentChickenState() === WOLF.getCurrentBasketState() || CHICKENS.getCurrentChickenState().indexOf(WOLF.getCurrentWolfState()) !== -1) {
                SCORE.updateScore(SCORE.currentScore);
            } else {
                LIFES.updateLifes();
            }
        } else {
            setTimeout(function () {
                WOLF.autoSetWolfPose();
            }, 30);
        }
        CHICKENS.removeCurrentChicken();
    },

    gameOver: function () {
        this.isGameOver = true;
        WOLFNAVIGATION.actionsAvailable = false;
        clearInterval(GAME.eggsInterval);
        HARE.stopHare();
    },

    restartGame: function () {
        if(this.isGameOver) {
            this.isGameOver = false;
        }
        if(!this.isGameOver) {
            clearInterval(this.eggsInterval);
        }
        this.resetLvl();
        WOLF.resetWolfPosition();
        HARE.setHareVisible(true);
        EGGS.resetEgg();
        CHICKENS.resetChickens();
    }
};