var HARE = {
    hareId: 'hare',
    hiddenClass: 'hidden',
    isHareVisible: true,
    delays: {
        firstTimeHide: 30,
        firstTimeShow: 3500,
        visibleTime: 5000,
        hiddenTime: 4500
    },
  
    setHareVisible: function (boolen) {
        var hare = document.getElementById(this.hareId);

        this.isHareVisible = boolen;

        if(boolen === false) {
            hare.classList.add(this.hiddenClass);
        } else {
            hare.classList.remove(this.hiddenClass);
        }
    },

    hideHare: function() {
        if(!GAME.isGameOver) {
            this.setHareVisible(false);
        }
    },

    showHare: function() {
        if(!GAME.isGameOver) {
            this.setHareVisible(true);
        }
    },

    hideHareWithDelay: function (hideDelay, showDelay) {
        if(!GAME.isGameOver) {
            setTimeout(function () {
                HARE.hideHare();
                HARE.showHareWithDelay(hideDelay, showDelay);
            }, hideDelay);
        }
    },

    showHareWithDelay: function (hideDelay, showDelay) {
        if(!GAME.isGameOver) {
            setTimeout(function () {
                HARE.showHare();
                HARE.hideHareWithDelay(hideDelay, showDelay);
            }, showDelay);
        }
    },

    startTogglingHare: function () {
        setTimeout(function() {
            HARE.hideHare();

            setTimeout(function() {
                HARE.showHare();
                HARE.hideHareWithDelay(HARE.delays.visibleTime, HARE.delays.hiddenTime);
            }, HARE.delays.firstTimeShow);
        }, HARE.delays.firstTimeHide);
    }
};