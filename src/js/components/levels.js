var LEVELS = {
    currentLvl: 1,

    getLvlsLength: function() {
        return LEVELS.lvlsList.length - 1;
    },

    checkLvl: function () {
        var lvlsLength = this.getLvlsLength();
        if (lvlsLength === this.currentLvl) {
            var nextLvl = this.currentLvl;
        } else {
            var nextLvl = this.currentLvl + 1;
        }

        if (SCORE.currentScore === LEVELS.lvlsList[nextLvl].startPoints && nextLvl !== lvlsLength) {
            this.switchLvl();
            GAME.setRoundTime(nextLvl);
            clearInterval(GAME.eggsInterval);
            GAME.runRound();
        } else if (SCORE.currentScore === SCORE.pointsLimit) {
            this.resetLvl();
            clearInterval(GAME.eggsInterval);
            GAME.runRound();
        }
    },

    switchLvl: function () {
        return this.currentLvl = this.currentLvl + 1;
    },

    resetLvl: function () {
        this.currentLvl = 1;
        GAME.setRoundTime(this.currentLvl);
    }
};