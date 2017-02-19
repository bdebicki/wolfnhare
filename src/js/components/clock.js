var CLOCK = {
    clockClass: 'clock',

    renderClock: function () {
        var clock = document.createElement('span');

        clock.classList.add(this.clockClass);

        GAME.getGameBody().appendChild(clock);
    },
  
    removeClock: function () {
        var clock = GAME.getGameBody().querySelector('.' + CLOCK.clockClass);

        if(clock) {
            GAME.getGameBody().removeChild(clock);
        } else {
            return null;
        }
    }
};