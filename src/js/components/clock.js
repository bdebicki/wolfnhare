var CLOCK = {
    clockClass: 'clock',
    clockRefresh: 500,

    renderClock: function () {
        var clock = document.createElement('span');

        clock.classList.add(this.clockClass);

        GAME.getGameContainer().appendChild(clock);
        this.runClock();
    },
  
    removeClock: function () {
        var clock = GAME.getGameContainer().querySelector('.' + CLOCK.clockClass);

        if(clock) {
            GAME.getGameContainer().removeChild(clock);
            clearInterval(this.clockInterval);
        } else {
            return null;
        }
    },

    setTime: function () {
        var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        document.querySelector('.' + CLOCK.clockClass).innerHTML = hours + ':' + minutes;
    },

    runClock: function () {
        this.clockInterval = setInterval(function () {
            CLOCK.setTime();
        }, this.clockRefresh);

        return this.clockInterval;
    }
};