var GAME = {
    roundTime: function () {
        return EGGS.stepTime * EGGS.maxStep;
    },
    getActionBtn: function(btnType) {
        return document.querySelector('button[data-game="' + btnType + '"]')
    }
};