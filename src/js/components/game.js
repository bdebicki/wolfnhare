var GAME = {
    gameBodyId: 'gameBody',
    roundTime: null,
    roundTimeDelay: 30,
    selectetGameStepTime: null,
    gameId: 0,
    isGameOver: false,
    isDemoGame: true,

    getGameContainer: function () {
        return document.getElementById(GAME.gameBodyId);
    },

    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    },

    setGameTypeStepTime: function (type) {
        if (type === 'A') {
            this.selectetGameStepTime = EGGS.stepTime.gameA;
        } else if (type === 'B') {
            this.selectetGameStepTime = EGGS.stepTime.gameB;
        }
    },

    setRoundTime: function (lvl) {
        this.roundTime = (this.selectetGameStepTime * EGGS.maxStep) / LEVELS.lvlsList[lvl].eggsAtOnce + this.roundTimeDelay;
    },

    getRoundTime: function () {
        return this.roundTime;
    },

    runRound: function () {
        this.eggsInterval = setInterval(function () {
            LEVELS.checkLvl();

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
        WOLF_NAVIGATION.actionsAvailable = false;
        clearInterval(GAME.eggsInterval);
        HARE.stopHare();
    },

    gameSpecificSettings: function (type) {
        WOLF_NAVIGATION.actionsAvailable = true;
        CLOCK.removeClock();
        if (!SCORE.getScoreContainer()) {
            SCORE.renderScore();
        } else if (SCORE.currentScore !== null) {
            SCORE.resetScore();
        }
        if (!LIFES.getLifesContainer()) {
           LIFES.renderLifes();
        } else if (LIFES.usedLifes !== 0) {
           LIFES.resetLifes();
        }
        if (!GAME_TYPE.getGameTypeContainer()) {
            GAME_TYPE.renderGameType(type);
        } else {
            GAME_TYPE.updateGameType(type);
        }
    },

    demoSpecificSettings: function () {
        WOLF_NAVIGATION.actionsAvailable = false;
        LIFES.removeLifes();
        SCORE.removeScore();
        GAME_TYPE.removeGameType();
        CLOCK.renderClock();
    },

    runGame: function() {
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
        LEVELS.resetLvl();
        WOLF.resetWolfPosition();
        HARE.setHareVisible(true);
        EGGS.resetEgg();
        CHICKENS.resetChickens();
    },

    startGame: function (gameType) {
        this.isDemoGame = false;
        this.gameSpecificSettings(gameType);
        this.setGameTypeStepTime(gameType);
        this.runGame();
    },

    startDemo: function () {
        this.isDemoGame = true;
        this.demoSpecificSettings();
        this.setGameTypeStepTime('A');
        this.runGame();
        WOLF.autoSetWolfPose();
    },

    initialize: function() {
        WOLF.render();

        setTimeout(function () {
            GAME.startDemo();
        }, 30);
    }
};