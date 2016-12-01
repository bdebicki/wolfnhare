var EGGS = {
    eggClass: 'egg',
    eggElement: 'span',
    currentId: 0,
    initialId: 1,
    initialStep: 1,
    maxStep: 5,

    renderEgg: function(chicken) {
        var egg = document.createElement(this.eggElement);

        egg.classList.add(this.eggClass);
        egg.setAttribute('data-egg-step', this.initialStep);
        egg.setAttribute('data-egg-id', this.initialId);
        chicken.appendChild(egg);

        this.currentId = this.initialId;
        this.initialId = this.initialId + 1;
    },

    removeEgg: function(egg) {
        egg.parentNode.removeChild(egg);
        return false;
    }, 
    
    addEgg: function () {
        var chickenPosition = CHICKENS.list[Math.floor(Math.random() * CHICKENS.list.length)],
            chicken = document.querySelector('.chicken.' + chickenPosition);

        this.renderEgg(chicken);
        this.updateStep(document.querySelector('span[data-egg-id="' + this.currentId + '"]'));
    }
};


