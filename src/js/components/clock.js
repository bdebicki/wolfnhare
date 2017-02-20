var CLOCK = {
    clockClass: 'clock',
    clockRefresh: 500,

    getClockContainer: function () {
        return GAME.getGameContainer().querySelector('.' + CLOCK.clockClass);
    },

    renderClock: function () {
        var clock = document.createElement('span');

        clock.classList.add(this.clockClass);

        GAME.getGameContainer().appendChild(clock);
        this.runClock();
    },
  
    removeClock: function () {
        var clock = this.getClockContainer();

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

        this.getClockContainer().innerHTML = hours + ':' + minutes;
    },

    runClock: function () {
        this.clockInterval = setInterval(function () {
            CLOCK.setTime();
        }, this.clockRefresh);

        return this.clockInterval;
    }
};