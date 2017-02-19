var GAME = {
    gameBodyId: 'gameBody',
    roundTime: null,
    roundTimeDelay: 30,
    gameId: 0,
    isGameOver: false,
    isDemoGame: true,

    getGameBody: function () {
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
                this.updateScore(this.currentScore);
            } else {
                WOLF.updateLifes();
            }
        } else {
            setTimeout(function () {
                GAME.autoSetWolfPose();
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
    },

    autoSetWolfPose: function () {
        var actualWolfSide = WOLF.basket.position[CHICKENS.getCurrentChicken()].wolfSide;

        WOLF.setWolfPose(actualWolfSide, CHICKENS.getCurrentChicken());
    }
};