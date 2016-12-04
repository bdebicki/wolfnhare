var GAME = {
    btn: function(btnType) {return document.querySelector('button[data-game="' + btnType + '"]')},
    startBtn: function() {return this.btn('start')},
    pauseBtn: function() {return this.btn('pause')},
    restartBtn: function() {return this.btn('restart')}
};