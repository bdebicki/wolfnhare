var CLOCK = {
    clockClass: 'clock',
    clockRefresh: 500,

    renderClock: function () {
        var clock = document.createElement('span');

        clock.classList.add(this.clockClass);

        GAME.getGameBody().appendChild(clock);
        this.runClock();
    },
  
    removeClock: function () {
        var clock = GAME.getGameBody().querySelector('.' + CLOCK.clockClass);

        if(clock) {
            GAME.getGameBody().removeChild(clock);
            clearInterval(this.clockInterval);
        } else {
            return null;
        }
    },

    setTime: function () {
        var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.querySelector('.' + CLOCK.clockClass).innerHTML = hours + ':' + minutes + ':' + seconds;
    },

    runClock: function () {
        this.clockInterval = setInterval(function () {
            CLOCK.setTime();
        }, this.clockRefresh);

        return this.clockInterval;
    }
};