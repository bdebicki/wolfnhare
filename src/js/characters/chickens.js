var CHICKENS = {
    chickenClass: 'chicken',
    position: {
        topLeft: 'topLeft',
        bottomLeft: 'bottomLeft',
        topRight: 'topRight',
        bottomRight: 'bottomRight',
        currentChicken: []
    },

    getChicken: function(position) {
        for (var i = 0, chicken = document.getElementsByClassName(this.chickenClass); i<chicken.length; i++) {
            if (chicken[i].classList.contains(position)) {
                return chicken[i];
            }
        }
    },

    addCurrentChicken: function (current) {
        this.currentChicken.push(current.toLowerCase());
    },

    removeCurrentChicken: function () {
        this.currentChicken.shift();
    },

    drawChicken: function () {
        var chickenPosition = CHICKENS.list[Math.floor(Math.random() * CHICKENS.list.length)],
            chicken = document.querySelector('.chicken.' + chickenPosition);

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