var CHICKENS = {
    chicken: {
        chickenClass: 'chicken',
        defaultEgg: false,

        chickenTrigger: function(position) {
            for (var i = 0, chicken = document.getElementsByClassName(this.chickenClass); i<chicken.length; i++) {
                if (chicken[i].classList.contains(position)) {
                    return chicken[i];
                }
            }
        },

        first: {
            position: 'topLeft',
            eggState: function() { return CHICKENS.chicken.defaultEgg },
            chickenDomEl: function() { return CHICKENS.chicken.chickenTrigger(this.position) }
        },
        second: {
            position: 'bottomLeft',
            eggState: function() { return CHICKENS.chicken.defaultEgg },
            chickenDomEl: function() { return CHICKENS.chicken.chickenTrigger(this.position) }
        },
        third: {
            position: 'topRight',
            eggState: function() { return CHICKENS.chicken.defaultEgg },
            chickenDomEl: function() { return CHICKENS.chicken.chickenTrigger(this.position) }
        },
        fourth: {
            position: 'bottomRight',
            eggState: function() { return CHICKENS.chicken.defaultEgg },
            chickenDomEl: function() { return CHICKENS.chicken.chickenTrigger(this.position) }
        }
    },

    egg: {
        steps: 5,
        defaultStep: 1
    }
};