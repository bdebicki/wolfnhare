var EGGS = {
    eggClass: 'egg',
    eggElement: 'span',
    currentId: 0,
    initialId: 1,
    initialStep: 1,
    maxStep: 5,
    stepTime: {
        gameA: 800,
        gameB: 600
    },

    renderEgg: function(chicken) {
        var egg = document.createElement(this.eggElement);

        egg.classList.add(this.eggClass);
        egg.setAttribute('data-egg-step', this.initialStep);
        egg.setAttribute('data-egg-id', this.initialId);
        egg.setAttribute('data-in-game', GAME.gameId);
        chicken.appendChild(egg);

        this.currentId = this.initialId;
        this.initialId = this.initialId + 1;
    },

    updateStep: function(egg) {
        var nextStep = this.initialStep,
            maxStep = this.maxStep,
            time = GAME.selectetGameStepTime,
            update = function() {
                var i = nextStep++;

                if (i > maxStep) {
                    if (GAME.gameId === parseInt(egg.dataset.inGame)) {
                        if (!GAME.isGameOver) {
                            GAME.checkFall();
                        }
                        EGGS.removeEgg(egg);
                    }
                    return false;
                }

                setTimeout(function() {
                    if(!GAME.isGameOver) {
                        if (i <= maxStep) {
                           egg.dataset.eggStep = nextStep;
                        }
                        update();
                    }
                }, time);
            };
        return update();
    },


    removeEgg: function(egg) {
        egg.parentNode.removeChild(egg);
        return false;
    }, 
    
    addEgg: function () {
        this.renderEgg(CHICKENS.drawChicken());
        this.updateStep(document.querySelector('span[data-egg-id="' + this.currentId + '"]'));
    },
    
    resetEgg: function () {
        this.currentId = 0;
        this.initialId = 1;

        for (var i = 0, eggs = document.querySelectorAll('.egg').length; i < eggs; i++) {
            document.querySelector('.egg').parentNode.removeChild(document.querySelector('.egg'));
        }
    }
};