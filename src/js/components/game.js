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
        if(!this.isDemoGame) {
            if (CHICKENS.getCurrentChickenState() === WOLF.getCurrentBasketState() || CHICKENS.getCurrentChickenState().indexOf(WOLF.getCurrentWolfState()) !== -1) {
                this.updateScore(this.currentScore, this.cycleScore);
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
    },

    autoSetWolfPose: function () {
        var actualWolfSide = WOLF.basket.position[CHICKENS.getCurrentChicken()].wolfSide;

        WOLF.setWolfPose(actualWolfSide, CHICKENS.getCurrentChicken());
    }
};