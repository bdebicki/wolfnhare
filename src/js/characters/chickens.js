var CHICKENS = {
    chickenClass: 'chicken',
    firstChicken: 'topLeft',
    secondChicken: 'bottomLeft',
    thirdChicken: 'topRight',
    fourthChicken: 'bottomRight',

    getChicken: function(position) {
        for (var i = 0, chicken = document.getElementsByClassName(this.chickenClass); i<chicken.length; i++) {
            if (chicken[i].classList.contains(position)) {
                return chicken[i];
            }
        }
    },
    
    drawChicken: function () {
        var chickenPosition = CHICKENS.list[Math.floor(Math.random() * CHICKENS.list.length)],
            chicken = document.querySelector('.chicken.' + chickenPosition);

        return chicken;
    }
};