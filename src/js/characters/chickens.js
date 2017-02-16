var CHICKENS = {
    chickenClass: 'chicken',
    position: {
        topLeft: {
            cssClass: 'topLeft',
            state: 'topLeft'
        },
        bottomLeft: {
            cssClass: 'bottomLeft',
            state: 'bottomLeft'
        },
        topRight: {
            cssClass: 'topRight',
            state: 'topRight'
        },
        bottomRight: {
            cssClass: 'bottomRight',
            state: 'bottomRight'
        },
        currentChicken: []
    },

    addCurrentChicken: function (current) {
        this.currentChicken.push(CHICKENS.position[current].state);
    },

    removeCurrentChicken: function () {
        this.currentChicken.shift();
    },

    drawChicken: function () {
        var chickenPosition = CHICKENS.list[Math.floor(Math.random() * CHICKENS.list.length)],
            chicken = document.querySelector('.chicken.' + CHICKENS.position[chickenPosition].cssClass);

        this.addCurrentChicken(chickenPosition);
        return chicken;
    },

    getCurrentChicken: function () {
        return this.currentChicken[0];
    },

    resetChickens: function () {
        this.currentChicken = [];
    }
};