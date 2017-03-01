var GAME_TYPE = {
    gameTypeClass: 'gameType',
    message: 'Game',

    renderGameTypeContainer: function () {
        var typeContainer = document.createElement('span');

        typeContainer.classList.add(this.gameTypeClass);

        GAME.getGameContainer().appendChild(typeContainer);
    },

    getGameTypeContainer: function () {
        return document.querySelector('.' + this.gameTypeClass);
    },

    renderGameType: function (type) {
        this.renderGameTypeContainer();
        this.updateGameType(type);
    },

    updateGameType: function (type) {
        this.getGameTypeContainer().innerHTML = this.message + ' ' + type;
    },

    removeGameType: function () {
        var game = GAME.getGameContainer(),
            gameType = game.querySelector('.' + this.gameTypeClass);

        if (gameType) {
            game.removeChild(gameType);
        } else {
            return null;
        }
    }
};