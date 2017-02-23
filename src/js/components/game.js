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
    runRound: function () {
        this.eggsInterval = setInterval(function () {
            GAME.checkLvl();
            if(!GAME.isGameOver) {
                EGGS.addEgg()
            }
        }, this.getRoundTime());

        return this.eggsInterval;
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

    gameSpecificSettings: function () {
        WOLFNAVIGATION.actionsAvailable = true;
        CLOCK.removeClock();
        if (!SCORE.getScoreContainer()) {
            SCORE.renderScore();
        }
        if (SCORE.currentScore !== null) {
            SCORE.resetScore();
        }
        if (!LIFES.getLifesContainer()) {
           LIFES.renderLifes();
        }
        if (LIFES.usedLifes !== 0) {
           LIFES.resetLifes();
        }
    },

    demoSpecificSettings: function () {
        WOLFNAVIGATION.actionsAvailable = false;
        LIFES.removeLifes();
        SCORE.removeScore();
        CLOCK.renderClock();
    },

    startGame: function() {
        this.gameId = this.gameId + 1;
        this.restartGame();
        HARE.startTogglingHare();
        EGGS.addEgg();
        this.runRound();
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

    startGameA: function () {
        this.isDemoGame = false;
        this.gameSpecificSettings();
        this.setGameTypeStepTime('A');
        this.startGame();
    },

    startGameB: function () {
        this.isDemoGame = false;
        this.gameSpecificSettings();
        this.setGameTypeStepTime('B');
        this.startGame();
    },

    startDemo: function () {
        this.isDemoGame = true;
        this.demoSpecificSettings();
        this.setGameTypeStepTime('A');
        this.startGame();
        WOLF.autoSetWolfPose();
    },

    initialize: function() {
        WOLF.render();
        setTimeout(function () {
            GAME.startDemo();
        }, 30);
    }
};