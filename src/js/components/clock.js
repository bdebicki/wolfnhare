var CLOCK = {
    clockClass: 'clock',

    renderClock: function () {
        var clock = document.createElement('span');

        clock.classList.add(this.clockClass);

        GAME.getGameBody().appendChild(clock);

        setInterval(function() {CLOCK.updateTime()}, 200);
    },
  
    removeClock: function () {
        var clock = GAME.getGameBody().querySelector('.' + CLOCK.clockClass);

        if(clock) {
            GAME.getGameBody().removeChild(clock);
        } else {
            return null;
        }
    },

    updateTime: function () {
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
    }
};