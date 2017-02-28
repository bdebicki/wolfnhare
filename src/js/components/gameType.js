var GAME_TYPE = {
    gameTypeClass: 'gameType',
    message: 'Game',

    renderGameTypeContainer: function (type) {
        var typeContainer = document.createElement('span');

        typeContainer.classList.add(this.gameTypeClass);
        typeContainer.innerHTML = this.message + ' ' + type;

        GAME.getGameContainer().appendChild(typeContainer);
    },

    getGameTypeContainer: function () {
        return document.querySelector('.' + this.gameTypeClass);
    },

    renderGameType: function (type) {
        this.renderGameTypeContainer(type);
    },
};